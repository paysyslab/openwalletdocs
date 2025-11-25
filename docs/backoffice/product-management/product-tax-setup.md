# Product Tax Setup



This module allows you to configure **tax values** that apply directly on the transaction amount.  
The **tax types** (FED, GST, Withholding Tax, etc.) are already defined in the backend and mapped to their respective transaction codes — your task is to define:

- How much tax should be charged  
- Which slab applies  
- Whether the customer is a filer or non-filer  
- Which GL account the tax should post into  

**Backend = “What tax type is this for?”**  
**UI = “How much tax should be charged, and in which slab?”**

---
![Product Tax Setup Image](/img/product-tax-setup.png)

## 📌 Add Product Tax

---

## **1. Product Tax Info**

This section establishes the identity and applicability of the tax configuration.

### **Product Tax Code**
A unique code for the tax profile you are creating or updating.

### **Product Tax Name**
A descriptive name, such as:

- "FED on IBFT"  
- "GST on Merchant Payments"  
- "WHT on Bill Payments"  

### **Effective Date**
The date from which this tax configuration becomes active.  
All transactions processed after this date will use this updated tax rule.

### **Tax Category**
Usually **Tax**, but other available categories help classify and group tax rules appropriately within the system.

---

## **2. Tax Slab Detail**

This section defines how tax behaves based on **transaction amount ranges**, especially useful when different brackets require separate percentages.

Each tax slab includes the following fields:

### **Tax Type**
Select which tax rule applies:

- Federal Excise Duty (FED)  
- General Sales Tax (GST)  
- Withholding Tax (WHT)  
- Custom / internal tax types  

### **Tax Value**
The actual value of the tax. It can be:

- **Percentage (%)** — most common  
- **Flat amount** — if regulated or required by business rules  

### **Slab Low / Slab High**
Defines the transaction amount brackets the tax applies to.

**Examples:**

- 0 – 1,000  
- 1,001 – 5,000  
- 5,001 – 20,000  

Each bracket can have a different tax percentage or value.

### **Filer / Non-Filer**
Choose which category the tax slab applies to:

- **Filers** — usually lower tax  
- **Non-Filers** — higher WHT rates  

The system automatically determines customer status and applies the correct slab.

### **GL Account**
The GL account where the tax amount will be posted during the transaction.

This ensures:

- Accurate accounting  
- Reconciliation  
- Compliance with tax authorities  

---

## **3. Add Tax Slab**

Use **Add Tax Slab** to create multiple tax brackets within the same profile.

Click → new slab appears → fill details → save.

This supports any number of brackets your regulatory or business rules may require.

---