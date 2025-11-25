# Bill Payment

| **Participant**  | **Action**                                                                            |
| ---------------- | ------------------------------------------------------------------------------------- |
| Channel          | Customer confirms bill details, provides MPIN for authorization, proceeds for payment |
| Digital Services | Bill Payment Request (FAcc, billInfo) received                                        |
|                  | Validate request                                                                      |
|                  | Validate sending limit                                                                |
|                  | Block limit                                                                           |
| OpenConnect      | Bill Payment Request (FAcc, billInfo) received                                        |
|                  | Validate request                                                                      |
|                  | Prepare host message                                                                  |
| OpenWallet       | DebitRequest (FAcc, billInfo) received                                                |
|                  | Validate request                                                                      |
|                  | Validate account                                                                      |
|                  | Validate balance                                                                      |
|                  | Debit customer                                                                        |
|                  | Post GL entries                                                                       |
|                  | Update limits                                                                         |
|                  | Update balance                                                                        |
|                  | Update statement                                                                      |
|                  | DebitResponse (RespCode, AuthId) sent                                                 |
| OpenConnect      | Update transaction log                                                                |
|                  | Send confirmation to Channel                                                          |
|                  | Prepare message for 1LINK                                                             |
|                  | Send notifications to customer                                                        |
| Digital Services | Bill Payment Response (RespCode, AuthId) sent                                         |
| Channel          | eReceipt shown to customer; in-app notifications sent                                 |
| OpenConnect      | Store transaction into SAF Queue                                                      |
| SAF Processor    | Receives queued transaction                                                           |
|                  | Loop: Bill Marking (TYPE 0220) to 1LINK                                               |
|                  | Loop: Bill Marking (TYPE 0230) from 1LINK                                             |
| OpenConnect      | HTTP 200 acknowledgement sent                                                         |


![Bill Payment](/img/bill-payment.png)