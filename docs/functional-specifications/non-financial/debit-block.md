---
id: debit-block
title: Debit Block
---

# Debit Block

**Debit Block** stops money from leaving a customer's account while still allowing money to come in. It is a lighter alternative to a full account block, for example while a suspicious transaction or a dispute is being investigated.

<div className="spec-split">
<div className="spec-split__table">

| Participant | Action |
| ----------- | ------ |
| Back-office user | Opens the customer's record in Customer Management and selects **Debit Block** |
|  | Enters **Remarks** explaining the reason for the debit block |
|  | Optionally uploads a supporting document (PDF, XLSX, DOCX, EML or MSG, up to 5 MB) |
|  | Clicks **Confirm** |
| OpenWallet | Applies the debit block to the account |
|  | Rejects outgoing transactions (debits) from the account |
|  | Continues to accept incoming transactions (credits) |
|  | Records the action in the audit log |

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/debit-block.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size image">
<img src={require('@site/static/img/debit-block.png').default} alt="Debit block confirmation" />
</a>
<div className="spec-split__hint">Click the image to view it full size</div>
</div>
</div>

## Debit Block vs Account Block

| | Debit Block | Account Block |
| - | ----------- | ------------- |
| Outgoing transactions (debits) | Blocked | Blocked |
| Incoming transactions (credits) | Allowed | Blocked |
| Typical use | Investigations, disputes, suspicious activity | Customer-reported fraud |

## Key Points

- The customer can still receive funds while the debit block is in place.
- Every debit block is recorded in the [Audit Log](/docs/backoffice/audit-management) with the user, time and remarks.

## Configuration

The behaviour described here is the out-of-the-box setup. Whether each action takes effect immediately or requires maker-checker approval can be configured to suit each institution's policies and regulatory requirements.
