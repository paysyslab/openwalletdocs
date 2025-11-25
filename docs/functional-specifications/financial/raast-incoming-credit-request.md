# RAAST - Incoming Credit Request

| **Participant** | **Action**                                                |
| --------------- | --------------------------------------------------------- |
| RAAST           | Sent credit request for Channel account                   |
| Open Connect    | Payment Request (Pacs.008) received                       |
| RAAST           | HTTP 200 acknowledgement sent                             |
| Open Connect    | Validate request                                          |
|                 | Prepare host message                                      |
| OpenWallet      | Account Verification Request (ToAccount, Amount) received |
|                 | Validate token                                            |
|                 | Validate request                                          |
|                 | Validate account                                          |
|                 | Validate credit limit                                     |
|                 | Account Verification Response (verificationResult) sent   |
| Open Connect    | Update transaction log                                    |
|                 | Payment Response (Pacs.002 (AUTH)) sent to RAAST          |
| RAAST           | HTTP 200 acknowledgement sent                             |
| Open Connect    | Update position for sender                                |
|                 | Update position for receiver                              |
|                 | Send payment confirmation                                 |
| RAAST           | Payment Confirmation (Pacs.002 (ACSP)) sent               |
| Open Connect    | HTTP 200 acknowledgement sent                             |
| OpenWallet      | CreditRequest (accInfo, PaymentInfo) received             |
|                 | Credit customer                                           |
|                 | Post GL entries                                           |
|                 | Update customer statement                                 |
|                 | Update customer credit limit                              |
|                 | Send in-app notifications                                 |
|                 | Send credit SMS                                           |
|                 | CreditResponse (RespCode, AuthId) sent                    |


![RAAST Incoming Credit Request](/img/raast-incoming-credit-request.png)