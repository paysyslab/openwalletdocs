# Product Fee Setup

The Product Fee Setup module allows you to configure **the actual fee values** that the system will apply during live transactions.

The **fee types** are already defined in the backend and linked to specific transaction codes — here, you only set:

- How much the fee should be  
- Which slabs apply  
- Which tax profiles should be attached  
- Where the fee will be posted in GL  

**Backend decides *what* the fee is for.**  
**UI decides *how much* to charge.**

---
![Product Fee Setup Image](/img/product-fee-setup.png)

## 📌 Add Fee Profile

---

## **1. Fee Profile Info**

This section identifies which fee profile you're configuring.

### **Fee Profile Code**
Auto-generated or selected depending on the configuration being edited.

### **Fee Profile Name**
A descriptive name like **“IBFT Fees”**, **“Wallet Transfer Fee”**, etc.

### **Effective Date**
The date when this fee setup becomes active.  
Make sure it's accurate — no guesswork here.

### **Fee Category**
Choose the right bucket (Fee, Charge, Tax, etc.) so the system knows how to apply it.

---

## **2. Fee Slab Detail**

This is where you define how the fee behaves for different transaction ranges.

You can configure **multiple slabs**, each with unique conditions.

### **Fee Slab Fields**

#### **Fee Type**
Select one of:

- Flat Fee  
- Percentage  
- Hybrid (if supported)

#### **Fee Value**
- **Flat:** amount  
- **Percentage:** rate (e.g., 2.5%)  
- **Hybrid:** based on defined rules  

#### **GL Account**
The ledger account where the fee amount will be posted.

#### **Slab Low / Slab High**
Define the amount range where this slab applies.

**Example:**

- 0 – 1,000  
- 1,001 – 5,000  
- 5,001 – 10,000  

You can add as many slabs as needed.

---

## **3. Fee Tax Detail**

If taxes apply, configure them here.

### **Fee Tax List**
Select the tax profile (e.g., **FED**, **GST**).  
The system calculates tax based on backend rules.

---

## **4. Add Fee Slab**

Click the **Add Fee Slab** button to create a new slab.

A new fields section opens → fill in details → save.  
Pricing teams love slabs… so expect many. 😭

---

## **5. Submit Request**

Once everything is set:

- Review  
- Confirm  
- Submit  

Depending on workflow:

- It may require approval  
- Or it may apply instantly  

---

