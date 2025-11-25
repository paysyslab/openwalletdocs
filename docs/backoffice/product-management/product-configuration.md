# Product Configuration

![Product Configuration Main Image](/img/product-configuration.png)

Product Configuration is where a new financial product is fully defined before it goes live.

This module lets you set:

- Basic product information  
- KYC rules  
- Allowed transactions  
- Operational limits  
- Event-based fees  
- Ledger mappings  

Think of it as the **blueprint of the entire product**.

---

# 🧩 1. Product Setup (Basic Info)

![Product Setup Image](/img/product-basic-info.png)

This section defines the identity of the product.

### **Product Code**
Unique system-wide identifier for the product.

### **Product Name**
Display name such as **“Payvay Account”**.

### **Product Category**
Defines the product type:

- Account  
- Wallet  
- Card  
- Loan  
- Investment  
- Other financial products  

### **Short Name**
A 3–8 character abbreviated version shown in UI elements or statements.

### **Product Level**
Defines hierarchical grouping.

**Example:**

- **Level 1:** Wallet  
- **Level 2:** Savings Wallet  
- **Level 3:** Premium Wallet  

### **Zakat Applicable**
Specifies if zakat rules apply to this product.

### **Description**
Internal notes or operational explanation of the product.

---

# 🧑‍💼 2. Customer KYC Mapping

![KYC Mapping Image](/img/product-kyc-mapping.png)

This module links the product to the correct **KYC Group**, ensuring regulatory alignment.

### **KYC Group**
Select which customer type can open/use this product:

- Individual (Pakistani)  
- Individual (Foreigner)  
- Corporate  
- Freelancer  
- Asaan Account Category  

This ensures onboarding follows the correct rules.

---

# 🔁 3. Transactions Setup

![Transaction Setup Image](/img/product-transaction-setup.png)

This section defines **which transactions** the product supports and how they behave.

### **Channel Code**
Select where the transaction is initiated:

- Mobile Banking  
- Internet Banking  
- ATM  
- Branch  
- POS  
- QR  
- API  

### **Transaction Code**
Choose the backend transaction type:

- IBFT  
- Bill Payment  
- Beneficiary Addition  
- Title Fetch  
- Mini Statement  
- Cash Withdrawal  

### **GL Account**
Specifies the **ledger account** that will be posted for this transaction.

### **Fee Profile**
Mapped from **Product Fee Setup**.  
Defines the charges that apply to this transaction.

### **Tax Profile**
Mapped from **Product Tax Setup**.  
Defines applicable taxes.

### **Status**
Enable or disable each transaction type:

- **Active**  
- **Inactive**  

---

# 📊 4. Product Limits

![Product Limits Image](/img/product-limits.png)

This section defines operational constraints for usage and risk control.

### **Minimum / Maximum Balance**
Allowed balance range for the account or wallet.

### **Incoming Limits**
Define per-period transaction caps:

- **Daily Limit**  
- **Monthly Limit**  
- **Yearly Limit**  

### **Outgoing Limits**
Define per-period transaction caps:

- **Daily Limit**  
- **Monthly Limit**  
- **Yearly Limit**  


### **Effective Date**
The date when the new limit configuration becomes active.

---

# 💸 5. Event Fees (Recurring or One-Time)

![Event Fees Image](/img/product-event-fees.png)

Event Fees are charges triggered by **events**, not by transaction amounts.

### **Examples of Event Fees**
- SMS Alert Fee  
- Annual Account Fee  
- Card Replacement Fee  
- Dormancy Fee / Inactivity Fee  
- Statement Charges  
- Account Closure Charges  
- Card Renewal Fee  
- Late Payment Fee  

---

## Fields Explained

### **Fee Event**
Triggers that initiate the fee:

- “SMS Notification Sent”  
- “Account Anniversary”  
- “Debit Card Issuance”  
- “Dormancy Check”  
- “Card Expiry Renewal”  

### **Fee Type**
How the fee is calculated:

- Flat Fee  
- Percentage  
- Conditional  

### **Fee Value**
The charge amount for the selected event.

### **Recurring?**
Whether the event repeats:

- **Yes** → occurs on schedule  
- **No** → one-time fee  

### **Recurrence Frequency**
Shown only when Recurring = Yes:

- Daily  
- Monthly  
- Quarterly  
- Yearly  
- Custom cycle  

### **Waiver Allowed?**
Defines if the fee can be waived:

Examples:

- First year free  
- Free for seniors  
- Free for premium customers  
- Rule-based waivers  

### **GL Account Mapping**
The ledger account that will receive the fee.

Ensures clean:

- Financial posting  
- Reconciliation  
- Reporting  

---

# ✔ Summary

Product Configuration defines:

- Who can use the product  
- What transactions are allowed  
- What limits apply  
- What fees and taxes apply  
- How accounting is posted  

This module is the **core control center** for every financial product in the system.

---
