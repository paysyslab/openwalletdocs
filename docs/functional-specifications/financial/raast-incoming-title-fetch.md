# RAAST - Incoming Title Fetch

<div className="spec-split">
<div className="spec-split__table">

| **Participant** | **Action**                                           |
| --------------- | ---------------------------------------------------- |
| RAAST           | Sent request for Channel account title fetch         |
| Open Connect    | Title Fetch Request (TitleFetch v2) received         |
|                 | Prepare Title Fetch Request                          |
|                 | Log request                                          |
| OpenWallet      | Title Fetch Request (ToAccount) received             |
|                 | Validate token                                       |
|                 | Validate request                                     |
|                 | Validate account                                     |
|                 | Title Fetch Response (CustomerInfo) sent             |
| Open Connect    | Update transaction log                               |
|                 | Title Fetch Response (BeneficiaryInfo) sent to RAAST |
| RAAST           | Response back to sender bank                         |

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/raast-incoming-title-fetch.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size diagram">
<img src={require('@site/static/img/raast-incoming-title-fetch.png').default} alt="RAAST Incoming Title Fetch" />
</a>
<div className="spec-split__hint">Click the diagram to view it full size</div>
</div>
</div>
