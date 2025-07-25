/*
 * File: printMixedRegionBundle_DA_v1.js
 * Purpose: Dynamically generate a styled, print-ready HTML layout combining multiple
 *          Oracle APEX Classic Reports and Interactive Grid regions into a single document.
 *
 * Usage:
 *   Call this function as a Dynamic Action in Oracle APEX with a configuration object like:*/
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

/*
 * You can include any number of Classic Reports and Interactive Grids 
 * to be printed by adding them to the configuration array using the following format:
 *
 * {
 *   regionStaticId: 'submission_data', // Static ID of the region in APEX
 *   type: 'Classic',                   // Region type: 'Classic' or 'IG'
 *   title: 'Your Section Title'        // (Optional) Custom title to display in the printout
 * }
 */