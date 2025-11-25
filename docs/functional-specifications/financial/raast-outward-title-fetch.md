# RAAST Outward Title Fetch via Account Number

| **Participant** | **Action**                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Channel         | Customer selects transfer mode (RAAST ID / Account# / IBAN), selects Bank, inputs Account#, selects payment purpose, enters amount, proceeds for Title Fetch |
| Digital Service | Title Fetch Request (Acc#, BankId, TxnInfo) received                                                                                                         |
|                 | Validate request                                                                                                                                             |
|                 | Validate limit                                                                                                                                               |
| OC              | Title Fetch Request (Acc#, BankId) received                                                                                                                  |
|                 | Validate request                                                                                                                                             |
|                 | Prepare RAAST TF Request                                                                                                                                     |
| RAAST           | Title Fetch Request (TitleFetch v2) received                                                                                                                 |
|                 | Validate request                                                                                                                                             |
| Bank            | Title Fetch Request (TitleFetch v2) received                                                                                                                 |
|                 | Validate request                                                                                                                                             |
|                 | Fetch beneficiary account info                                                                                                                               |
|                 | Response back to RAAST                                                                                                                                       |
| RAAST           | Title Fetch Response (Beneficiary info) sent to OC                                                                                                           |
| OC              | Validate response                                                                                                                                            |
|                 | Identify as “Success” response                                                                                                                               |
|                 | Title Fetch Response (bene a/c info, HostName) sent to Digital Service                                                                                       |
| Digital Service | Title Fetch Response (bene a/c info, HostName) sent to Channel                                                                                               |
| Channel         | Display beneficiary information to customer                                                                                                                  |

![RAAST Outward Title Fetch](/img/raast-outward-title-fetch.png)