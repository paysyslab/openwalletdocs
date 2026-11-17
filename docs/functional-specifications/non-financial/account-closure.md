---
id: account-closure
title: Customer Account Closure
---

# Customer Account Closure

**Customer Account Closure** permanently closes a customer's wallet account. It is used when a customer asks to close their account, or when an account must be closed for operational or regulatory reasons, such as the customer being deceased.

<div className="spec-split">
<div className="spec-split__table">

| Participant | Action |
| ----------- | ------ |
| Back-office user (Maker) | Opens the customer's record in Customer Management and selects **Close Account** |
|  | Enters **Remarks** explaining the reason for closure |
|  | Optionally uploads a supporting document (PDF, XLSX, DOCX, EML or MSG, up to 5 MB) |
|  | Clicks **Confirm** to submit the request |
| OpenWallet | Records the closure request as pending approval |
| Back-office user (Checker) | Reviews the request, remarks and supporting document |
|  | Approves or rejects the request |
| OpenWallet | On approval, closes the account and sets its status to **Closed** |
|  | Records the action in the audit log |

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/account-closure.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size image">
<img src={require('@site/static/img/account-closure.png').default} alt="Close account confirmation" />
</a>
<div className="spec-split__hint">Click the image to view it full size</div>
</div>
</div>

## Approval

Out of the box, account closure goes through **maker-checker approval**. The account stays open until a second authorized user approves the request, which prevents accounts from being closed by mistake or without authorization.

## Key Points

- A closed account can no longer be used for transactions.
- The remarks and any supporting document are kept with the request for audit purposes.
- Every closure request, approval and rejection is recorded in the [Audit Log](/docs/backoffice/audit-management).

## Configuration

The behaviour described here is the out-of-the-box setup. Whether each action takes effect immediately or requires maker-checker approval can be configured to suit each institution's policies and regulatory requirements.
