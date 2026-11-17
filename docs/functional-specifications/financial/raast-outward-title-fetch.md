# IPS Outward Title Fetch via Account Number

<div className="spec-split">
<div className="spec-split__table">

| **Participant** | **Action**                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Channel         | Customer selects transfer mode (Domestic Instant Payment System (IPS) ID / Account# / IBAN), selects Bank, inputs Account#, selects payment purpose, enters amount, proceeds for Title Fetch |
| Digital Service | Title Fetch Request (Acc#, BankId, TxnInfo) received                                                                                                         |
|                 | Validate request                                                                                                                                             |
|                 | Validate limit                                                                                                                                               |
| OC              | Title Fetch Request (Acc#, BankId) received                                                                                                                  |
|                 | Validate request                                                                                                                                             |
|                 | Prepare IPS Title Fetch request                                                                                                                                     |
| IPS           | Title Fetch Request (TitleFetch v2) received                                                                                                                 |
|                 | Validate request                                                                                                                                             |
| Bank            | Title Fetch Request (TitleFetch v2) received                                                                                                                 |
|                 | Validate request                                                                                                                                             |
|                 | Fetch beneficiary account info                                                                                                                               |
|                 | Response back to IPS                                                                                                                                       |
| IPS           | Title Fetch Response (Beneficiary info) sent to OC                                                                                                           |
| OC              | Validate response                                                                                                                                            |
|                 | Identify as “Success” response                                                                                                                               |
|                 | Title Fetch Response (bene a/c info, HostName) sent to Digital Service                                                                                       |
| Digital Service | Title Fetch Response (bene a/c info, HostName) sent to Channel                                                                                               |
| Channel         | Display beneficiary information to customer                                                                                                                  |

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/raast-outward-title-fetch.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size diagram">
<img src={require('@site/static/img/raast-outward-title-fetch.png').default} alt="IPS Outward Title Fetch" />
</a>
<div className="spec-split__hint">Click the diagram to view it full size</div>
</div>
</div>
