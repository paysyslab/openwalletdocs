# IPS Payment

<div className="spec-split">
<div className="spec-split__table">

| **Participant**       | **Action**                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------- |
| Channel               | Customer confirms receiver details, provides MPIN for authorization, proceeds for payment |
| Digital Services      | Domestic Instant Payment System (IPS) Payment Request (FAcc, TAcc, txnInfo) received                                      |
|                       | Validate request                                                                          |
|                       | Validate sending limit                                                                    |
|                       | Block limit                                                                               |
| OpenConnect           | IPS Payment Request (FAcc, TAcc, txnInfo) received                                      |
|                       | Validate request                                                                          |
|                       | Prepare host message                                                                      |
| OpenWallet            | DebitHoldRequest (FAcc, TAcc, txnInfo) received                                           |
|                       | Validate request                                                                          |
|                       | Validate account                                                                          |
|                       | Validate balance                                                                          |
|                       | Hold funds for customer                                                                   |
|                       | Post GL entries                                                                           |
|                       | Update limits                                                                             |
|                       | Update balance                                                                            |
|                       | DebitHoldResponse (RespCode, AuthId) sent                                                 |
| OpenConnect           | PaymentRequest (Pacs.008) sent to IPS                                                   |
| IPS                 | HTTP 200 acknowledgement sent                                                             |
| Receiving Participant | Block funds operation performed                                                           |
| Receiving Participant | PaymentRequest (Pacs.008) received                                                        |
|                       | Validate request                                                                          |
|                       | Validate account                                                                          |
|                       | Validate credit limit                                                                     |
|                       | Send confirmation                                                                         |
| IPS                 | PaymentResponse (Pacs.002 AUTH) sent back                                                 |
| OpenConnect           | HTTP 200 acknowledgement sent                                                             |
| Receiving Participant | Update positions                                                                          |
| IPS                 | PaymentConfirmation (Pacs.002 ACSP) sent                                                  |
| OpenConnect           | HTTP 200 acknowledgement sent                                                             |
| OpenWallet            | Credit customer                                                                           |
|                       | Debit Confirmation Request (txnInfo) received                                             |
|                       | Debit Confirmation Result (txnInfo) returned                                              |
| OpenConnect           | Update transaction log                                                                    |
|                       | Send confirmation to Channel                                                              |
|                       | Prepare debit confirmation for host                                                       |
|                       | Send notifications to customer                                                            |
| Digital Services      | IPS Payment Response (RespCode, AuthId) sent                                            |
| Channel               | eReceipt shown and in-app notifications sent                                              |
| OpenConnect           | Store transaction into SAF Queue                                                          |
| SAF Processor         | Receives queued txn                                                                       |
|                       | Loop: Debit Confirmation Request (txnInfo)                                                |
|                       | Loop: Debit Confirmation Result (txnInfo)                                                 |
| OpenConnect           | HTTP 200 acknowledgement sent                                                             |

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/raast-payment-flow.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size diagram">
<img src={require('@site/static/img/raast-payment-flow.png').default} alt="IPS Payment" />
</a>
<div className="spec-split__hint">Click the diagram to view it full size</div>
</div>
</div>
