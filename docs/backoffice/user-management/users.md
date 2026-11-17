---
title: Users
sidebar_label: Users
---

# Users

The **Users** screen is where back-office users are created and managed. Each user is given a [role](./roles), which determines the modules they can access and what they can do there.

## Creating a User

1. Open **User Management → Users** and choose to add a new user.
2. Enter the user's basic details, such as name, username and **email address**.
3. Assign a **role**. One role can be shared by many users, so pick the existing role that matches the user's job.
4. Submit the request.
5. A second user with a checker role reviews and **approves** the request (maker-checker).

## First Login

Once the user is approved:

1. The system emails a **temporary password** to the user's registered email address.
2. The user signs in to the back office with their username and the temporary password.
3. On first sign-in, the user **must reset their password** before continuing. This step is enforced and cannot be skipped.
4. After setting a new password, the user can start using the back office with the permissions of their role.

## User Lifecycle

| Stage | What happens |
| ----- | ------------ |
| **Created** | A maker submits the new user with a role assigned. |
| **Approved** | A checker approves the request and the user's account is activated. |
| **Password issued** | A temporary password is emailed to the user. |
| **First login** | The user signs in and is required to set a new password. |
| **Active** | The user works in the back office according to their role. |

## Notes

- Make sure the email address is correct, as the temporary password is sent only to that address.
- To change what a user can do, assign them a different role or update their current role.
- Creating and changing users is recorded in the [Audit Log](/docs/backoffice/audit-management).
