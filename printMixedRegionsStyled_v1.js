/*
 * MIT License
 * 
 * Copyright (c) 2025 Rajkumar Pandi
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 */

/* AUDIT TRAIL - created by Rajkumar Pandi - 07012025*/

function printMixedRegionsStyled(regionConfigs) {
  let html = `
  <html>
  <head>
    <title>{Header_Title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Roboto', sans-serif; margin: 20mm 25mm; color: #333; }
    .logo-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 5px;
        margin-bottom: 10px;
        max-height: 100px;
        overflow: hidden;
    }
    .logo-header img {
        max-height: 100px !important;
    }

      h1 { font-size: 36px; margin-bottom: 10px; }
      h2 { font-size: 18px; margin: 30px 0 10px; border-bottom: 2px solid #ba0c2f; padding-bottom: 4px; color: #ba0c2f; }
      table { width: 100%; border-collapse: collapse; margin-bottom: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.05); }
   table tr:nth-child(1) td:nth-child(1),
table tr:nth-child(1) th:nth-child(1) {
  border: none;
}
      th, td { border: 0.5px solid #ccc; padding: 8px 10px; font-size: 13px; vertical-align: top; }
      th { background: #f2f2f2; font-weight: bold; }
      thead tr {background-color: #f9f9f9;}
      .classic-container { display: flex; gap: 30px; margin: 20px 0 40px; }
      .classic-box { flex: 1; background: #f7faff; border-left: 6px solid #2c5daa; padding: 15px 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.04); border-radius: 6px; }
      .classic-title { font-size: 16px; font-weight: bold; color: #1b3d79; margin-bottom: 10px; }
      .report-section { margin-bottom: 40px; padding: 15px; border-radius: 5px; }
      .report-section.jobinfo { background: #f1f8ff; }
      .notes-box, .signature-box { border: 1px dashed #ba0c2f; padding: 15px; background: #fdfdfd; font-size: 14px; margin-top: 10px; white-space: pre-wrap; }
      .signature-area { border-top: 1px solid #999; padding-top: 20px; margin-top: 30px; font-size: 15px; color: #222; line-height: 1.6; }
      .signature-label { margin-top: 8px; font-size: 13px; color: #666; }
      footer { margin-top: 50px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #ccc; padding-top: 10px; }
    
@media print {
  @page {
    size: A4 landscape;
    margin: 20mm 25mm;
    }

  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }


  /* Minimize vertical spacing between regions */
  .report-section,
  .classic-container {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  h1, h2 {
    break-after: avoid;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 16px;
  }

  body {
    transform: scale(0.97);
    transform-origin: top left;
  }

  /* Reduce table spacing */
  table {
    margin-bottom: 5px;
  }

  /* Hide empty sections if they are truly empty */
  .notes-box:empty,
  .signature-box:empty {
    display: none;
  }

  /* Make titles stand out more */
.classic-title {
  font-size: 18px;
  font-weight: bold;
  color: #1b3d79;
  margin-bottom: 12px;
}

/* Make labels and values larger */
.classic-box div {
  font-size: 14px; /* Increased from 12px */
  line-height: 1.6;
}

.classic-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;              /* reduced from 15px or more */
  margin: 0 0 8px 0;     /* less bottom space */
  padding: 0;            /* ensure no extra padding */
}

.classic-box {
  padding: 8px 10px;     /* reduce vertical padding */
  margin-bottom: 4px;    /* minimize stacking space */
  font-size: 13px;
  background-color: #f7faff;
  border-left: 4px solid #2c5daa;
}
.report-section{
  background: rgba(0, 255, 0, 0.05); /* light green tint */
}

  h2 {
    break-after: avoid;
    margin-top: 0;
    margin-bottom: 8px;

.classic-box strong {
  font-weight: 600;
  color: #333;
}
  }
}

</style>
  </head>
  <body>
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px solid #ccc; padding-bottom:10px;">
    <div class="logo-header">
      <img src= "{logo.png}" alt="UNM HR Logo" style="height: 40px;">              
    </div>
    <div style="font-size:30px; font-weight:bold; color:#ba0c2f; font-family:'Roboto', sans-serif;">
        {Section_Title}
      </div>
      <div><strong>Date Printed:</strong> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</div>
    </div>
     
   <table style="width: 100%; border-collapse: collapse; border: none;">
  <thead>
    <tr>
      <th style="text-align: left; font-size: 14px; padding: 10px 0; border: none;">
     {Title}
    </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="100%">

      `;

const classicReports = [];
const igReports = [];

regionConfigs.forEach(({ regionStaticId, type, columnsToPrint, title }) => {
  const region = apex.region(regionStaticId);
  const formattedTitle = (title || regionStaticId)
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\bSpet\b/i, '{title_name}');

  if (type === 'Classic') {
    const regionElement = document.getElementById(regionStaticId);
    const reportContent = regionElement?.innerHTML || `<p style="color:red;">Region '${regionStaticId}' not found.</p>`;
    const parser = document.createElement('div');
    parser.innerHTML = reportContent;
    const dtElements = parser.querySelectorAll('.t-AVPList-label');
    const ddElements = parser.querySelectorAll('.t-AVPList-value');
    const content = Array.from(dtElements).map((dt, i) => {
      const label = dt.textContent.trim();
      const value = ddElements[i]?.textContent.trim() || '';
      return `<div><strong>${label}</strong>: ${value}</div>`;
    }).join('');
    classicReports.push({ title: formattedTitle, content });
  } else {
    igReports.push({ region, columnsToPrint, title: formattedTitle, regionStaticId });
  }
});

