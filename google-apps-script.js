// Google Apps Script for SEDEX SMETA Form Handling
// Deploy this as a web app in Google Apps Script

function doPost(e) {
  try {
    // Parse the incoming form data
    const formData = e.parameter;
    
    // Get the active spreadsheet (replace with your actual spreadsheet ID)
    const spreadsheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID_HERE');
    const sheet = spreadsheet.getSheetByName('Form Submissions');
    
    // Prepare the data for the sheet
    const timestamp = new Date();
    const rowData = [
      timestamp,
      formData.name || '',
      formData.email || '',
      formData.phone || '',
      formData.city || '',
      formData.service || '',
      formData.message || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Send email notification
    sendEmailNotification(formData);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput('Form submitted successfully!')
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type');
      
  } catch (error) {
    // Return error response with CORS headers
    return ContentService
      .createTextOutput('Error processing form submission')
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
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

function sendEmailNotification(formData) {
  const recipientEmail = 'damnart.seo@gmail.com';
  const subject = 'New SEDEX SMETA Certification Inquiry';
  
  const emailBody = `
    <h2>New SEDEX SMETA Certification Inquiry</h2>
    <p><strong>Name:</strong> ${formData.name || 'Not provided'}</p>
    <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
    <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
    <p><strong>City:</strong> ${formData.city || 'Not provided'}</p>
    <p><strong>Service:</strong> ${formData.service || 'Not provided'}</p>
    <p><strong>Message:</strong> ${formData.message || 'Not provided'}</p>
    <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
    
    <hr>
    <p><em>This notification was sent automatically from the Eurocert SEDEX SMETA website.</em></p>
  `;
  
  // Send the email
  MailApp.sendEmail({
    to: recipientEmail,
    subject: subject,
    htmlBody: emailBody
  });
}

// Function to set up the spreadsheet headers (run this once)
function setupSpreadsheet() {
  const spreadsheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID_HERE');
  const sheet = spreadsheet.getSheetByName('Form Submissions');
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Phone',
    'City',
    'Service',
    'Message'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
} 