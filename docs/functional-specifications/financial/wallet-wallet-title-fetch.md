# Wallet to Wallet - Title Fetch

<div className="spec-split">
<div className="spec-split__table">

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

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/wallet-to-wallet-title-fetch.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size diagram">
<img src={require('@site/static/img/wallet-to-wallet-title-fetch.png').default} alt="Wallet to Wallet Title Fetch" />
</a>
<div className="spec-split__hint">Click the diagram to view it full size</div>
</div>
</div>
