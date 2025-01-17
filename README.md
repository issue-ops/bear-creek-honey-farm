# IssueOps Demo Repository

![Logo](./images/logo.png)

Welcome to Bear Creek Honey Farm! This repository hosts a fake Bed and Breakfast
website using GitHub Pages. This acts as a starting point for various IssueOps
demonstrations. Feel free to check it out!

> [!NOTE]
>
> All of the content in this repository is fake and for demonstration purposes
> only. By booking a reservation at Bear Creek Honey Farm, you are not actually
> booking a stay at a Bed and Breakfast. You are creating an issue in a GitHub
> repository.

![CodeQL](https://github.com/issue-ops/bear-creek-honey-farm/actions/workflows/codeql.yml/badge.svg)
![Continuous Integration](https://github.com/issue-ops/bear-creek-honey-farm/actions/workflows/continuous-integration.yml/badge.svg)
![Continuous Delivery](https://github.com/issue-ops/bear-creek-honey-farm/actions/workflows/continuous-delivery.yml/badge.svg)
![Linter](https://github.com/issue-ops/bear-creek-honey-farm/actions/workflows/linter.yml/badge.svg)

## About

Curious about IssueOps? Want to see it in action? This repository includes a
GitHub Issue-based reservation system for a fake Bed and Breakfast called Bear
Creek Honey Farm. Check it out by
[opening an issue](https://github.com/issue-ops/bear-creek-honey-farm/issues/new?template=reservation.yml)!

As you interact with your issue, a series of GitHub Actions workflows will drive
the "reservation" to completion. This includes:

- Validating the reservation request
- Confirming there are sufficient rooms available
- Booking the reservation
- Expiring past reservations
- Cancelling reservations

For more information on IssueOps, check out our
[documentation site](https://issue-ops.github.io/docs/)!

### Create an Issue

The first step is to create an issue using the
[reservation issue template](https://github.com/issue-ops/bear-creek-honey-farm/issues/new?template=reservation.yml).

Once complete, please wait a few seconds for GitHub Actions to trigger and
process your request. The issue will be updated with a summary of your
reservation request, or an error if there were any problems parsing your
reservation.

> If there are any validation errors, they will be added to the issue as a
> comment. You can edit your issue to correct them and the workflow will re-run
> automatically.

### Confirm the Reservation

Once your request is validated, you can submit it by commenting `/reserve`.

This will "book" your request, and update the issue with a confirmation message.
It will also change the status of the reservation in the repository's
[Reservation Board](https://github.com/orgs/issue-ops/projects/3/views/1).

### Cancel the Reservation

At any time, you can cancel a reservation by commenting `/cancel`, or simply
closing the issue.

This will update the status in the project board, as well as update the issue
with a cancellation message.

### Expiring Reservations

Reservations that pass their check-out date will be automatically cancelled.

## Implementation

This IssueOps demonstration is implemented using a few different workflows and
actions.

The bulk of the functionality is actually implemented in a separate repository,
[`issue-ops/demo-reservation-action`](https://github.com/issue-ops/demo-reservation-action).
This repository contains a custom GitHub Action that implements a simple
reservation system. The workflows in this repository call this action with
different inputs to perform the various tasks.

### [`process-issue.yml`](.github/workflows/process-issue.yml)

Any time an issue is opened, edited, or reopened, this workflow runs. It
performs a number of tasks, including:

- Adding and removing labels to indicate the status of the reservation
- Parsing and validating the reservation request
- Commenting on the issue with the status of the reservation

### [`process-comment.yml`](.github/workflows/process-comment.yml)

Any time a user comments on an issue, this workflow runs. It looks for specific
commands, such as `/reserve` or `/cancel`, and performs the following tasks:

- Adding and removing labels to indicate the status of the reservation
- Re-validate the reservation request
- Process the reservation, cancellation, etc.

### [`process-issue-closed.yml`](.github/workflows/process-issue-closed.yml)

This workflow runs any time an issue is closed. It performs a few cleanup tasks
to ensure the reservation is cancelled.

### [`process-issue-expiration.yml`](.github/workflows/process-issue-expiration.yml)

This workflow runs once per day, and is responsible for closing out any
reservations where the check-out date has passed.
