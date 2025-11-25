---
title: CDD Frequency Configuration
sidebar_label: CDD Frequency Configuration
---

# CDD Frequency Configuration

The **CDD (Customer Due Diligence) Frequency Configuration** module allows compliance teams to define how often CDD reviews should be performed for customers based on their **risk category** — Low, Medium, or High Risk.

These configurations determine when the AML/Risk Engine should run the next CDD cycle and whether a customer should be escalated to EDD (Enhanced Due Diligence) if their risk category changes.

---

## 🖼️ Module Overview

![CDD Configuration](/img/cdd.png)

---

## 📊 Risk-Based CDD Scheduling

Each risk category (Low, Medium, High) can be configured with two key values:

### **Days**
Number of days after which the next CDD cycle should run.

### **Times**
Number of times CDD should be repeated within the defined cycle for monitoring purposes.

The system also shows **Number of Customers** currently falling in each risk bucket, helping compliance teams assess workload distribution.

---

## 📁 Low Risk (LR)

For Low-Risk customers, the configuration defines:

- **CDD interval (Days)**  
- **Number of CDD checks (Times)**  

Example:  
If configured as **every 6 days**, the AML engine will trigger the next CDD run after 6 days for all LR customers.

---

## 📁 Medium Risk (MR)

For Medium-Risk customers, typically more frequent monitoring is required.

Configurations allow defining:

- **CDD interval (Days)**  
- **Number of checks (Times)**  

Example:  
If configured to run every **12 days**, the risk engine will schedule the next review accordingly.

---

## 📁 High Risk (HR)

High-Risk customers undergo the strictest and most frequent due diligence cycles.

Configuration includes:

- **CDD frequency (Days)**  
- **Number of checks (Times)**  

Example:  
If configured as **every 6 days**, CDD runs are triggered twice during this period if "Times" is set to 2.

---

## 🔄 How the CDD Engine Works

Once CDD frequencies are configured and saved:

1. The **AML/Risk Job Scheduler** runs according to the defined intervals.
2. The system re-evaluates risk factors for all customers in each category.
3. If a customer shows significant changes, their risk rating may update.

---

## ⚠️ Risk Transition & Escalation Logic

When the AML/Risk Engine identifies a risk category change, the system checks the **difference between previous and new risk level**.

### **Allowed Transitions**
- Low → Medium  
- Medium → High  
- Low → High (Significant jump)

### **Escalation Rules**
If the risk increases significantly (e.g., **Low → High** or **Low → Medium**), the system triggers:

- **EDD (Enhanced Due Diligence)** workflow  
- **Manual Review** by compliance team  
- Additional documentation or validation steps  

EDD ensures deeper investigation into customer profile, transactional behaviour, and potential AML concerns.

---

## 📝 Submit Configuration

After modifying CDD frequencies for LR, MR, and HR categories:

- Click **Submit**  
- Configurations are saved  
- The AML/Risk Engine immediately uses new frequencies for upcoming cycles

---

## ⚠️ Important Notes

- Only authorized compliance users can modify CDD frequencies.  
- A change in CDD frequency impacts next-cycle scheduling.  
- Escalation to EDD is automatic when the system detects sudden or significant risk shifts.  
- All updates are logged with full audit trails for regulatory compliance.

---
