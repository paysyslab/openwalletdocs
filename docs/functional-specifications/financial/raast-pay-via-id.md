# Pay via IPS ID

<div className="spec-split">
<div className="spec-split__table">

| **Participant** | **Action**                                                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Channel         | Customer selects transfer mode (Domestic Instant Payment System (IPS) ID / Account# / IBAN), enters IPS ID, selects payment purpose, enters amount, proceeds for Title Fetch |
| Digital Service | GetDefaultByIPSIDRequest (IPS ID) received                                                                                                 |
|                 | Validate request                                                                                                                               |
|                 | Validate limit                                                                                                                                 |
| OC              | GetDefaultByIPSIDRequest (IPS ID) received                                                                                                 |
|                 | Validate request                                                                                                                               |
|                 | Prepare Get Default by IPS ID request                                                                                                        |
| IPS           | GetDefaultByIPSIDRequest (IPS ID) received                                                                                                 |
|                 | Validate request                                                                                                                               |
|                 | Inquire IPS ID                                                                                                                               |
|                 | Prepare response with account info                                                                                                             |
|                 | GetDefaultByIPSIDResponse (AccInfo) sent                                                                                                     |
| OC              | Validate response                                                                                                                              |
|                 | Identify as “Success” response                                                                                                                 |
|                 | GetDefaultByIPSIDResponse (AccInfo, HostName) sent to Digital Service                                                                        |
| Digital Service | GetDefaultByIPSIDResponse (AccInfo, HostName) sent to Channel                                                                                |
| Channel         | Display beneficiary info to customer                                                                                                           |

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/pay-via-raast-id.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size diagram">
<img src={require('@site/static/img/pay-via-raast-id.png').default} alt="Pay via IPS ID" />
</a>
<div className="spec-split__hint">Click the diagram to view it full size</div>
</div>
</div>
