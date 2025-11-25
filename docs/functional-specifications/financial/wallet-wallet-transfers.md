# Wallet to Wallet Transfers

| **Participant** | **Action**                                                  |
| --------------- | ----------------------------------------------------------- |
| Channel         | Customer confirms details, inputs MPIN, proceeds to payment |
| Digital Service | IBT Request (FAcc#, TAcc#, TxnInfo) received                |
|                 | Validate request                                            |
|                 | Validate limit                                              |
|                 | Update limit                                                |
|                 | Log transaction                                             |
| OpenConnect     | IBT Request (FAcc#, TAcc#, TxnInfo) received                |
|                 | Validate request                                            |
|                 | Prepare host message                                        |
| OpenWallet      | Title Fetch Request (Acc#, TxnInfo) received                |
|                 | Validate request                                            |
|                 | Validate account                                            |
|                 | Validate sender limit                                       |
|                 | Validate receiver limit                                     |
|                 | Validate balance                                            |
|                 | Debit (DR) sender account                                   |
|                 | Credit (CR) receiver account                                |
|                 | Update balances                                             |
|                 | Update statements                                           |
| OpenConnect     | IBT Response (AuthID) received                              |
|                 | Validate response                                           |
|                 | Identify as “Success” response                              |
|                 | IBT Response (RespCode, AuthID) sent to Digital Service     |
| Digital Service | IBT Response (RespCode, AuthID) sent to Channel             |
| Channel         | e-Receipt shown to customer, in-app notifications sent      |


![Wallet to Wallet Title Fetch](/img/wallet-to-wallet-transfers.png)