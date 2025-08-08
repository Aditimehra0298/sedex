function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Get the form data
    let data;

    if (e.postData.type === 'application/x-www-form-urlencoded') {
      // Handle URL-encoded form data
      data = {
        name: e.parameter.name,
        email: e.parameter.email,
        phone: e.parameter.phone,
        city: e.parameter.city,
        service: e.parameter.service,
        message: e.parameter.message
      };
    } else {
      // Handle JSON data
      data = JSON.parse(e.postData.contents);
    }

    // Log the received data for debugging
    Logger.log('Received data: ' + JSON.stringify(data));

    // Prepare row data for Google Sheet - MATCHING YOUR COLUMN ORDER
    const rowData = [
      new Date(),                    // Timestamp (Column A)
      data.name || '',               // Name (Column B)
      data.email || '',              // Email (Column C)
      data.phone || '',              // Phone (Column D)
      data.city || '',               // City (Column E)
      data.service || '',            // Service (Column F)
      data.message || ''             // Message (Column G)
    ];

    // Add data to Google Sheet
    sheet.appendRow(rowData);

    // Log success
    Logger.log('Data added to sheet successfully');

    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type');

  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
}

function doGet(e) {
  // Handle preflight requests with CORS headers
  return ContentService
    .createTextOutput('OK')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// Handle OPTIONS requests for CORS preflight
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type')
    .setHeader('Access-Control-Max-Age', '86400');
}

// Test function to verify the script is working
function testFunction() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    new Date(),                    // Timestamp
    'Test Name',                   // Name
    'test@test.com',              // Email
    'Test Phone',                  // Phone
    'Test City',                   // City
    'Test Service',                // Service
    'Test Message'                 // Message
  ]);
  Logger.log('Test function executed successfully');
}

// Function to set up the spreadsheet headers (run this once)
function setupSpreadsheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Set up headers - MATCHING YOUR EXACT COLUMN ORDER
  const headers = [
    'Timestamp',    // Column A
    'Name',         // Column B
    'Email',        // Column C
    'Phone',        // Column D
    'City',         // Column E
    'Service',      // Column F
    'Message'       // Column G
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
} 