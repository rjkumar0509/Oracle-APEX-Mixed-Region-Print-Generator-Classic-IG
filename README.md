# Oracle-APEX-Mixed-Region-Print-Generator-Classic-IG
Your Oracle APEX reports deserve better. Say goodbye to clunky layouts, cut-off tables, and the frustration of printing one region at a time. This utility transforms all Classic Reports and Interactive Grids on a page into a single, clean, styled, print-ready document—complete with custom headings, logos, and optional notes or signature sections.

Description:
A lightweight JavaScript utility that dynamically renders and prints **Oracle APEX Classic Reports** and **Interactive Grids (IG)** in a clean, styled, and print-ready HTML layout to a single page.

Designed for use within Oracle APEX applications, this script:
- Gathers data from multiple regions
- Applies custom layout and typography
- Supports notes and signature fields
- Generates a printable PDF view using modern CSS print styles

## ✨ Features
- 🧩 Support for both Classic and Interactive Grid (IG) regions
- 🖨️ Print-optimized layout with `@media print` styling
- 🖋️ Optional notes and signature blocks
- 🖼️ Custom branding (logo, headers, section titles)
- 📄 A4 landscape format for professional output
- 💡 Easily pluggable into any APEX page with minimal config

# 🛠️ Setup Instructions – APEX Styled Region Print Generator

This guide walks you through integrating `printMixedRegionsStyled_v1.js` into your Oracle APEX application.

---

## 1. Upload the JavaScript File

Download `printMixedRegionsStyled_v1.js` and upload it to your APEX application as a **Static Application File**.

### 🔹 Steps:
1. Open your APEX workspace and navigate to the **target application**.
2. Go to **Shared Components** → **Static Application Files** (under *Files and Reports*).
3. Click **Upload File** (or **Create File**).
4. Drag and drop the JS file into the upload area.
   - **Directory (optional):** You may enter a folder like `js` to organize files.
   - **File Name (optional):** You can rename it (e.g., `printMixedRegionsStyled_v1.js`).
5. Click **Upload** to complete.

---

## 2. Reference the File in Your APEX Page

In your target page:

- Navigate to **Page Designer** → **Page Attributes** → **JavaScript** → **File URLs**
- Add this line (adjust path if you used a directory):
  ```plaintext
  #APP_FILES#js/printMixedRegionsStyled_v1.js
  ```

![File reference](https://github.com/user-attachments/assets/962fc720-2c91-43ed-a69c-684a34224828)

---

## 3. Add a Print Button

Create a button anywhere on your page (inside or outside a region).

- Suggested name: `PRINT_BTN`
- Button action: **Defined by Dynamic Action**

---

## 4. Create a Dynamic Action

Create a Dynamic Action to trigger the print logic.

### 🔹 Configuration:
- **Name:** `Print_PDF` (or any name)
- **Event:** Click
- **Selection Type:** Button → `PRINT_BTN`
- **Action:** Execute JavaScript Code

### 🔹 JavaScript Code:
```javascript
printMixedRegionsStyled([
  {
    regionStaticId: {grid_static_id_name}, /*region static id*/
    type: 'IG',             /*region_type*/
    columnsToPrint: [2,3,4,5,6,7,8,9,10,12,13,14,15,16], /*input column number to print*/
    title: {title} /*input title*/
  },
  {
    regionStaticId: {grid_static_id_name}, /*region static id*/
    type: 'IG', /*region_type*/
    columnsToPrint: [1,3,5,6,7,8],  /*input column number to print*/
    title: {title} /*input title*/
  },
 
  {
    regionStaticId: {classic_report_static_id}, /*region static id*/
    type: 'Classic',/*region_type*/
    title: {title} /*input title*/
  },
    {
    regionStaticId: {classic_report_static_id}, /*region static id*/
    type: 'Classic', /*region_type*/
    title: {title} /*input title*/
  }
          
]);
```

---

## ✅ You're Done!

Now, when the print button is clicked, your selected Classic and IG regions will be rendered in a styled, print-ready layout with optional headers, notes, and signature blocks.

---
