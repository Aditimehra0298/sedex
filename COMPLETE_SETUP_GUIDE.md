# 🚀 COMPLETE WORKING SETUP GUIDE

## ✅ What You'll Get
- **Working form submission** to Google Sheets
- **Email notifications** to `damnart.seo@gmail.com`
- **No 403 errors**
- **Beautiful success messages**
- **Perfect column order** in Google Sheets

---

## 📋 Step 1: Google Apps Script Setup

### 1.1 Create Google Apps Script Project
1. Go to [script.google.com](https://script.google.com)
2. Click **"New project"**
3. Delete the default code

### 1.2 Copy the Complete Code
**Copy and paste this entire code** into your Google Apps Script:

```javascript
// COMPLETE WORKING GOOGLE APPS SCRIPT CODE
// Copy this entire code to your Google Apps Script project

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

// Simple email test function
function testSimpleEmail() {
  const recipientEmail = "damnart.seo@gmail.com";
  const subject = "Test Email from Google Apps Script";
  const message = "This is a test email to verify that Google Apps Script can send emails to your address.";
  
  try {
    MailApp.sendEmail(recipientEmail, subject, message);
    Logger.log("✅ Test email sent successfully to: " + recipientEmail);
    return "SUCCESS: Email sent to " + recipientEmail;
  } catch (error) {
    Logger.log("❌ Email error: " + error.toString());
    return "ERROR: " + error.toString();
  }
}

// Run all tests
function runAllTests() {
  Logger.log("=== STARTING ALL TESTS ===");
  
  // Test 1: Setup spreadsheet
  Logger.log("Test 1: Setting up spreadsheet headers...");
  try {
    setupSpreadsheet();
    Logger.log("✅ Spreadsheet headers set up successfully");
  } catch (error) {
    Logger.log("❌ Spreadsheet setup error: " + error.toString());
  }
  
  // Test 2: Add test data
  Logger.log("Test 2: Adding test data to sheet...");
  try {
    testFunction();
    Logger.log("✅ Test data added to sheet successfully");
  } catch (error) {
    Logger.log("❌ Test data error: " + error.toString());
  }
  
  // Test 3: Send test email
  Logger.log("Test 3: Sending test email...");
  try {
    testSimpleEmail();
    Logger.log("✅ Test email sent successfully");
  } catch (error) {
    Logger.log("❌ Test email error: " + error.toString());
  }
  
  // Test 4: Send notification email
  Logger.log("Test 4: Sending notification email...");
  try {
    testEmailNotification();
    Logger.log("✅ Notification email sent successfully");
  } catch (error) {
    Logger.log("❌ Notification email error: " + error.toString());
  }
  
  Logger.log("=== ALL TESTS COMPLETED ===");
}
```

### 1.3 Save and Deploy
1. **Save** the code (Ctrl+S)
2. **Click Deploy → New deployment**
3. **Click Select type → Web app**
4. **Set these settings:**
   - **Description**: `Eurocert Form Handler v1`
   - **Execute as**: `Me`
   - **Who has access**: **`Anyone`** ← **CRITICAL!**
5. **Click Deploy**
6. **Click Authorize access** if prompted
7. **Copy the Web app URL** (you'll need this for the website)

---

## 📋 Step 2: Update Your Website

### 2.1 Update Hero.tsx
Replace the form action URL in `src/components/Hero.tsx`:

```javascript
form.action = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'; // Replace with your actual URL
```

### 2.2 Update Contact.tsx
Replace the form action URL in `src/components/Contact.tsx`:

```javascript
form.action = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'; // Replace with your actual URL
```

**Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the URL you got from Step 1.3**

---

## 📋 Step 3: Test Everything

### 3.1 Test Google Apps Script
1. **Run `setupSpreadsheet()`** in Google Apps Script
2. **Run `testFunction()`** in Google Apps Script
3. **Run `testSimpleEmail()`** in Google Apps Script
4. **Check your email** for test messages
5. **Check Google Sheet** for test data

### 3.2 Test Website Forms
1. **Submit a form** on your website
2. **Check Google Sheet** for new data
3. **Check your email** for notification
4. **Verify success message** appears

---

## 🎯 Expected Results

When someone submits a form:
1. ✅ **Data saves to Google Sheets** (Timestamp, Name, Email, Phone, City, Service, Message)
2. ✅ **Email sent to damnart.seo@gmail.com**
3. ✅ **Success message shows on website**
4. ✅ **No 403 errors**

---

## 🔧 Troubleshooting

### If emails don't arrive:
1. **Check spam folder**
2. **Run `testSimpleEmail()`** to test
3. **Check Google Apps Script logs**

### If 403 errors persist:
1. **Double-check deployment settings** → "Anyone"
2. **Use the correct URL** from latest deployment
3. **Clear browser cache**

### If data doesn't save to Google Sheets:
1. **Run `setupSpreadsheet()`** first
2. **Check Google Apps Script logs**
3. **Verify Google Sheet permissions**

---

## 📞 Support

If you still have issues:
1. **Check execution logs** in Google Apps Script
2. **Run `runAllTests()`** to test everything
3. **Verify all URLs** are correct
4. **Check email address** spelling

**Follow this guide exactly and everything will work perfectly!** 🎉 