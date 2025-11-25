---
title: Journal Out
---

# Journal Out

The **Journal Out** screen is used to record outgoing journal entries such as **adjustments, fund movements, corrections, settlements, and accrual reversals**.  
Like Journal In, each entry generates a **voucher**, ensuring full transparency, traceability, and audit compliance.

---

# 🧾 Fields in Journal Out

Journal Out uses the same fields and structure as Journal In.  
Users must provide the following details:

---

### **1. Voucher Date (System Generated)**  
Automatically generated when the entry is created.  
Ensures proper sequencing and prevents manual manipulation.

---

### **2. Posting Date**  
Specifies the effective date on which the financial impact should apply.

---

### **3. GL Account (Level 4)**  
The Level 4 GL account where the outgoing journal amount will be posted.

---

### **4. Amount**  
The monetary value of the journal entry.

---

### **5. Supporting Document**  
Allows attaching reference files such as settlements, reconciliation sheets, approval documents, or audit evidence.

---

### **6. Narration**  
A short explanation describing the purpose of the journal entry.

---

# 🔄 Counter Account Handling

Journal Out also uses a **predefined system-controlled counter account**.  
The user selects *only the primary GL account*; the system automatically posts the opposite side.

This design ensures:

- Accurate double-entry posting  
- Reduced user errors  
- Faster data entry for operational adjustments  

---

## 📝 Example (How Posting Works)

1. User selects a Level 4 GL account and enters the amount  
2. The system automatically posts the counter-side to the predefined counter account  
3. The voucher remains balanced without requiring debit/credit decisions  

---

# 📤 Final Posting

Once the Journal Out entry is saved:

- A **voucher** is created  
- The main and counter entries are **posted instantly**  
- GL balances update immediately  
- All financial reports reflect the change in real time  

This guarantees that Journal Out entries remain **accurate, auditable, and compliant** across all back-office modules.

![Journal Out Screen](/img/add-journal-out.png)
