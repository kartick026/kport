# 📧 EmailJS Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (`sharmakartick026@gmail.com`)
5. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (you'll need this)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. **Copy your Public Key**

### Step 5: Update Your Code
Open `src/app/contact/page.tsx` and replace these lines:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

With your actual IDs:

```typescript
const serviceId = 'service_xxxxxxxxx'; // Your actual Service ID
const templateId = 'template_xxxxxxxxx'; // Your actual Template ID
const publicKey = 'xxxxxxxxxxxxxxxx'; // Your actual Public Key
```

### Step 6: Deploy
```bash
git add .
git commit -m "Add EmailJS contact form"
git push origin main
```

## ✅ That's It!

Once deployed, when someone fills out your contact form:
- **You'll receive emails at**: `sharmakartick026@gmail.com`
- **Subject**: "New Contact Form Message from [Name]"
- **Content**: Name, email, and message from the visitor

## 🔒 Security Notes
- Your public key is safe to use in frontend code
- EmailJS handles the email sending securely
- Free plan: 200 emails/month

## 🆘 Need Help?
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
