---
title: Roles
sidebar_label: Roles
---

# Roles

A **role** defines what a back-office user is allowed to do. Each role combines **module access permissions** with a **role type**. Roles are created once and can then be assigned to as many users as needed, so permissions stay consistent across teams.

## Creating a Role

1. Open **User Management → Roles** and choose to add a new role.
2. Enter a **role name** that describes the job, e.g. *Finance Maker* or *Compliance Officer*.
3. Select the **access permissions** for each back-office module the role needs, such as General Ledger, Product Management, Customer Management or Transaction Management. Users with this role can only see and use the modules selected here.
4. Choose the **role type** (see below).
5. Submit the role for approval.

## Role Types

The role type controls what a user can do within the modules they have access to, and whether they can see customers' personal data.

| Role Type | What the user can do | Access to personal data (PII) |
| --------- | -------------------- | ----------------------------- |
| **Maker** | Create and submit requests, such as postings, configuration changes or customer actions | Restricted |
| **Checker** | Review, approve or reject requests submitted by makers | Restricted |
| **Compliance Maker** | Create and submit requests, like a Maker | **Full access** to all personal data |
| **Compliance Checker** | Review, approve or reject requests, like a Checker | **Full access** to all personal data |

Personal data (PII) includes details such as customers' names, identity numbers, mobile numbers, email addresses and addresses. Give the compliance role types only to users who need full customer details for compliance work, such as KYC reviews and investigations.

## Maker-Checker Principle

Separating Maker and Checker roles means that no single user can both create and approve the same request. Most changes in the back office, including new roles and users, need a maker to submit them and a different user with a checker role to approve them.

## Notes

- One role can be assigned to many users.
- Changes to a role apply to every user who has that role.
- Creating and changing roles is recorded in the [Audit Log](/docs/backoffice/audit-management).
