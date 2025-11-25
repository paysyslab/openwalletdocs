# IBFT Incoming Title Fetch

| **Participant** | **Action**                                                      |
| --------------- | --------------------------------------------------------------- |
| **1LINK**       | Sends request for Payvay wallet/account title fetch             |
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

![IBFT Incoming Title Fetch Flow](/img/ibft-incoming-title-fetch.png)