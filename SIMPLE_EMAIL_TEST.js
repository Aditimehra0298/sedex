// Simple Email Test Script
// Copy this code to your Google Apps Script and run it

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

function testGmailApp() {
  const recipientEmail = "damnart.seo@gmail.com";
  const subject = "Test Email via GmailApp";
  const message = "This is a test email using GmailApp to verify email functionality.";
  
  try {
    GmailApp.sendEmail(recipientEmail, subject, message);
    Logger.log("✅ GmailApp test email sent successfully to: " + recipientEmail);
    return "SUCCESS: GmailApp email sent to " + recipientEmail;
  } catch (error) {
    Logger.log("❌ GmailApp error: " + error.toString());
    return "ERROR: " + error.toString();
  }
}

function checkEmailPermissions() {
  try {
    // Try to access Gmail
    const threads = GmailApp.getInboxThreads(0, 1);
    Logger.log("✅ Gmail access is working");
    return "SUCCESS: Gmail permissions are correct";
  } catch (error) {
    Logger.log("❌ Gmail permission error: " + error.toString());
    return "ERROR: " + error.toString();
  }
}

function runAllTests() {
  Logger.log("=== STARTING EMAIL TESTS ===");
  
  // Test 1: Check permissions
  Logger.log("Test 1: Checking Gmail permissions...");
  const permissionResult = checkEmailPermissions();
  Logger.log(permissionResult);
  
  // Test 2: Simple email
  Logger.log("Test 2: Sending simple email...");
  const simpleEmailResult = testSimpleEmail();
  Logger.log(simpleEmailResult);
  
  // Test 3: GmailApp email
  Logger.log("Test 3: Sending GmailApp email...");
  const gmailAppResult = testGmailApp();
  Logger.log(gmailAppResult);
  
  Logger.log("=== EMAIL TESTS COMPLETED ===");
  
  return {
    permissions: permissionResult,
    simpleEmail: simpleEmailResult,
    gmailApp: gmailAppResult
  };
} 