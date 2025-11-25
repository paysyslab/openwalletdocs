# Bill Inquiry

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


![Bill Inquiry](/img/bill-inquiry.png)