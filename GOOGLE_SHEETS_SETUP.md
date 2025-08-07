# Google Sheets Integration Setup Guide

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "SEDEX SMETA Form Submissions"
4. Create a sheet named "Form Submissions"
5. Copy the spreadsheet ID from the URL (it's the long string between /d/ and /edit)

## Step 2: Set up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Replace the default code with the content from `google-apps-script.js`
4. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID
5. Save the project with a name like "SEDEX SMETA Form Handler"

## Step 3: Deploy as Web App

1. Click on "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following:
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click "Deploy"
5. Copy the Web App URL (you'll need this for the website)

## Step 4: Update Website Code

1. Open `src/components/Hero.tsx`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with your actual Web App URL
3. Open `src/components/Contact.tsx`
4. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with your actual Web App URL

## Step 5: Test the Integration

1. Fill out the form on your website
2. Submit the form
3. Check your Google Sheet - a new row should be added
4. Check your email (damnart.seo@gmail.com) - you should receive a notification

## Email Notification Features

- **Recipient**: damnart.seo@gmail.com
- **Subject**: "New SEDEX SMETA Certification Inquiry"
- **Content**: Includes all form fields (name, email, phone, city, service, message)
- **Timestamp**: Shows when the form was submitted

## Troubleshooting

### If forms aren't submitting:
1. Check that the Web App URL is correct
2. Ensure the Google Apps Script is deployed as a web app
3. Check browser console for CORS errors

### If emails aren't being sent:
1. Check that the Google Apps Script has permission to send emails
2. Verify the recipient email address is correct
3. Check the Apps Script logs for errors

### If Google Sheets isn't updating:
1. Verify the spreadsheet ID is correct
2. Check that the sheet name is exactly "Form Submissions"
3. Ensure the Google Apps Script has permission to access the spreadsheet

## Security Notes

- The web app is set to "Anyone" access for public form submissions
- Consider implementing rate limiting for production use
- The spreadsheet ID and web app URL should be kept secure
- Consider using environment variables for sensitive URLs in production

## Customization

You can modify the email template in the `sendEmailNotification` function in the Google Apps Script to:
- Change the email subject
- Modify the email body format
- Add additional recipients
- Include custom branding 