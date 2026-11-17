# Outward Transfers - IBFT

<div className="spec-split">
<div className="spec-split__table">

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
|                      | Prepares Credit Advice message for Domestic Payment Switch                                   |
|                      | Sends notifications to customer                                            |
| **Digital Services** | Sends IBFT Response *(RespCode, AuthId)* to Channel                        |
| **Channel**          | Shows e-Receipt to customer; in-app notification delivered                 |
| **OpenConnect**      | Stores transaction in SAF queue                                            |
| **SAF Processor**    | Receives queued transaction                                                |
|                      | Performs loop execution: Sends Credit Advice *(TYPE 0220)* to OpenWallet   |
| **OpenWallet**       | Returns Credit Advice Response *(TYPE 0230)*                               |
| **SAF Processor**    | Sends HTTP 200 acknowledgment                                              |

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/outward-transfers-ibft.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size diagram">
<img src={require('@site/static/img/outward-transfers-ibft.png').default} alt="Outward IBFT Transfer Flow" />
</a>
<div className="spec-split__hint">Click the diagram to view it full size</div>
</div>
</div>
