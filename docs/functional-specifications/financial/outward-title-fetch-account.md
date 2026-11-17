# Outward Title Fetch

This flow describes the process when a channel initiates an outward title fetch, with Domestic Instant Payment System (IPS) preferred and fallback allowed.

<div className="spec-split">
<div className="spec-split__table">

| **Participant**   | **Action** |
|-------------------|------------|
| **Channel** | Title Fetch Request (Acc#, BankId) initiated |
| **Channel** | Request sent with: Preferred method = "IPS", Fallback allowed = "Yes" |
| **Digital Service** | Forwards Title Fetch Request (Acc#, BankId) to OpenConnect (OC) |
| **OC** | Validates request |
| **OC** | IBAN not found — request contains Account# |
| **OC** | Fallback allowed → proceed with fallback |
| **OC** | Retrieves IMD for destination bank |
| **OC** | Sends Title Fetch Request to Domestic Payment Switch |
| **Domestic Payment Switch** | Receives Title Fetch Request (Acc#, IMD) |
| **Domestic Payment Switch** | Validates request |
| **Bank** | Receives Title Fetch Request |
| **Bank** | Validates request |
| **Bank** | Fetches beneficiary account information |
| **Bank** | Sends Title Fetch Response back to Domestic Payment Switch |
| **Domestic Payment Switch** | Sends Title Fetch Response (beneficiary account info) to OC |
| **OC** | Validates response |
| **OC** | Identifies response as **Success** |
| **OC** | Sends Title Fetch Response (beneficiary info + HostName) to Digital Service |
| **Digital Service** | Displays beneficiary information to customer |
| **Channel** | Receives Title Fetch Response (beneficiary info + HostName) |

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/outward-title-fetch-account.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size diagram">
<img src={require('@site/static/img/outward-title-fetch-account.png').default} alt="Outward Title Fetch Flow" />
</a>
<div className="spec-split__hint">Click the diagram to view it full size</div>
</div>
</div>

## Notes

- If IBAN is missing and fallback is allowed → OC fetches IMD and routes through Domestic Payment Switch.
- Final response includes the destination HostName and beneficiary details.
