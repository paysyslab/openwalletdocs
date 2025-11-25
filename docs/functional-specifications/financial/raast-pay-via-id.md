# Pay via RAAST ID

| **Participant** | **Action**                                                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Channel         | Customer selects transfer mode (RAAST ID / Account# / IBAN), enters RAAST ID, selects payment purpose, enters amount, proceeds for Title Fetch |
| Digital Service | GetDefaultByRAASTIDRequest (RAAST ID) received                                                                                                 |
|                 | Validate request                                                                                                                               |
|                 | Validate limit                                                                                                                                 |
| OC              | GetDefaultByRAASTIDRequest (RAAST ID) received                                                                                                 |
|                 | Validate request                                                                                                                               |
|                 | Prepare Get Default by RAAST ID request                                                                                                        |
| RAAST           | GetDefaultByRAASTIDRequest (RAAST ID) received                                                                                                 |
|                 | Validate request                                                                                                                               |
|                 | Inquire RAAST ID                                                                                                                               |
|                 | Prepare response with account info                                                                                                             |
|                 | GetDefaultByRAASTIDResponse (AccInfo) sent                                                                                                     |
| OC              | Validate response                                                                                                                              |
|                 | Identify as “Success” response                                                                                                                 |
|                 | GetDefaultByRAASTIDResponse (AccInfo, HostName) sent to Digital Service                                                                        |
| Digital Service | GetDefaultByRAASTIDResponse (AccInfo, HostName) sent to Channel                                                                                |
| Channel         | Display beneficiary info to customer                                                                                                           |


![Pay via RAAST ID](/img/pay-via-raast-id.png)