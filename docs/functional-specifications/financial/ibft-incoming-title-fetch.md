# IBFT Incoming Title Fetch

<div className="spec-split">
<div className="spec-split__table">

| **Participant** | **Action**                                                      |
| --------------- | --------------------------------------------------------------- |
| **1LINK**       | Sends request for wallet/account title fetch             |
| **OpenConnect** | Receives Title Fetch Request *(ISO8583 – MTI 0200)* from 1LINK  |
|                 | Prepares Title Fetch Request for OpenWallet                     |
|                 | Logs the incoming request                                       |
| **OpenWallet**  | Receives request containing *(ToAccount, Amount)*               |
|                 | Validates authentication token                                  |
|                 | Validates ISO/message body                                      |
|                 | Validates customer/account existence                            |
|                 | Validates credit limit exposure rules                           |
|                 | Sends Title Fetch Response *(CustomerInfo)* back to OpenConnect |
| **OpenConnect** | Updates transaction log                                         |
|                 | Sends Title Fetch Response *(ISO8583 – MTI 0210)* back to 1LINK |
| **1LINK**       | Returns the response to the originating bank/sender             |

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/ibft-incoming-title-fetch.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size diagram">
<img src={require('@site/static/img/ibft-incoming-title-fetch.png').default} alt="IBFT Incoming Title Fetch Flow" />
</a>
<div className="spec-split__hint">Click the diagram to view it full size</div>
</div>
</div>
