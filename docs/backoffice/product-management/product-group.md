---
title: Product Group Setup
---

# Product Group Setup

The **Product Group** module allows the institution to classify and organize products into structured tiers.  
These tiers represent different product levels, usually linked to **KYC progression, transaction limit upgrades, and customer privilege enhancements**.

A Product Group defines how customers move from **basic → advanced levels** as they satisfy compliance requirements and qualify for higher usage capabilities.

This ensures consistent governance, aligned accounting behavior, and a controlled upgrade flow across all related products.

---

# 🎯 Purpose of Product Groups

Product Groups enable the system to:

- Organize multiple product levels under a single hierarchy  
- Define customer upgrade rules (based on KYC, risk, regulatory criteria)  
- Control which onboarding channels are allowed:  
  - Bulk onboarding  
  - Individual onboarding  
  - Digital/mobile onboarding  
  - Referral-based onboarding  
- Assign a **Product Group GL** for accounting alignment  
- Maintain consistent lifecycle and governance across related product levels  

Product Groups are especially important for **wallets and account products**, where limits and KYC tiers define user eligibility and usage boundaries.

---

# 📝 Fields in Product Group Setup

### **1. Product Group Code**  
A unique system-generated identifier for the product group.

---

### **2. Product Group Name**  
The display name of the group.  
Examples:  
- “Basic Wallet”  
- “Premium Tier”  
- “Corporate Accounts Group”

---

### **3. Number of Levels**  
Defines how many product levels exist within the group.  
Example:  
Level 1 → Level 2 → Level 3

---

### **4. Product Group GL**  
The Product Group GL serves as the default posting account for all products within the group. 
For example, transactions like IBFT In, the system credits the Product Group GL while the debit side is taken from the specific product level. Similarly, for IBFT Out, the system debits the Product Group GL and uses the product-level configuration for the credit side. This ensures consistent accounting across the group while allowing flexibility at each product level.

---

### **5. Is Bulk Onboarding Allowed?**  
Determines whether this group supports customer onboarding via bulk file upload.

---

### **6. Is Individual Onboarding Allowed?**  
Specifies whether customers may be onboarded individually using manual forms.

---

### **7. Is Digital App Allowed?**  
Controls whether onboarding through mobile banking or digital channels is permitted.

---

### **8. Is Referral Allowed?**  
Indicates whether the product group supports referral-based onboarding programs.

---

# 🔎 How Product Groups Operate

Each product level inside a group has its own:

- Transaction limits  
- Balance limits  
- KYC requirements  
- Feature set  

As customers progress through higher KYC tiers, they can be upgraded to the next product level—either:

- Automatically (rule-based), or  
- Manually (back-office assisted)

This ensures consistent control over:

- Daily/monthly transaction caps  
- Wallet/account balance ceilings  
- Access to advanced financial features  
- Risk and compliance safeguards  

![Product Group Screen](/img/product-group.png)
