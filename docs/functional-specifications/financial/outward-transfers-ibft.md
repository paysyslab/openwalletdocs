# Outward Transfers - IBFT

| **Participant**      | **Action**                                                                 |
| -------------------- | -------------------------------------------------------------------------- |
| **Channel**          | Customer confirms receiver details, enters MPIN, and proceeds with payment |
| **Digital Services** | Receives IBFT Request *(FromAccount, ToAccount, TxnInfo)*                  |
|                      | Validates request                                                          |
|                      | Validates sending limit                                                    |
|                      | Blocks limit for transaction                                               |
| **OpenConnect (OC)** | Receives IBFT Transfer Request *(FAcc, TAcc, TxnInfo)*                     |
|                      | Validates request                                                          |
|                      | Prepares host-compatible ISO message                                       |
| **OpenWallet (OW)**  | Receives DebitRequest *(FAcc, TAcc, TxnInfo)*                              |
|                      | Validates request                                                          |
|                      | Validates account status                                                   |
|                      | Validates balance availability                                             |
|                      | Debits customer account                                                    |
|                      | Posts GL entries                                                           |
|                      | Updates customer limits                                                    |
|                      | Updates balance                                                            |
|                      | Updates account statement                                                  |
| **OpenConnect**      | Receives DebitResponse *(RespCode, AuthId)*                                |
|                      | Updates transaction log                                                    |
|                      | Sends confirmation back to Digital Services                                |
|                      | Prepares Credit Advise message for 1LINK                                   |
|                      | Sends notifications to customer                                            |
| **Digital Services** | Sends IBFT Response *(RespCode, AuthId)* to Channel                        |
| **Channel**          | Shows e-Receipt to customer; in-app notification delivered                 |
| **OpenConnect**      | Stores transaction in SAF queue                                            |
| **SAF Processor**    | Receives queued transaction                                                |
|                      | Performs loop execution: Sends Credit Advise *(TYPE 0220)* to OpenWallet   |
| **OpenWallet**       | Returns Credit Advise Response *(TYPE 0230)*                               |
| **SAF Processor**    | Sends HTTP 200 acknowledgment                                              |


![Outward IBFT Transfer Flow](/img/outward-transfers-ibft.png)