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

## 🔧 Usage
Invoke the function in your APEX page with a list of regions:
```javascript
printMixedRegionsStyled([
  { regionStaticId: "emp_summary", type: "Classic", title: "Employee Summary" },
  { regionStaticId: "emp_grid", type: "IG", columnsToPrint: [0, 2, 3], title: "Employee Details" }
]);
