---
id: account-block
title: Customer Account Block
---

# Customer Account Block

**Customer Account Block** stops all activity on a customer's account. Its main purpose is to protect customers: if a customer reports fraud, such as a lost phone or a compromised account, the account can be blocked straight away to prevent further losses.

<div className="spec-split">
<div className="spec-split__table">

| Participant | Action |
| ----------- | ------ |
| Customer | Reports suspected fraud or unauthorized activity to the institution |
| Back-office user | Opens the customer's record in Customer Management and selects **Block Account** |
|  | Enters **Remarks** explaining the reason for the block |
|  | Optionally uploads a supporting document (PDF, XLSX, DOCX, EML or MSG, up to 5 MB) |
|  | Clicks **Confirm** |
| OpenWallet | Blocks the account **immediately**, with no approval step |
|  | Rejects all further transactions on the account |
|  | Records the action in the audit log |

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/account-block.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size image">
<img src={require('@site/static/img/account-block.png').default} alt="Block account confirmation" />
</a>
<div className="spec-split__hint">Click the image to view it full size</div>
</div>
</div>

## Immediate Effect

Out of the box, an account block **takes effect immediately** and does not wait for maker-checker approval. When a customer reports fraud, every minute counts, so the block is applied as soon as it is confirmed.

## Key Points

- While blocked, the account cannot be used for transactions.
- Use [Debit Block](./debit-block) instead if the customer should still be able to receive funds.
- Every block is recorded in the [Audit Log](/docs/backoffice/audit-management) with the user, time and remarks.

## Configuration

The behaviour described here is the out-of-the-box setup. Whether each action takes effect immediately or requires maker-checker approval can be configured to suit each institution's policies and regulatory requirements.
