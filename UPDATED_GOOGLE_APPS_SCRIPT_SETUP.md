# Updated Google Apps Script Setup for SEDEX SMETA

## 🚀 Complete Setup Guide

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a **new** spreadsheet
3. **Copy the Spreadsheet ID** from the URL (between /d/ and /edit)
4. The script will automatically use the active sheet

### Step 2: Create Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click **"New Project"**
3. Delete all existing code
4. Paste this exact code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get the form data
    let data;
    
    if (e.postData.type === 'application/x-www-form-urlencoded') {
      // Handle URL-encoded form data
      data = {
        name: e.parameter.name,
        phone: e.parameter.phone,
        email: e.parameter.email,
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
    
    // Prepare row data for Google Sheet
    const rowData = [
      data.name || '',
      data.phone || '',
      data.email || '',
      data.city || '',
      data.service || '',
      data.message || '',
      new Date()
    ];
    
    // Add data to Google Sheet
    sheet.appendRow(rowData);
    
    // Log success
    Logger.log('Data added to sheet successfully');
    
    // Send email notification
    try {
      sendEmailNotification(data);
      Logger.log('Email sent successfully');
    } catch (emailError) {
      Logger.log('Email error: ' + emailError.toString());
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle preflight requests
  return ContentService
    .createTextOutput('OK')
    .setMimeType(ContentService.MimeType.TEXT);
}

function sendEmailNotification(data) {
  const recipientEmail = "damnart.seo@gmail.com";
  const subject = "New SEDEX SMETA Certification Inquiry";
  
  const emailBody = `
    <h2>New SEDEX SMETA Certification Inquiry</h2>
    <p><strong>Name:</strong> ${data.name || 'Not provided'}</p>
    <p><strong>Phone Number:</strong> ${data.phone || 'Not provided'}</p>
    <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
    <p><strong>City:</strong> ${data.city || 'Not provided'}</p>
    <p><strong>Service:</strong> ${data.service || 'Not provided'}</p>
    <p><strong>Message:</strong> ${data.message || 'No message provided'}</p>
    <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
    
    <hr>
    <p><em>This notification was sent automatically from the Eurocert SEDEX SMETA website.</em></p>
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
  sheet.appendRow(['Test Entry', 'Test Phone', 'test@test.com', 'Test City', 'Test Service', 'Test Message', new Date()]);
  Logger.log('Test function executed successfully');
}

// Function to set up the spreadsheet headers (run this once)
function setupSpreadsheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Set up headers
  const headers = [
    'Name',
    'Phone',
    'Email',
    'City',
    'Service',
    'Message',
    'Timestamp'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
}
```

### Step 3: Set Up Spreadsheet Headers
1. **Save the script** (Ctrl+S or Cmd+S)
2. **Run the setupSpreadsheet function**:
   - Click on the function dropdown (top right)
   - Select `setupSpreadsheet`
   - Click the **Run** button
3. **Check your Google Sheet** - headers should be added

### Step 4: Test the Script
1. **Run the testFunction**:
   - Select `testFunction` from the dropdown
   - Click **Run**
2. **Check your Google Sheet** - a test row should be added
3. **Check the logs** - View → Execution log

### Step 5: Deploy as Web App
1. Click **"Deploy"** → **"New deployment"**
2. Choose **"Web app"**
3. Set these **exact** settings:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: **"Anyone"** (this is crucial!)
4. Click **"Deploy"**
5. **Copy the new web app URL**

### Step 6: Update Website (if needed)
If you got a new web app URL, update it in your website components.

## ✅ Success Indicators
- Test function adds data to Google Sheet
- Web app URL opens without 403 error
- Form submissions appear in Google Sheet
- Email notifications sent to damnart.seo@gmail.com
- Website forms work without errors

## 🔍 Troubleshooting
- **403 error**: Check "Who has access" is set to "Anyone"
- **No data in sheet**: Run testFunction to verify script works
- **No email notifications**: Check the sendEmailNotification function
- **Logs**: View → Execution log to see what's happening

## 📞 Need Help?
The email backup will still work even if Google Sheets has issues, ensuring form submissions are received. 