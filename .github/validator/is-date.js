/**
 * Example custom validator script: checks if a date is valid
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
  // In this validator, the only type of input we are expecting is a `string` (a
  // date string). If the field is not a string, return an error message. In
  // each custom validator, you can define the rules for what is valid input and
  // what is not. In other cases, you may want to only accept lists of strings
  // (dropdown) or lists of objects (checkboxes). It is up to you!
  if (typeof field !== 'string') return 'Field type is invalid'

  // In this validator, we simply want to verify the provided input matches a
  // date in the format `MM/DD/YYYY`. If it does not, return an error message.
  if (
    // Must be in the format MM/DD/YYYY
    !/^\d{2}\/\d{2}\/\d{4}$/.test(field) ||
    // Must be a valid date
    isNaN(new Date(field))
  )
    return 'Field must be a date (MM/DD/YYYY)'

  // We can also check if the date is in the future. If it is not, return an
  // error message.
  if (new Date(field) <= new Date()) return 'Date must be in the future'

  // If the input is a valid date, return `'success'`
  return 'success'
}
