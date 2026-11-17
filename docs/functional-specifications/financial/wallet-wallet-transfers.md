# Wallet to Wallet Transfers

<div className="spec-split">
<div className="spec-split__table">

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

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/wallet-to-wallet-transfers.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size diagram">
<img src={require('@site/static/img/wallet-to-wallet-transfers.png').default} alt="Wallet to Wallet Title Fetch" />
</a>
<div className="spec-split__hint">Click the diagram to view it full size</div>
</div>
</div>
