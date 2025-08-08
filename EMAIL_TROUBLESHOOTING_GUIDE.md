# 🔧 EMAIL NOTIFICATION TROUBLESHOOTING GUIDE

## ❌ Problem: Emails not reaching damnart.seo@gmail.com

Let's fix this step by step:

---

## 🔍 Step 1: Check Google Apps Script Logs

1. **Go to [script.google.com](https://script.google.com)**
2. **Open your project**
3. **Click View → Execution log**
4. **Look for these messages:**
   - ✅ "Email notification sent successfully"
   - ❌ "Email error: [error message]"

**If you see errors, the script isn't working properly.**

---

## 🔍 Step 2: Test Email Function Manually

1. **In Google Apps Script, click Run → testEmailNotification**
2. **Check the execution log** for any errors
3. **Check your email** (including spam folder)

**If this test fails, there's a script issue.**

---

## 🔍 Step 3: Check Deployment Settings

**Critical: Your script must be deployed correctly**

1. **Click Deploy → Manage deployments**
2. **Check the latest deployment:**
   - ✅ **Execute as**: `Me`
   - ✅ **Who has access**: `Anyone`
   - ✅ **Status**: Active

**If settings are wrong, redeploy with correct settings.**

---

## 🔍 Step 4: Check Gmail Settings

### Check Spam Folder
1. **Open Gmail**
2. **Check Spam folder** - emails might be there
3. **Mark as "Not Spam"** if found

### Check Gmail Filters
1. **Go to Gmail Settings**
2. **Click "Filters and Blocked Addresses"**
3. **Check if there are filters blocking emails**

### Check Gmail Quotas
1. **Google Apps Script has daily email limits**
2. **Check if you've exceeded limits**
3. **Wait 24 hours if quota exceeded**

---

## 🔍 Step 5: Verify Email Address

**Make sure the email is correct:**
```javascript
const recipientEmail = "damnart.seo@gmail.com";
```

**Common mistakes:**
- ❌ `damnart.seo@gmail.com` (extra spaces)
- ❌ `damnart.seo@.gmail.com` (typo)
- ✅ `damnart.seo@gmail.com` (correct)

---

## 🔍 Step 6: Test with Different Email

**Try sending to a different email to test:**

1. **Temporarily change the email in the script:**
```javascript
const recipientEmail = "your-other-email@gmail.com";
```

2. **Redeploy the script**
3. **Test form submission**
4. **Check if emails arrive at the other address**

---

## 🔍 Step 7: Check Script Permissions

**The script needs permission to send emails:**

1. **When you first run the script, Google will ask for permissions**
2. **Click "Review Permissions"**
3. **Click "Advanced"**
4. **Click "Go to [Project Name] (unsafe)"**
5. **Click "Allow"**

**If you don't see permission requests, the script isn't running.**

---

## 🔍 Step 8: Alternative Email Method

**If Gmail isn't working, try this alternative code:**

```javascript
function sendEmailNotification(data) {
  const recipientEmail = "damnart.seo@gmail.com";
  const subject = "New SEDEX SMETA Certification Inquiry - Eurocert";
  
  const emailBody = `
    New SEDEX SMETA Certification Inquiry
    
    Name: ${data.name || 'Not provided'}
    Email: ${data.email || 'Not provided'}
    Phone: ${data.phone || 'Not provided'}
    City: ${data.city || 'Not provided'}
    Service: ${data.service || 'Not provided'}
    Message: ${data.message || 'No message provided'}
    
    Submission Time: ${new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata' 
    })}
    
    This notification was automatically sent from the Eurocert SEDEX SMETA landing page form.
  `;

  try {
    MailApp.sendEmail(recipientEmail, subject, emailBody);
    Logger.log('Email sent successfully to: ' + recipientEmail);
  } catch (error) {
    Logger.log('Email error: ' + error.toString());
    // Try alternative method
    try {
      GmailApp.sendEmail(recipientEmail, subject, emailBody);
      Logger.log('Email sent via GmailApp to: ' + recipientEmail);
    } catch (gmailError) {
      Logger.log('GmailApp error: ' + gmailError.toString());
    }
  }
}
```

---

## 🔍 Step 9: Check Form Submission

**Make sure forms are actually being submitted:**

1. **Check Google Sheet** - are new rows being added?
2. **Check browser console** - any JavaScript errors?
3. **Check network tab** - is the form actually submitting?

**If data isn't saving to Google Sheets, the email won't be sent either.**

---

## 🔍 Step 10: Manual Test

**Test the complete flow manually:**

1. **Run `testFunction()`** in Google Apps Script
2. **Check Google Sheet** - test row added?
3. **Run `testEmailNotification()`** in Google Apps Script
4. **Check email** - test email received?
5. **Submit form on website**
6. **Check both Google Sheet and email**

---

## 🚨 Common Issues & Solutions

### Issue 1: "Email error: Service not available"
**Solution:** Wait a few minutes and try again. Google Apps Script has rate limits.

### Issue 2: "Email error: Invalid email"
**Solution:** Check the email address spelling in the script.

### Issue 3: "Email error: Quota exceeded"
**Solution:** Wait 24 hours or use a different Google account.

### Issue 4: No email errors but no emails received
**Solution:** Check spam folder and Gmail filters.

### Issue 5: Script runs but emails don't send
**Solution:** Check if you authorized the script to send emails.

---

## 📞 Quick Fix Checklist

- [ ] **Check Google Apps Script logs**
- [ ] **Run `testEmailNotification()`**
- [ ] **Check spam folder**
- [ ] **Verify email address spelling**
- [ ] **Check deployment settings**
- [ ] **Authorize script permissions**
- [ ] **Test with different email**
- [ ] **Check Gmail filters**

**Follow this checklist and the email issue will be resolved!** 🎉 