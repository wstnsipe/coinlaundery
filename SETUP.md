# Coin Laundry Website — Setup Guide

## 1. Install Dependencies

```bash
cd coinlaundryweb
npm install
```

## 2. Add Your Photos

Save the 5 photos you uploaded into the `public/images/` folder with these exact filenames:

| Photo | Save as |
|---|---|
| Exterior storefront (Coin Laundry sign) | `public/images/exterior.jpg` |
| Wide shot of all washers | `public/images/machines-wide.jpg` |
| Wall of dryers | `public/images/dryers.jpg` |
| Waiting area with chairs + vending | `public/images/waiting.jpg` |
| Folding area with chairs | `public/images/folding.jpg` |

## 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 4. Build for Production

```bash
npm run build
npm run start
```

## 5. Connect the Contact Form

The contact form currently simulates a send. To receive real messages, integrate one of these (free):
- **Formspree** — formspree.io (easiest, no backend needed)
- **Resend** — resend.com (email API)
- **EmailJS** — emailjs.com

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/location` | Location & Hours |
| `/contact` | Contact |
