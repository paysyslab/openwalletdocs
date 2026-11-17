# IPS - Incoming Credit Request

<div className="spec-split">
<div className="spec-split__table">

| **Participant** | **Action**                                                |
| --------------- | --------------------------------------------------------- |
| Domestic Instant Payment System (IPS)           | Sent credit request for Channel account                   |
| Open Connect    | Payment Request (Pacs.008) received                       |
| IPS           | HTTP 200 acknowledgement sent                             |
| Open Connect    | Validate request                                          |
|                 | Prepare host message                                      |
| OpenWallet      | Account Verification Request (ToAccount, Amount) received |
|                 | Validate token                                            |
|                 | Validate request                                          |
|                 | Validate account                                          |
|                 | Validate credit limit                                     |
|                 | Account Verification Response (verificationResult) sent   |
| Open Connect    | Update transaction log                                    |
|                 | Payment Response (Pacs.002 (AUTH)) sent to IPS          |
| IPS           | HTTP 200 acknowledgement sent                             |
| Open Connect    | Update position for sender                                |
|                 | Update position for receiver                              |
|                 | Send payment confirmation                                 |
| IPS           | Payment Confirmation (Pacs.002 (ACSP)) sent               |
| Open Connect    | HTTP 200 acknowledgement sent                             |
| OpenWallet      | CreditRequest (accInfo, PaymentInfo) received             |
|                 | Credit customer                                           |
|                 | Post GL entries                                           |
|                 | Update customer statement                                 |
|                 | Update customer credit limit                              |
|                 | Send in-app notifications                                 |
|                 | Send credit SMS                                           |
|                 | CreditResponse (RespCode, AuthId) sent                    |

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/raast-incoming-credit-request.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size diagram">
<img src={require('@site/static/img/raast-incoming-credit-request.png').default} alt="IPS Incoming Credit Request" />
</a>
<div className="spec-split__hint">Click the diagram to view it full size</div>
</div>
</div>
