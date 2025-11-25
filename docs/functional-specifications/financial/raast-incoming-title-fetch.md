# RAAST - Incoming Title Fetch

| **Participant** | **Action**                                           |
| --------------- | ---------------------------------------------------- |
| RAAST           | Sent request for Channel account title fetch         |
| Open Connect    | Title Fetch Request (TitleFetch v2) received         |
|                 | Prepare Title Fetch Request                          |
|                 | Log request                                          |
| OpenWallet      | Title Fetch Request (ToAccount) received             |
|                 | Validate token                                       |
|                 | Validate request                                     |
|                 | Validate account                                     |
|                 | Title Fetch Response (CustomerInfo) sent             |
| Open Connect    | Update transaction log                               |
|                 | Title Fetch Response (BeneficiaryInfo) sent to RAAST |
| RAAST           | Response back to sender bank                         |

![RAAST Incoming Title Fetch](/img/raast-incoming-title-fetch.png)