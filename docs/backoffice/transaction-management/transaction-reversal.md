---
title: Transaction Reversal
sidebar_label: Transaction Reversal
---

# Transaction Reversal

The **Transaction Reversal** module allows authorized users to search a customer, view their complete transaction history, and reverse eligible debit transactions when required.

---

## 🖼️ Module Overview

![Transaction Reversal](/img/transaction-reversal.png)

---

## 🔍 Customer Search

You can search a customer using the **Mobile Number** field.  
Once the customer is found, the system displays:

- Customer CNIC  
- Customer Name  
- Registered Mobile Number  
- Account Number  
- IBAN  

This ensures that the reversal is always applied to the correct customer account.

---

## 📄 Customer Transactions

After the customer is retrieved, the system lists **all transactions** associated with the customer.

Each transaction includes key information such as:

- Reference Number  
- Transaction Code  
- RNN  
- STAN  
- Amount  
- Date & Time  
- Transaction Type (Debit / Credit)

You can scroll or filter through the transaction list to locate the transaction that needs to be reversed.

---

## ↩️ Eligible Transactions for Reversal

Only **debit transactions** are eligible for reversal through this module.  
This typically includes:

- Bill payments  
- Wallet debits  
- Service charges  
- Merchant payments  
- Transfer-out transactions

Credit transactions **cannot** be reversed from this module.

---

## 📝 Reversal Request Form

When a debit transaction is selected, a reversal form appears on the right side of the screen.

### Fields Included

- **Posting Date**  
  The date on which the reversal entry will be posted.

- **Purpose**  
  Reason for reversing the transaction (selected from a predefined list).

- **Narration**  
  Details of the original debit or explanation for reversal.

### Transaction Amount Detail

- **Amount**  
  The amount of the original debit transaction.

- **Fee**  
  Any reversal fee (if applicable; usually 0).

- **Taxes**  
  Tax component related to the reversed transaction.

Once all fields are verified, the user clicks **Submit Request**.

---

## 🔄 What Happens After Reversal

- The system posts a **credit entry** equal to the reversed debit amount.  
- Customer balance is updated instantly.  
- The reversal is stored in audit logs for compliance and traceability.  
- The reversed transaction appears in the customer's transaction history.

---

## ⚠️ Important Notes

- Only authorized users can perform reversals.  
- Ensure that the reversal request matches the correct transaction.  
- Some transactions may require supervisor approval depending on system configuration.  
- All reversal actions are fully logged for audit review.

---
