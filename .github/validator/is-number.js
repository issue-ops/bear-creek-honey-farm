/**
 * Example custom validator script: checks if an input is a valid number
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
  const { readFileSync } = await import('fs')
  const core = await import('@actions/core')

  // In this validator, the only type of input we are expecting is a `string` (a
  // numeric string). If the field is not a string, return an error message. In
  // each custom validator, you can define the rules for what is valid input and
  // what is not. In other cases, you may want to only accept lists of strings
  // (dropdown) or lists of objects (checkboxes). It is up to you!
  if (typeof field !== 'string') return 'Field type is invalid'

  // In this validator, we simply want to verify the provided input is an
  // integer.
  if (!Number.isInteger(Number(field))) return 'Field must be a number'

  // Get the list of rooms from the JSON file. In a real-world scenario, you
  // would likely fetch this data from a database, API, or another source.
  const rooms = JSON.parse(
    readFileSync(
      `${core.getInput('workspace', { required: true })}/.github/validator/rooms.json`,
      'utf8'
    )
  )

  console.log(rooms)

  console.log(field)

  // Get the rooms that match the room type from the JSON file.
  const matching = rooms.filter((room) => room.type === field)

  console.log(matching)

  // If the matching room does not support this many guests, return an error.
  if (matching[0].max_guests < Number(field))
    return 'Room does not support that many guests'

  // If the input is a valid number, return `'success'`
  return 'success'
}
