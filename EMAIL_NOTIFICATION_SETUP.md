# 📧 EMAIL NOTIFICATION SETUP GUIDE

## ✅ What You'll Get
- **Email notifications** sent to `damnart.seo@gmail.com`
- **Beautiful HTML email** with all form details
- **Automatic notifications** when forms are submitted
- **Data still saves to Google Sheets**

## 📋 Setup Steps

### Step 1: Update Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Open your project
3. **Delete ALL existing code**
4. **Copy and paste the code** from `GOOGLE_APPS_SCRIPT_WITH_EMAIL_NOTIFICATIONS.js`

### Step 2: Deploy with Correct Permissions
1. **Save** the code (Ctrl+S)
2. Click **Deploy** → **New deployment**
3. Click **Select type** → **Web app**
4. Set these settings:
   - **Description**: `Form Handler with Email v1`
   - **Execute as**: `Me`
   - **Who has access**: **`Anyone`** ← **CRITICAL!**
5. Click **Deploy**
6. **Copy the NEW URL**

### Step 3: Update Your Website
Replace the old URL in your website with the **NEW URL**.

In both `Hero.tsx` and `Contact.tsx`, find:
```javascript
form.action = 'https://script.google.com/macros/s/AKfycbyoX4DKwZTC5Xtt3LdhGvXITklHcw66_32JZTPEQX67zmLsjbX5d6m1ysq1mePi4Z9w/exec';
```

Replace with your **NEW URL**:
```javascript
form.action = 'YOUR_NEW_SCRIPT_URL_HERE';
```

### Step 4: Test Everything
1. **Run `testFunction()`** in Google Apps Script
2. **Run `testEmailNotification()`** in Google Apps Script
3. **Check your email** - you should receive a test email
4. **Submit a form** on your website
5. **Check both** Google Sheet and email

## 📧 Email Features

### What You'll Receive:
- **Subject**: "New SEDEX SMETA Certification Inquiry - Eurocert"
- **Beautiful HTML email** with:
  - 👤 Name
  - 📧 Email
  - 📞 Phone
  - 🏙️ City
  - 🛠️ Service
  - 💬 Message
  - ⏰ Submission Time (Indian timezone)
  - 📊 Status confirmation

### Email Design:
- **Professional HTML layout**
- **Eurocert branding colors**
- **Clear data presentation**
- **Mobile-friendly design**
- **Indian timezone formatting**

## 🔧 Troubleshooting

### If emails don't arrive:
1. **Check spam folder**
2. **Verify email address**: `damnart.seo@gmail.com`
3. **Check Google Apps Script logs** for errors
4. **Run `testEmailNotification()`** to test

### If 403 errors persist:
1. **Double-check deployment settings** → "Anyone"
2. **Use the NEW URL** from latest deployment
3. **Clear browser cache** and try again

## 🎯 Expected Results

When someone submits a form:
1. ✅ **Data saves to Google Sheets**
2. ✅ **Email sent to damnart.seo@gmail.com**
3. ✅ **Success message shows on website**
4. ✅ **No 403 errors**

## 📱 Email Preview

The email will look like:
```
🚀 New SEDEX SMETA Certification Inquiry

📋 Inquiry Details
👤 Name: John Doe
📧 Email: john@company.com
📞 Phone: +91 98765-43210
🏙️ City: Mumbai
🛠️ Service: SEDEX SMETA 4-Pillar Audit
💬 Message: Need certification for export

⏰ Submission Time: December 15, 2024, 2:30:45 PM

📊 Data Status:
✅ Saved to Google Sheets
📧 Email notification sent
```

**That's it! You'll now get instant email notifications for every form submission!** 🎉 