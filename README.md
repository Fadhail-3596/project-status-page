
# Project Status Page

A clean, modern, and responsive **Coming Soon / Under Maintenance** landing page for projects that are still in development.

Built with lightweight HTML, CSS, and vanilla JavaScript, this page is designed to provide visitors with a simple, professional message while a project is being prepared for launch.

## ✨ Features

- **Minimalist Design** — Clean typography, neutral colors, and subtle lime-green accents.
- **Fully Responsive** — Optimized for desktop, tablet, and mobile screens.
- **Maintenance Status** — Clearly communicates that the project is still in progress.
- **Automatic Copyright Year** — Updates the displayed year automatically.
- **Lightweight and Fast** — No frameworks, build tools, or JavaScript libraries required.
- **Accessible Markup** — Semantic HTML and keyboard-focus styling.
- **SEO Metadata** — Includes a page title, description, and viewport configuration.
- **Easy Customization** — Simple HTML, CSS, and JavaScript files.
- **Vercel Ready** — Can be deployed as a static website.

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
  - DM Sans
  - Space Grotesk
- Vercel for deployment

## 📁 Project Structure

```text
project-status-page/
├── index.html
├── style.css
├── script.js
└── README.md
```

### File Overview

| File | Description |
|---|---|
| `index.html` | Main page structure and content |
| `style.css` | Layout, typography, colors, and responsive styles |
| `script.js` | Automatically updates the copyright year |
| `README.md` | Project documentation |

## 🚀 Getting Started

### Prerequisites

You only need:

- A modern web browser
- A text editor, such as Visual Studio Code
- Git and a GitHub account, if you want to publish the project

No package installation or build process is required.

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/project-status-page.git
   ```

2. Navigate to the project directory:

   ```bash
   cd project-status-page
   ```

3. Open `index.html` in your browser.

   Alternatively, use the Live Server extension in Visual Studio Code for local development.

Replace `YOUR-USERNAME` with your actual GitHub username.

## 🌐 Deploy to Vercel

You can deploy this project to Vercel in a few simple steps.

1. Push the project files to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/).
3. Select **Add New → Project**.
4. Import your `project-status-page` repository.
5. Configure the project using the following settings:

   | Setting | Value |
   |---|---|
   | Framework Preset | Other |
   | Root Directory | `./` |
   | Build Command | Leave empty |
   | Output Directory | Leave empty |
   | Install Command | Leave empty |

6. Click **Deploy**.

Vercel will serve the static files directly. No compilation step is needed.

After deployment, Vercel will provide a URL for your website.

### Automatic Deployments

When your GitHub repository is connected to Vercel, new commits can trigger deployments automatically.

Your website will be updated when you push changes to the connected production branch.

## 🎨 Customization

### Change the Page Content

Edit `index.html` to customize:

- Page title
- Main heading and description
- Maintenance status message
- Footer text and attribution

For example:

```html
<h1>
  Good things<br>
  take <span>time.</span>
</h1>
```

### Change the Color Theme

Edit the CSS variables at the top of `style.css`.

```css
:root {
  --paper: #f6f4ef;
  --ink: #22251f;
  --muted: #77796f;
  --line: #e1dfd6;
  --accent: #c7e36a;
  --accent-dark: #53651f;
  --card: #fffefa;
}
```

These variables control the page background, text, borders, highlights, and status card colors.

### Change the Typography

The page uses DM Sans for body text and Space Grotesk for headings.

You can update the Google Fonts import in `index.html` and the font variables in `style.css` to use different typefaces.

### Update the Footer Credit

Find this line in `index.html`:

```html
<span>Made with care, by Fadhail.</span>
```

Replace `Fadhail` with your preferred name, brand, or organization.

### Automatic Copyright Year

The copyright year is updated by `script.js`.

```html
© <span id="year">2026</span>
```

JavaScript replaces the displayed year with the current year when the page initializes.

## ⚡ Performance

This project is intentionally lightweight:

- No frontend framework
- No package manager required
- No build step
- No external JavaScript dependencies
- External Google Fonts are optional and have local font-family fallbacks

Actual loading performance depends on the hosting environment, browser, and network connection.

## ♿ Accessibility

The project includes several accessibility considerations:

- Semantic HTML elements
- A descriptive page title
- A main content landmark
- Accessible navigation labeling
- Decorative SVG icons marked as hidden from assistive technology
- Keyboard-visible focus indicators
- Reduced-motion preferences

## 🔒 Security and Privacy

This page does not require a database, user accounts, or a backend server.

It does not intentionally collect or store visitor information.

Google Fonts are loaded from Google's servers, so visitors' browsers may connect to Google when those fonts are requested.

## 📌 Important Notes

- This is a static landing page, not a server-side maintenance mode.
- It does not automatically restrict access to other routes or applications.
- If you need to prevent access to an application during maintenance, configure access restrictions at the hosting, server, or application level.
- Make sure `index.html`, `style.css`, and `script.js` are in the same directory.

## 📄 License

This project is provided for personal and commercial customization.

If you intend to distribute it as an open-source project, consider adding an explicit license, such as the MIT License, in a separate `LICENSE` file.

## 👨‍💻 Author

**Fadhail**

A simple project built with care.

---

Made with care, by Fadhail.
