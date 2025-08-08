# 🔧 FIX 403 FORBIDDEN ERROR - Step by Step Guide

## ❌ The Problem
You're getting `403 (Forbidden)` errors because your Google Apps Script web app is not properly deployed with the correct permissions.

## ✅ The Solution
Follow these steps **exactly** to fix the 403 error:

---

## 📋 Step 1: Open Your Google Apps Script Project

1. Go to [script.google.com](https://script.google.com)
2. Find and open your project (the one with your form handling code)
3. Make sure you're in the **Code Editor**

---

## 📋 Step 2: Update Your Code

Replace ALL the code in your Google Apps Script with this:

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

---

## 📋 Step 3: Save Your Code

1. Click **File** → **Save** (or press Ctrl+S)
2. Give your project a name if prompted

---

## 📋 Step 4: Deploy as Web App (CRITICAL)

1. Click **Deploy** → **New deployment**
2. Click **Select type** → **Web app**
3. Fill in the settings:
   - **Description**: `Form Handler v2` (or any name)
   - **Execute as**: `Me`
   - **Who has access**: **`Anyone`** ← **THIS IS CRITICAL!**
4. Click **Deploy**
5. Click **Authorize access** if prompted
6. **Copy the new Web app URL** (it will be different from your old one)

---

## 📋 Step 5: Update Your Website

Replace the Google Apps Script URL in your website with the **NEW URL** you just got.

In both `Hero.tsx` and `Contact.tsx`, find this line:
```javascript
form.action = 'https://script.google.com/macros/s/AKfycbyoX4DKwZTC5Xtt3LdhGvXITklHcw66_32JZTPEQX67zmLsjbX5d6m1ysq1mePi4Z9w/exec';
```

Replace it with your **NEW URL**:
```javascript
form.action = 'YOUR_NEW_SCRIPT_URL_HERE';
```

---

## 📋 Step 6: Test the Setup

1. **Run the setup function**:
   - In Google Apps Script, click **Run** → **setupSpreadsheet**
   - This will create headers in your Google Sheet

2. **Test the script**:
   - Click **Run** → **testFunction**
   - Check your Google Sheet - you should see a test row

3. **Test your website**:
   - Submit a form on your website
   - Check your Google Sheet - you should see the data

---

## 🚨 Common Mistakes to Avoid

1. **Wrong "Who has access" setting** → Must be "Anyone" (not "Anyone with Google account")
2. **Using old URL** → Always use the URL from the latest deployment
3. **Not running setupSpreadsheet** → Headers won't be created
4. **Not authorizing** → Script won't have permission to access sheets

---

## 🔍 How to Verify It's Working

1. **Check Google Apps Script logs**:
   - In Google Apps Script, click **View** → **Execution log**
   - You should see "Received data" and "Data added to sheet successfully"

2. **Check Google Sheet**:
   - Open your Google Sheet
   - You should see new rows being added when forms are submitted

3. **Check browser console**:
   - No more 403 errors
   - Form submissions should work without errors

---

## 📞 If Still Having Issues

1. **Double-check deployment settings** → "Who has access" = "Anyone"
2. **Use the NEW URL** → Not the old one
3. **Run setupSpreadsheet()** → To create headers
4. **Check Google Sheet permissions** → Make sure the script can access it

The 403 error will be completely resolved once you follow these steps correctly! 