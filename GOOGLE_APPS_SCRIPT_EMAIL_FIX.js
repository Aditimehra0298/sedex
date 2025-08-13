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

    // Send email notification with better error handling
    try {
      const emailResult = sendEmailNotification(data);
      Logger.log('Email notification result: ' + JSON.stringify(emailResult));
    } catch (emailError) {
      Logger.log('Email error: ' + emailError.toString());
      Logger.log('Email error stack: ' + emailError.stack);
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
    Logger.log('Error stack: ' + error.stack);
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

// Enhanced email notification function with better error handling
function sendEmailNotification(data) {
  try {
    // Check if data is valid
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data provided to sendEmailNotification');
    }

    const recipientEmail = "damnart.seo@gmail.com";
    const subject = "New SEDEX SMETA Certification Inquiry - Eurocert";
    
    // Create a simpler email body first to test
    const simpleEmailBody = `
New SEDEX SMETA Certification Inquiry

Name: ${data.name || 'Not provided'}
Email: ${data.email || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
City: ${data.city || 'Not provided'}
Service: ${data.service || 'Not provided'}
Message: ${data.message || 'No message provided'}

Submission Time: ${new Date().toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})}

This notification was automatically sent from the Eurocert SEDEX SMETA landing page form.
    `;

    // Try sending simple email first
    Logger.log('Attempting to send email to: ' + recipientEmail);
    Logger.log('Email subject: ' + subject);
    Logger.log('Email body length: ' + simpleEmailBody.length);

    // Send email with simple text first
    const emailResult = MailApp.sendEmail(recipientEmail, subject, simpleEmailBody);
    
    Logger.log('Email sent successfully with ID: ' + emailResult);
    
    return { success: true, messageId: emailResult };
    
  } catch (error) {
    Logger.log('Error in sendEmailNotification: ' + error.toString());
    Logger.log('Error stack: ' + error.stack);
    
    // Try alternative email method
    try {
      Logger.log('Trying alternative email method...');
      
      // Use GmailApp as alternative
      const gmailResult = GmailApp.sendEmail(
        "damnart.seo@gmail.com",
        "New SEDEX SMETA Certification Inquiry - Eurocert (Alternative)",
        `Test email from alternative method. Data: ${JSON.stringify(data)}`
      );
      
      Logger.log('Alternative email method successful: ' + gmailResult);
      return { success: true, messageId: gmailResult, method: 'alternative' };
      
    } catch (altError) {
      Logger.log('Alternative email method also failed: ' + altError.toString());
      throw new Error(`Both email methods failed. Primary: ${error.toString()}, Alternative: ${altError.toString()}`);
    }
  }
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
    Logger.log('Testing email notification...');
    const result = sendEmailNotification(testData);
    Logger.log('Test email result: ' + JSON.stringify(result));
    return result;
  } catch (error) {
    Logger.log('Test email error: ' + error.toString());
    throw error;
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

// Function to check Gmail API status
function checkGmailAPIStatus() {
  try {
    // Try to access Gmail
    const threads = GmailApp.getInboxThreads(0, 1);
    Logger.log('Gmail API is accessible. Found ' + threads.length + ' threads.');
    return true;
  } catch (error) {
    Logger.log('Gmail API error: ' + error.toString());
    return false;
  }
}

// Function to check MailApp status
function checkMailAppStatus() {
  try {
    // Try to get user info
    const user = Session.getActiveUser();
    Logger.log('MailApp is accessible. User: ' + user.getEmail());
    return true;
  } catch (error) {
    Logger.log('MailApp error: ' + error.toString());
    return false;
  }
}

// Comprehensive test function
function runAllTests() {
  Logger.log('=== RUNNING ALL TESTS ===');
  
  // Test 1: Check APIs
  Logger.log('Test 1: Checking Gmail API...');
  const gmailStatus = checkGmailAPIStatus();
  
  Logger.log('Test 2: Checking MailApp...');
  const mailAppStatus = checkMailAppStatus();
  
  // Test 3: Test email
  Logger.log('Test 3: Testing email notification...');
  try {
    const emailResult = testEmailNotification();
    Logger.log('Email test result: ' + JSON.stringify(emailResult));
  } catch (error) {
    Logger.log('Email test failed: ' + error.toString());
  }
  
  // Test 4: Test spreadsheet
  Logger.log('Test 4: Testing spreadsheet...');
  try {
    testFunction();
    Logger.log('Spreadsheet test passed');
  } catch (error) {
    Logger.log('Spreadsheet test failed: ' + error.toString());
  }
  
  Logger.log('=== ALL TESTS COMPLETED ===');
} 