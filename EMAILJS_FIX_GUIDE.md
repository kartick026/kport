# 🔧 EmailJS Fix Guide

## 🚨 Common Issues & Solutions

### Issue 1: Email Service Not Connected
**Problem**: Form submits but no emails are received
**Solution**: Connect Gmail service in EmailJS dashboard

### Issue 2: Template Variables Don't Match
**Problem**: Emails sent but with wrong content
**Solution**: Verify template variables match the code

### Issue 3: Domain Not Authorized
**Problem**: CORS errors or blocked requests
**Solution**: Add your domain to authorized domains

---

## 🛠️ Step-by-Step Fix

### Step 1: Verify Email Service Connection
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Click **"Email Services"** in left sidebar
3. Find your service `service_33730vj`
4. **If not connected**: Click "Connect Account" and authenticate with Gmail
5. **If connected**: Make sure it shows "Connected" status

### Step 2: Check Email Template
1. Go to **"Email Templates"**
2. Find template `template_ak9q4e9`
3. Verify these variables exist in your template:
   ```
   {{from_name}}
   {{from_email}}
   {{message}}
   {{to_email}}
   ```
4. **Template should look like**:
   ```
   New Contact Form Message
   
   From: {{from_name}} ({{from_email}})
   To: {{to_email}}
   
   Message:
   {{message}}
   ```

### Step 3: Add Domain Authorization
1. Go to **"Account"** → **"General"**
2. Scroll to **"Authorized Domains"**
3. Add your domains:
   - `localhost:3000` (for testing)
   - `your-vercel-domain.vercel.app` (for production)
   - `your-custom-domain.com` (if you have one)

### Step 4: Test the Form
1. Go to `http://localhost:3000/contact`
2. Fill out and submit the form
3. Check your Gmail inbox (`sharmakartick026@gmail.com`)

---

## 🚨 If Still Not Working

### Alternative 1: Switch to Formspree (Recommended)
- Easier setup
- Free tier available
- More reliable

### Alternative 2: Switch to Resend
- Modern API
- Great developer experience
- Free tier available

---

## 📧 Current Configuration
- **Service ID**: `service_33730vj`
- **Template ID**: `template_ak9q4e9`
- **Public Key**: `MkfoBME0dtSbymOMy`
- **Recipient Email**: `sharmakartick026@gmail.com`

---

## 🔍 Debug Steps
1. Open browser console (F12)
2. Submit the form
3. Look for any error messages
4. Check Network tab for failed requests

**Common Error Messages:**
- `400 Bad Request`: Template variables don't match
- `401 Unauthorized`: Public key is wrong
- `403 Forbidden`: Domain not authorized
- `500 Internal Server Error`: Service not connected

---

## ✅ Success Indicators
- Form shows "Thank you! Your message has been sent successfully."
- No errors in browser console
- Email appears in Gmail inbox within 1-2 minutes
