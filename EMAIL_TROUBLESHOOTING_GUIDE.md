# Email Troubleshooting Guide for Google Apps Script

## 🚨 Common Issues & Solutions

### 1. **Gmail API Not Enabled**
**Problem**: Emails not sending due to API restrictions
**Solution**: 
1. Go to your Google Apps Script project
2. Click on "Services" in the left sidebar
3. Add "Gmail API" service
4. Save and redeploy

### 2. **MailApp Quota Exceeded**
**Problem**: Daily email sending limit reached
**Solution**: 
- Check your quota in Google Apps Script dashboard
- Consider using GmailApp as alternative
- Wait for quota reset (usually 24 hours)

### 3. **Authentication Issues**
**Problem**: Script not authorized to send emails
**Solution**:
1. Run the script manually first time
2. Grant necessary permissions when prompted
3. Check if you're logged into correct Google account

### 4. **Email Address Issues**
**Problem**: Invalid or blocked recipient email
**Solution**:
- Verify email address: `damnart.seo@gmail.com`
- Check spam/junk folder
- Try sending to a different email first

## 🔧 Step-by-Step Fix Process

### Step 1: Replace Your Current Script
Copy the new `GOOGLE_APPS_SCRIPT_EMAIL_FIX.js` content into your Google Apps Script editor.

### Step 2: Enable Required Services
1. In Google Apps Script, go to **Services** (left sidebar)
2. Add these services:
   - **Gmail API**
   - **Google Sheets API** (if not already enabled)

### Step 3: Test the Script
1. Save your script
2. Run the `runAllTests()` function
3. Check the **Execution log** for results

### Step 4: Check Logs
1. Go to **Executions** in left sidebar
2. Click on your latest execution
3. Check for any error messages

## 🧪 Testing Functions

### Test Email Function
```javascript
function testEmailNotification() {
  // This will test sending a test email
  // Run this to verify email functionality
}
```

### Test All Systems
```javascript
function runAllTests() {
  // This tests everything: APIs, email, spreadsheet
  // Run this for comprehensive testing
}
```

### Check API Status
```javascript
function checkGmailAPIStatus() {
  // Checks if Gmail API is accessible
}

function checkMailAppStatus() {
  // Checks if MailApp is accessible
}
```

## 📋 Manual Testing Steps

1. **Open Google Apps Script**
2. **Copy the new code** from `GOOGLE_APPS_SCRIPT_EMAIL_FIX.js`
3. **Save the script**
4. **Run `runAllTests()` function**
5. **Check execution logs**
6. **Test form submission** from your website

## 🚀 Alternative Solutions

### If MailApp Fails, Use GmailApp
The new script automatically tries GmailApp if MailApp fails.

### Check Quotas
- **MailApp**: 100 emails/day (free tier)
- **GmailApp**: 1,000 emails/day (free tier)

### Manual Email Test
```javascript
function manualEmailTest() {
  try {
    MailApp.sendEmail(
      "damnart.seo@gmail.com",
      "Test Email",
      "This is a test email from Google Apps Script"
    );
    Logger.log("Manual email test successful");
  } catch (error) {
    Logger.log("Manual email test failed: " + error.toString());
  }
}
```

## 🔍 Debugging Checklist

- [ ] Gmail API enabled
- [ ] Script has necessary permissions
- [ ] Email address is correct
- [ ] Quota not exceeded
- [ ] Script deployed and accessible
- [ ] Form data reaching the script
- [ ] Execution logs checked
- [ ] Test functions run successfully

## 📞 If Still Not Working

1. **Check execution logs** for specific error messages
2. **Run test functions** to isolate the problem
3. **Verify Google account** permissions
4. **Check spam folder** for test emails
5. **Try different recipient email** temporarily

## 🎯 Quick Fix Commands

Run these in order:
1. `setupSpreadsheet()` - Set up headers
2. `checkGmailAPIStatus()` - Check Gmail API
3. `checkMailAppStatus()` - Check MailApp
4. `testEmailNotification()` - Test email
5. `runAllTests()` - Test everything

## 📊 Expected Results

After running tests, you should see:
- ✅ Gmail API accessible
- ✅ MailApp accessible  
- ✅ Test email sent successfully
- ✅ Spreadsheet updated
- ✅ No error messages in logs

If you see any ❌ errors, the logs will tell you exactly what's wrong! 