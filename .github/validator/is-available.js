/**
 * Checks if there is an available room. This is done by checking the number of
 * conflicting reservations and comparing it to the number of available rooms.
 *
 * @param {string | string[] | {label: string; required: boolean }} field The input field.
 *
 * This can be one of several types:
 *  - `string` -> The value of the field (e.g. `'my-team'`)
 *  - `string[]` -> The value(s) of the field (e.g. `['team-1', 'team-2']`)
 *  - A checkboxes object with a `label` and `required` property (e.g.
 *    `{ label: 'my-team', required: true }`)
 *
 *  You do not need to handle them all! It is up to the individual validation
 *  script to define which type(s) to expect and how to handle them.
 *
 * @returns {Promise<string>} An error message or `'success'`
 */
export default async (field) => {
  // If you are importing libraries that are not included in the GitHub Actions
  // runner image, you will need to make sure to include the following steps in
  // your workflow file **before** running the validator action:
  //
  // - name: Setup Node.js
  //   uses: actions/setup-node@vX.X.X
  //   with:
  //     node-version: 20
  //
  // - name: Install dependencies
  //   run: npm install
  //
  // For example, the above would be required here since we are importing the
  // `@octokit/rest` library to make requests to the GitHub API.
  const core = await import('@actions/core')
  const github = await import('@actions/github')
  const { parseIssue } = await import('@github/issue-parser')
  const { readFileSync } = await import('fs')

  // Parse the issue body into a more usable format. Include the issue template
  // so that the parser can extract the metadata from the issue.
  const issueTemplateBody = readFileSync(
    `${core.getInput('workspace', { required: true })}/.github/ISSUE_TEMPLATE/${core.getInput('issue-form-template', { required: true })}`,
    'utf8'
  )
  const reservation = parseIssue(
    github.context.payload.issue.body,
    issueTemplateBody
  )

  // Get the list of rooms from the JSON file. In a real-world scenario, you
  // would likely fetch this data from a database, API, or another source.
  const rooms = JSON.parse(
    readFileSync(
      `${core.getInput('workspace', { required: true })}/.github/validator/rooms.json`,
      'utf8'
    )
  )

  // Get the rooms that match the room type from the JSON file.
  const matching = rooms.filter((room) => room.type === reservation.room[0])

  // Get the conflicting reservations (any confirmed reservations with the same
  // room type and overlapping date ranges).
  const conflicting = await getConflictingReservations(
    reservation,
    issueTemplateBody,
    github.context.payload.repository.owner.login,
    github.context.payload.repository.name
  )

  // If there are conflicting reservations greater than or equal to the number
  // of available rooms, reject the request.
  if (conflicting.length >= matching.length)
    return 'No rooms available for the selected dates.'

  return 'success'
}

/**
 * Gets confirmed reservations that conflict with the selected date range. Any
 * confirmed reservations with the same room type and overlapping dates are
 * considered a conflict.
 *
 * This is done by checking the list of existing reservations and seeing if the
 * number of reservations for this date rate equals or exceeds the number of
 * available rooms. In a real-world scenario, this would be done by querying a
 * database or API that contains the list of existing rooms and reservations. In
 * this example, we're comparing a list of rooms (JSON file) with a list of
 * confirmed reservations (GitHub Issues).
 *
 * @param reservation The reservation request details.
 * @param issueTemplateBody The body of the issue template.
 * @param owner The owner of the repository that triggered the action.
 * @param repository The name of the repository that triggered the action.
 * @returns A boolean indicating whether or not there is an available room for
 *          the selected dates.
 */
async function getConflictingReservations(
  reservation,
  issueTemplateBody,
  owner,
  repository
) {
  const core = await import('@actions/core')
  const { Octokit } = await import('@octokit/rest')
  const { parseIssue } = await import('@github/issue-parser')

  const octokit = new Octokit({
    auth: core.getInput('github-token', { required: true })
  })

  // Get the list of existing reservations from the GitHub Issues API.
  const issues = await octokit.paginate(octokit.rest.issues.listForRepo, {
    owner,
    repo: repository,
    state: 'open', // Open issues only; closed are considered past reservations.
    labels: 'reservation,confirmed' // Confirmed reservations only.
  })

  // Get the confirmed reservations that conflict with the selected dates. A
  // confirmed reservation conflicts if the start date or end date falls within
  // the range of the selected dates for the new reservation.
  return issues.filter((issue) => {
    // Parse the issue body to get the existing reservation details.
    const existingReservation = parseIssue(issue.body, issueTemplateBody)

    // Ignore reservations where the room type does not match.
    if (existingReservation.room[0] !== reservation.room[0]) return false

    return (
      // New reservation's check-out date is between the existing reservation's
      // check-in and check-out dates.
      (reservation.checkOut >= new Date(existingReservation['check-in']) &&
        reservation.checkOut <= new Date(existingReservation['check-out'])) ||
      // New reservation's check-in date is between the existing reservation's
      // check-in and check-out dates.
      (reservation.checkIn >= new Date(existingReservation['check-in']) &&
        reservation.checkIn <= new Date(existingReservation['check-out'])) ||
      // New reservation starts before and ends after existing reservation.
      (reservation.checkIn <= new Date(existingReservation['check-in']) &&
        reservation.checkOut >= new Date(existingReservation['check-out']))
    )
  })
}
