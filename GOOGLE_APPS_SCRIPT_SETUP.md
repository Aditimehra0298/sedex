# Google Apps Script Setup Guide - Fix 403 Error

## 🔧 Step-by-Step Setup to Fix 403 Error

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Rename the first sheet to "Form Submissions"
4. Add these headers in row 1:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Phone
   - E1: City
   - F1: Service
   - G1: Message
5. Copy the Spreadsheet ID from the URL (the long string between /d/ and /edit)

### Step 2: Create Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace all code with this:

```javascript
// Google Apps Script for SEDEX SMETA Form Handling
// Deploy this as a web app in Google Apps Script

function doPost(e) {
  try {
    // Parse the incoming form data
    const formData = e.parameter;
    
    // Get the active spreadsheet (REPLACE WITH YOUR SPREADSHEET ID)
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
    
    // Return success response
    return ContentService
      .createTextOutput('Form submitted successfully!')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput('Error processing form submission')
      .setMimeType(ContentService.MimeType.TEXT);
  }
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
```

### Step 3: Update Spreadsheet ID
1. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID
2. Save the script

### Step 4: Deploy as Web App
1. Click **"Deploy"** → **"New deployment"**
2. Choose **"Web app"**
3. Set these settings:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (NOT "Anyone with Google account")
4. Click **"Deploy"**
5. **Copy the web app URL**

### Step 5: Test the Web App
1. Open the web app URL in a browser
2. If you see "Script function not found: doGet", the script is working
3. If you see a 403 error, go back to Step 4 and check the deployment settings

### Step 6: Update Website (if needed)
If you get a new web app URL, update it in your website components.

## 🔍 Troubleshooting 403 Error

### Common Causes:
1. **"Who has access" set to "Anyone with Google account"** → Change to "Anyone"
2. **Wrong deployment settings** → Redeploy with correct settings
3. **Script not saved** → Make sure to save before deploying
4. **Spreadsheet permissions** → Make sure you have edit access to the spreadsheet

### Quick Fix:
1. Go to **"Deploy"** → **"Manage deployments"**
2. Click the **pencil icon** to edit
3. Change **"Who has access"** to **"Anyone"**
4. Click **"Deploy"** to update

## ✅ Success Indicators
- Web app URL opens without 403 error
- Form submissions appear in Google Sheet
- Email notifications sent to damnart.seo@gmail.com
- Website forms work without errors

## 📞 Need Help?
If you still get 403 errors after following these steps, the email backup will still work to ensure form submissions are received. 