# RAAST Outward Title Fetch via IBAN

| **Participant** | **Action**                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Channel         | Customer selects transfer mode (RAAST ID / Account# / IBAN), selects “IBAN”, inputs IBAN, selects payment purpose, enters amount, proceeds for Title Fetch |
| Digital Service | Title Fetch Request (IBAN, TxnInfo) received                                                                                                               |
|                 | Validate request                                                                                                                                           |
|                 | Validate IBAN                                                                                                                                              |
|                 | Validate limit                                                                                                                                             |
| OC              | Title Fetch Request (IBAN, BankId) received                                                                                                                |
|                 | Validate request                                                                                                                                           |
|                 | Prepare RAAST TF Request                                                                                                                                   |
| RAAST           | Title Fetch Request (TitleFetch v2) received                                                                                                               |
|                 | Validate request                                                                                                                                           |
| Bank            | Title Fetch Request (TitleFetch v2) received                                                                                                               |
|                 | Validate request                                                                                                                                           |
|                 | Fetch beneficiary account info                                                                                                                             |
|                 | Response back to RAAST                                                                                                                                     |
| RAAST           | Title Fetch Response (Beneficiary info) sent to OC                                                                                                         |
| OC              | Validate response                                                                                                                                          |
|                 | Identify as “Success” response                                                                                                                             |
|                 | Title Fetch Response (bene a/c info, HostName) sent to Digital Service                                                                                     |
| Digital Service | Title Fetch Response (bene a/c info, HostName) sent to Channel                                                                                             |
| Channel         | Display beneficiary info to customer                                                                                                                       |


![RAAST Outward Title Fetch via IBAN](/img/raast-outward-title-fetch-iban.png)