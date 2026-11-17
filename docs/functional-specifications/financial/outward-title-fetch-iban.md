# IPS Outward Title Fetch via IBAN

<div className="spec-split">
<div className="spec-split__table">

| **Participant** | **Action**                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Channel         | Customer selects transfer mode (Domestic Instant Payment System (IPS) ID / Account# / IBAN), selects “IBAN”, inputs IBAN, selects payment purpose, enters amount, proceeds for Title Fetch |
| Digital Service | Title Fetch Request (IBAN, TxnInfo) received                                                                                                               |
|                 | Validate request                                                                                                                                           |
|                 | Validate IBAN                                                                                                                                              |
|                 | Validate limit                                                                                                                                             |
| OC              | Title Fetch Request (IBAN, BankId) received                                                                                                                |
|                 | Validate request                                                                                                                                           |
|                 | Prepare IPS Title Fetch request                                                                                                                                   |
| IPS           | Title Fetch Request (TitleFetch v2) received                                                                                                               |
|                 | Validate request                                                                                                                                           |
| Bank            | Title Fetch Request (TitleFetch v2) received                                                                                                               |
|                 | Validate request                                                                                                                                           |
|                 | Fetch beneficiary account info                                                                                                                             |
|                 | Response back to IPS                                                                                                                                     |
| IPS           | Title Fetch Response (Beneficiary info) sent to OC                                                                                                         |
| OC              | Validate response                                                                                                                                          |
|                 | Identify as “Success” response                                                                                                                             |
|                 | Title Fetch Response (bene a/c info, HostName) sent to Digital Service                                                                                     |
| Digital Service | Title Fetch Response (bene a/c info, HostName) sent to Channel                                                                                             |
| Channel         | Display beneficiary info to customer                                                                                                                       |

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/raast-outward-title-fetch-iban.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size diagram">
<img src={require('@site/static/img/raast-outward-title-fetch-iban.png').default} alt="IPS Outward Title Fetch via IBAN" />
</a>
<div className="spec-split__hint">Click the diagram to view it full size</div>
</div>
</div>