if (classicReports.length > 0) {
  html += `<span class="classic-container">`;
  classicReports.forEach(({ title, content }) => {
    html += `<div class="classic-box"><div class="classic-title">${title}</div>${content}</div>`;
  });
  html += `</span>`;
}

igReports.forEach(({ region, columnsToPrint, title, regionStaticId }) => {
  const grid = region.widget().interactiveGrid("getViews").grid;
  const model = grid.model;
  const columns = grid.getColumns();
  const gridCells = document.querySelectorAll(`#${regionStaticId} td[role="gridcell"]`);

  html += `<div class="report-section"><h2>${title}</h2><table><thead><tr>`;
  columnsToPrint.forEach(index => html += `<th>${columns[index].heading}</th>`);
  html += `</tr></thead><tbody>`;

  model.forEach((record, rowIndex) => {
    html += '<tr>';
    columnsToPrint.forEach(index => {
      const column = columns[index];
      let rawValue = grid.model.getValue(record, column.property);
      let value = rawValue;

      if (!value || typeof value === 'object') {
        const cell = [...gridCells].find((td, i) =>
          td.getAttribute('headers')?.includes(column.property) &&
          Math.floor(i / columns.length) === rowIndex
        );
        value = cell?.textContent.trim() || '';
      }

      html += `<td>${value}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table></div>';
});

// Close the wrapper table
html += `
        </td>
      </tr>
    </tbody>
  </table>
`;

  const notesValue = document.getElementById('{P20_ITEM_NAME_2}')?.value?.trim() || ''; /* replace ITEM_NAME here*/
  html += `<div class="report-section"><h2>{Title}</h2><div class="notes-box">${notesValue.replace(/\n/g, '<br>') || '<span style="color:#888;">(No notes provided)</span>'}</div></div>`;

  const signatureValue = document.getElementById('P20_ITEM_NAME2')?.value?.trim() || '';/* replace ITEM_NAME here*/
  html += `<div class="report-section"><h2>{Title}</h2>
    <div class="signature-area">
      <div class="signature-box">${signatureValue.replace(/\n/g, '<br>') || '<span style="color:#888;">(Signature not provided)</span>'}</div>
      <div class="signature-label"><em>{Label}</em></div>
    </div>
  </div>`;

  html += `<footer>Printed on ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} — <strong>{Footer_Text}</strong></footer></body></html>`;
const printWindow = window.open('', '', 'width=1000,height=700');
  printWindow.document.write(html);
  printWindow.document.close();


  const logo = printWindow.document.querySelector('img');
if (logo && !logo.complete) {
  logo.onload = () => {
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };
} else {
  printWindow.focus();
  printWindow.print();
  printWindow.close();
}

}