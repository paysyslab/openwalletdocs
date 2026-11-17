# Bill Inquiry

<div className="spec-split">
<div className="spec-split__table">

| **Participant** | **Action**                                                        |
| --------------- | ----------------------------------------------------------------- |
| Channel         | Customer selects biller, inputs Consumer#, proceeds for bill info |
| Digital Service | Bill Inquiry Request (Consumer#, BillerId) received               |
|                 | Validate request                                                  |
|                 | Validate limit                                                    |
| OC              | Bill Inquiry Request (Consumer#, BillerId) received               |
|                 | Validate request                                                  |
|                 | Prepare message for 1LINK                                         |
| 1LINK           | Bill Inquiry Request (Consumer#, BillerId) received               |
|                 | Validate request                                                  |
|                 | Inquire bill details                                              |
|                 | Bill Inquiry Response (billInfo) sent                             |
| OC              | Validate response                                                 |
|                 | Identify as “Success” response                                    |
|                 | Bill Inquiry Response (billInfo) sent to Digital Service          |
| Digital Service | Bill Inquiry Response (billInfo) sent to Channel                  |
| Channel         | Display bill info to customer                                     |

</div>
<div className="spec-split__diagram">
<a href={require('@site/static/img/bill-inquiry.png').default} target="_blank" rel="noopener noreferrer" title="Open full-size diagram">
<img src={require('@site/static/img/bill-inquiry.png').default} alt="Bill Inquiry" />
</a>
<div className="spec-split__hint">Click the diagram to view it full size</div>
</div>
</div>
