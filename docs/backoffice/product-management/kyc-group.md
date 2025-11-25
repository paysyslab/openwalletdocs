---
title: KYC Group
---

# KYC Group

A **KYC Group** defines the complete set of identification, documentation, and verification requirements needed to onboard a customer into a specific **product or product level**.  

Once a KYC Group is created, it can be directly associated with a product through the **Product Configuration** module.  
See: [Product Configuration](./product-configuration.md)

This ensures the system enforces the correct KYC tier during onboarding, upgrades, and compliance checks.

---

# 📌 Structure of a KYC Group

A KYC Group is configured across **three main sections**:

---

# 1️⃣ KYC Information

This section defines the personal information that must be collected from the customer.

Each field can be configured as:

- **Required: Yes / No**  
- **Input Type: Mandatory / Optional**

Common examples:

- Gender  
- Parentage  
- Address  
- Phone Number  
- Remarks  

This allows the institution to set **minimum data requirements** for each onboarding or upgrade tier.

![KYC Group Screen](/img/kyc-information.png)

---

# 2️⃣ Document Requirements

This section lists the documents the customer must submit for verification.

Each document can be set as:

- **Required: Yes / No**  
- **Input Type: Mandatory / Optional**

Examples:

- ID (Front & Back)  
- Live Photograph  
- Income Proof  
- Source of Funds  
- Risk Profiling  

These configurations support strict compliance with regulatory documentation requirements.

![KYC Group Screen](/img/kyc-document.png)

---

# 3️⃣ Verification Requirements

This section defines the identity verification checks the system must perform.  
Each check can be configured as 

- **Required: Yes / No**  
- **Input Type: Mandatory / Optional**

Supported verification types:

- Biometric Verification  
- Verisys / NADRA Check  
- Email OTP  
- SMS OTP 
- AML Screening 

A **Select All Required Fields** option allows quick full-enforcement of all checks.

![KYC Group Screen](/img/kyc-verification.png)
---

# 🎯 Purpose of KYC Groups

KYC Groups allow the institution to establish multiple KYC tiers to support different customer profiles and regulatory journeys, such as:

- **Basic KYC**
- **Standard KYC**
- **Enhanced KYC** 

These KYC tiers can then be linked to products via *Product Configuration*, ensuring customers receive:

- The correct onboarding flow  
- Appropriate transaction limits  
- Compliance-aligned privileges  
- Proper upgrade paths  

KYC Groups ensure onboarding remains **regulated, scalable, and fully aligned with institutional compliance standards**.

![KYC Group Screen](/img/kyc-group.png)
