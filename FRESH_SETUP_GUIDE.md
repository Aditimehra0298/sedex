# Fresh Google Apps Script Setup - Fix 403 Error

## 🚀 Complete Setup from Scratch

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

### Step 4: Deploy as Web App
1. Click **"Deploy"** → **"New deployment"**
2. Choose **"Web app"**
3. Set these **exact** settings:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: **"Anyone"** (this is crucial!)
4. Click **"Deploy"**
5. **Copy the new web app URL**

### Step 5: Test the Web App
1. Open the web app URL in a browser
2. You should see: **"Script function not found: doGet"**
3. If you see 403 error, go back to Step 4 and check settings

### Step 6: Update Website (if needed)
If you got a new web app URL, update it in your website components.

## 🔍 Troubleshooting

### If you still get 403 error:
1. **Check deployment settings** - "Who has access" must be "Anyone"
2. **Make sure script is saved** before deploying
3. **Try creating a completely new project**
4. **Check spreadsheet permissions** - you must have edit access

### If entries don't appear in Google Sheet:
1. **Check spreadsheet ID** is correct
2. **Check sheet name** is exactly "Form Submissions"
3. **Make sure you have edit permissions** on the spreadsheet

## ✅ Success Indicators
- Web app URL opens without 403 error
- Form submissions appear in Google Sheet
- Email notifications sent to damnart.seo@gmail.com
- Website forms work without errors

## 📞 Need Help?
The email backup will still work even if Google Sheets has issues, ensuring form submissions are received. 