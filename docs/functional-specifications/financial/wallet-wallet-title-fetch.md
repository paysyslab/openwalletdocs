# Wallet to Wallet - Title Fetch

| **Participant**     | **Action**                                                                                                 |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Channel**         | Customer enters **Account#**, selects **payment purpose**, enters **amount**, and proceeds for title fetch |
| **Digital Service** | Receives Title Fetch Request *(Acc#, BankId, TxnInfo)*                                                     |
|                     | Validates request                                                                                          |
|                     | Validates sender limits (initial validation)                                                               |
| **OpenConnect**     | Receives Title Fetch Request *(Acc#, BankId)*                                                              |
|                     | Validates request                                                                                          |
|                     | Prepares host message for OpenWallet                                                                       |
| **OpenWallet**      | Receives Title Fetch Request *(Acc#, TxnInfo)*                                                             |
|                     | Validates request body                                                                                     |
|                     | Validates account existence                                                                                |
|                     | Validates sender limit (wallet → wallet rules)                                                             |
|                     | Validates receiver limit (incoming rules)                                                                  |
|                     | Sends Title Fetch Response *(BeneDetails)* back to OpenConnect                                             |
| **OpenConnect**     | Updates transaction log                                                                                    |
|                     | Sends confirmation to Channel                                                                              |
|                     | Sends in-app notification to **sender**                                                                    |
|                     | Sends in-app notification to **receiver** (if enabled)                                                     |
| **Digital Service** | Receives IBT Response *(authId)*                                                                           |
| **Channel**         | Displays IBT Response *(authId)* to customer                                                               |


![Wallet to Wallet Title Fetch](/img/wallet-to-wallet-title-fetch.png)