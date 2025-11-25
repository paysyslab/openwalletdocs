---
title: Lien Marking
sidebar_label: Lien Marking
---

# Lien Marking

The **Lien Marking** module allows authorized users to search customers and place a lien (hold) on their wallet account. A lien restricts a defined amount from being used until it is confirmed or released.

---

## 🖼️ Module Overview

![Lien Marking](/img/lien-marking.png)

---

## 🔍 Customer Search

You can search a customer using the **Mobile Number** field.

Once a valid customer is found, the system displays the following details:

- Customer CNIC  
- Customer Name  
- Registered Mobile Number  
- Account Number  
- IBAN  

This ensures that the lien is always applied to the correct customer account.

---

## 💰 Account Balance

The system displays two balance values:

### **Actual Balance**
The total amount currently present in the customer’s wallet.

### **Available Balance**
The amount the customer can use for transactions.  
This value decreases when a lien is placed.

---

## 📝 Lien Marking Detail

After retrieving the customer, the following fields must be filled to mark a lien:

- **Lien Amount**  
  The amount to be held from the customer’s available balance.

- **Purpose**  
  Select a predefined reason for the lien (e.g., dispute, operational hold).

- **Narration**  
  Additional descriptive notes for audit purposes.

---

## 🔄 Lien Lifecycle

### **1. Lien Marked**
- The actual balance is **not deducted**.  
- The lien amount is **held** and subtracted from the available balance.  
- The customer cannot perform transactions exceeding the updated available balance.

### **2. Lien Confirmed**
- The actual balance is **deducted** permanently.  
- The lien becomes a finalized hold.

### **3. Lien Released**
- The lien amount is **returned** to the available balance.  
- The customer regains full access to the funds.

---

## 📌 Module Capabilities

- Apply holds on customer balances  
- Prevent spending beyond available balance  
- Maintain complete lien history  
- Support marking, confirming, and releasing lien amounts  
- Provide full audit logging for compliance  

---

## ⚠️ Important Notes

- Lien marking affects **available balance only** until confirmed.  
- Only authorized users may perform lien operations.  
- Always verify customer identity before placing a lien.  
- All actions are recorded in system audit logs.

---
