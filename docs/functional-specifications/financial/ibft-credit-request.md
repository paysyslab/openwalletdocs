# IBFT Credit Request


| **Participant**   | **Action**                                                                   |
| ----------------- | ---------------------------------------------------------------------------- |
| **1LINK**         | Sends credit request for Payvay account                                      |
| **Open Connect**  | Receives Credit Request *(Type: 0220 [ISO8583])*                             |
|                   | Validates account                                                            |
|                   | Logs the request                                                             |
| **OpenWallet**    | Receives *Account Verification Request* (ToAccount, Amount)                  |
|                   | Validates token                                                              |
|                   | Validates request                                                            |
|                   | Validates account                                                            |
|                   | Validates credit limit                                                       |
|                   | Sends *Account Verification Response* (verificationResult)                   |
| **Open Connect**  | Updates transaction log                                                      |
|                   | Sends *Credit Response* *(Type: 0230 [ISO8583])* to 1LINK                    |
| **1LINK**         | Sends response back to sender bank                                           |
| **SAF Processor** | Stores transaction into SAF Queue                                            |
| **OpenWallet**    | Receives Credit Request *(accountInfo, TxnInfo)* — **looped multiple times** |
|                   | Sends Credit Response *(Success)*                                            |
|                   | Credits customer                                                             |
|                   | Posts GL entries                                                             |
|                   | Updates customer statement                                                   |
|                   | Updates customer credit limit                                                |
|                   | Sends in-app notifications                                                   |
|                   | Sends credit SMS                                                             |
| **SAF Processor** | Returns **HTTP 200** (acknowledgment)                                        |


![IBFT Credit Request Flow](/img/ibft-credit-request.png)