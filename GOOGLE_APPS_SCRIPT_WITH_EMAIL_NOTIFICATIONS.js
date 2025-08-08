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

    // Send email notification
    try {
      sendEmailNotification(data);
      Logger.log('Email notification sent successfully');
    } catch (emailError) {
      Logger.log('Email error: ' + emailError.toString());
    }

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

// Send email notification function
function sendEmailNotification(data) {
  const recipientEmail = "damnart.seo@gmail.com";
  const subject = "New SEDEX SMETA Certification Inquiry - Eurocert";
  
  const emailBody = `
    <h2>🚀 New SEDEX SMETA Certification Inquiry</h2>
    
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #2a2a86; margin-top: 0;">📋 Inquiry Details</h3>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; font-weight: bold; color: #2a2a86;">👤 Name:</td>
          <td style="padding: 8px;">${data.name || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; color: #2a2a86;">📧 Email:</td>
          <td style="padding: 8px;">${data.email || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; color: #2a2a86;">📞 Phone:</td>
          <td style="padding: 8px;">${data.phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; color: #2a2a86;">🏙️ City:</td>
          <td style="padding: 8px;">${data.city || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; color: #2a2a86;">🛠️ Service:</td>
          <td style="padding: 8px;">${data.service || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; color: #2a2a86;">💬 Message:</td>
          <td style="padding: 8px;">${data.message || 'No message provided'}</td>
        </tr>
      </table>
    </div>
    
    <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
      <p style="margin: 0; color: #2a2a86; font-weight: bold;">⏰ Submission Time:</p>
      <p style="margin: 5px 0 0 0;">${new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })}</p>
    </div>
    
    <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
      <p style="margin: 0; color: #856404; font-weight: bold;">📊 Data Status:</p>
      <p style="margin: 5px 0 0 0;">✅ Saved to Google Sheets</p>
      <p style="margin: 5px 0 0 0;">📧 Email notification sent</p>
    </div>
    
    <hr style="border: none; border-top: 2px solid #2a2a86; margin: 20px 0;">
    
    <p style="color: #666; font-size: 12px; margin: 0;">
      <em>This notification was automatically sent from the Eurocert SEDEX SMETA landing page form.</em>
    </p>
  `;

  const options = {
    htmlBody: emailBody,
    subject: subject
  };

  MailApp.sendEmail(recipientEmail, subject, "", options);
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

// Test email notification function
function testEmailNotification() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+91 98765-43210',
    city: 'Mumbai',
    service: 'SEDEX SMETA 4-Pillar Audit',
    message: 'This is a test message for email notification.'
  };
  
  try {
    sendEmailNotification(testData);
    Logger.log('Test email sent successfully');
  } catch (error) {
    Logger.log('Test email error: ' + error.toString());
  }
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