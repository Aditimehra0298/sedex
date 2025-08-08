# Quick Fix for Google Sheets - Data Not Saving

## 🚨 Immediate Fix Required

Your Google Apps Script deployment settings are causing the 403 error, which prevents data from saving to Google Sheets.

## 🔧 Step-by-Step Fix

### Step 1: Check Current Deployment
1. Go to [Google Apps Script](https://script.google.com)
2. Open your project
3. Click **"Deploy"** → **"Manage deployments"**
4. Look at your current settings

### Step 2: Fix Deployment Settings
1. Click the **pencil icon** to edit your deployment
2. Make sure these settings are **exact**:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: **"Anyone"** (NOT "Anyone with Google account")
3. Click **"Deploy"** to update

### Step 3: Test the Web App URL
1. Copy your web app URL
2. Open it in a browser
3. You should see: **"Script function not found: doGet"**
4. If you see 403 error, the settings are still wrong

## 📋 Complete Fresh Setup (if above doesn't work)

### Step 1: Create New Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a **new** spreadsheet
3. Rename the first sheet to **"Form Submissions"**
4. Add these headers in row 1:
   ```
   A1: Timestamp
   B1: Name  
   C1: Email
   D1: Phone
   E1: City
   F1: Service
   G1: Message
   ```
5. **Copy the Spreadsheet ID** from the URL (between /d/ and /edit)

### Step 2: Create New Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click **"New Project"**
3. Delete all existing code
4. Paste this exact code:

```javascript
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
```

### Step 3: Update Spreadsheet ID
1. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID
2. **Save the script** (Ctrl+S or Cmd+S)

### Step 4: Deploy with Correct Settings
1. Click **"Deploy"** → **"New deployment"**
2. Choose **"Web app"**
3. Set these **exact** settings:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: **"Anyone"** (this is crucial!)
4. Click **"Deploy"**
5. **Copy the new web app URL**

### Step 5: Update Website (if needed)
If you got a new web app URL, update it in your website components.

## ✅ Success Indicators
- Web app URL opens without 403 error
- Form submissions appear in Google Sheet
- Email notifications sent to damnart.seo@gmail.com
- Website forms work without errors

## 🔍 Troubleshooting
- **403 error**: Check "Who has access" is set to "Anyone"
- **No data in sheet**: Check spreadsheet ID and sheet name
- **No email notifications**: Check the sendEmailNotification function

## 📞 Need Help?
The email backup will still work even if Google Sheets has issues, ensuring form submissions are received. 