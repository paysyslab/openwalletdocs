# Outward Title Fetch

This flow describes the process when a channel initiates an outward title fetch, with RAAST preferred and fallback allowed.

---

| **Participant**   | **Action** |
|-------------------|------------|
| **Channel** | Title Fetch Request (Acc#, BankId) initiated |
| **Channel** | Request sent with: Preferred method = "RAAST", Fallback allowed = "Yes" |
| **Digital Service** | Forwards Title Fetch Request (Acc#, BankId) to OpenConnect (OC) |
| **OC** | Validates request |
| **OC** | IBAN not found — request contains Account# |
| **OC** | Fallback allowed → proceed with fallback |
| **OC** | Retrieves IMD for destination bank |
| **OC** | Sends Title Fetch Request to 1LINK |
| **1LINK** | Receives Title Fetch Request (Acc#, IMD) |
| **1LINK** | Validates request |
| **Bank** | Receives Title Fetch Request |
| **Bank** | Validates request |
| **Bank** | Fetches beneficiary account information |
| **Bank** | Sends Title Fetch Response back to 1LINK |
| **1LINK** | Sends Title Fetch Response (beneficiary account info) to OC |
| **OC** | Validates response |
| **OC** | Identifies response as **Success** |
| **OC** | Sends Title Fetch Response (beneficiary info + HostName) to Digital Service |
| **Digital Service** | Displays beneficiary information to customer |
| **Channel** | Receives Title Fetch Response (beneficiary info + HostName) |

---

## 📌 Notes

- If IBAN is missing and fallback is allowed → OC fetches IMD and routes through 1LINK.
- Final response includes the destination HostName and beneficiary details.

![Outward Title Fetch Flow](/img/outward-title-fetch-account.png)

