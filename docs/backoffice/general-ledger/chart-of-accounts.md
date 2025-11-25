---
title: Chart of Accounts (COA)
---

# Chart of Accounts (COA)

The **Chart of Accounts (COA)** defines the complete accounting framework used within OpenWallet.  
The system follows a **4-level hierarchical COA**, and **all financial transactions are always posted at Level 4**.

The COA is presented in the Back Office using an **expandable tree-view**, making it easy for users to browse Levels 1–4.

---

# 🔢 4-Level COA Structure

Each GL account in OpenWallet is built using a **structured 12-digit format**.  
Every section of the number represents a specific level in the hierarchy.

---

## **📘 Level 1 — Main Category**  
Defines the top-level financial classification.(Digits 1–2)

**Examples:**

- `01` = Assets  
- `02` = Liabilities  
- `03` = Income  
- `04` = Expense  
- `05` = Equity  

---

## **📙 Level 2 — Sub-Category**  
Represents a sub-category under the main classification. (Digits 3–5)

**Example:**

- `02001` = Short Term Liabilities  

---

## **📗 Level 3 — Control Account**  
Used for grouping related GL accounts under a control head.(Digits 6–8)

**Example:**

- `02001001` = Account Payables  

---

## **📕 Level 4 — Detail Account**  
The final and most important level — (Digits 9–12)
**all system-generated postings occur here**.

**Example:**

- `020010010001` = 1LINK Payables  

---

A structured numbering system ensures **clarity, consistency, and traceability** across every posting in OpenWallet.

---

# 🗂️ COA Screen

The Back Office displays the entire COA in a fully interactive **tree-view layout**, allowing users to:

- View hierarchical relationships (**L1 → L4**)  
- Expand parent nodes to view children  
- Quickly identify **posting-level GL accounts (L4)**  
- Review account details with a single click  

![COA Tree View](/img/coa-structure.png)
# ➕ Add GL Account

The Back Office provides an **Add GL Account** option for creating new Level 4 (posting-level) GLs within the existing COA hierarchy.  
All new accounts must follow the COA structure and inherit their parent category’s behavior.

This feature ensures institutions can expand their financial structure without disrupting existing accounting logic.

When creating a new GL, the following fields must be configured:


### **1. Account Name**

The descriptive name of the GL account.

**Examples:**

- Customer Wallet Payable  
- Cash Wallet Clearing  
- Fee Income – Wallet  
- Settlement Payables  

The name appears in the COA tree, reports, and posting logs.

---

### **2. Parent Account**

Select the parent under which this GL will be created.  
The parent determines the GL’s:

- Level (L1–L3)  
- Classification (Asset, Liability, Income, Expense, Equity)  
- Reporting structure  

For example:  
Selecting `02001001 – Account Payables` makes the new GL part of **Liabilities → Short Term Liabilities → Account Payables**.

---

### **3. Account Nature**

Defines the financial behavior of the GL:

- **Asset**  
- **Liability**  
- **Income**  
- **Expense**  
- **Equity**

This determines default debit/credit behavior and reporting treatment.

---

### **4. Negative Balance Allowed**

Specifies whether the GL is permitted to hold a negative balance.

Used for:

- Clearing accounts  
- Payable/Receivable accounts  
- Contra accounts  

Set to **No** for most asset and tax-related accounts.

---

### **5. Minimum Balance Allowed**

Defines the lowest acceptable balance for the GL.  
Useful for compliance and monitoring.

**Example:**  
0 — prevents dropping below zero.

---

### **6. Maximum Balance Allowed**

Sets the upper threshold for this GL.  
Alerts or blocks can be applied if exceeded.

**Example:**  
10,000,000 — limit for specific fee or liability accounts.

---

Once the GL is created:

- It appears immediately in the **COA table**  
- Becomes selectable for **product configuration**  
- Is available in **transaction posting rules**  
- Can be used in **reconciliations and reporting**  

![Add GL Screen](/img/add-gl-account.png)
