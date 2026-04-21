# DOE AI Infrastructure Sales Training

Portable training app for Mac, Windows, and the web.

## What This Is

This project is a static progressive web app (PWA). That means:

- it runs in any modern browser
- it can be hosted on very cheap static hosting
- it can be installed from the browser on Windows and many Chromium-based desktop browsers
- it works well on Mac in the browser and can be saved to the dock as a site app in supported browsers

## Run Locally

If Node.js is installed:

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

## Send To Someone Else

The easiest handoff is to zip the whole project folder and send the zip.

The recipient has two ways to run it:

1. Simplest:
   Open `index.html` in a modern browser.
   This is the easiest option for a quick review on Mac or Windows.

2. Full local app behavior:
   Install Node.js, unzip the folder, open a terminal in the project folder, and run:

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

Use the Node.js option if they want the app to behave more like a local web app, including service-worker support.

## Portability Model

The recommended approach is:

1. Keep the app as a static web app.
2. Host it on a cheap website.
3. Let reps open it in a browser or install it as a desktop-style app.

This gives you one codebase for:

- Windows
- macOS
- web

## Cheap Hosting Options

Good low-cost fits for this project:

- Cloudflare Pages
- Netlify
- GitHub Pages
- Azure Static Web Apps
- Amazon S3 plus CloudFront

## Files That Matter

- `index.html` - app shell
- `styles.css` - visual design
- `app.js` - training content and client logic
- `manifest.webmanifest` - install metadata
- `service-worker.js` - offline caching
- `server.js` - simple local Node server for demos

## Notes

- The app currently stores progress in browser local storage.
- If you want shared logins, manager reporting across reps, or centralized analytics, the next step is adding a lightweight backend.
