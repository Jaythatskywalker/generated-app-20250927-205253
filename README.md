# Ayura Sensual - Ayurvedic CBD Massage Oil Landing Page

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Jaythatskywalker/SensualFeelingOil)

> A stunning, modern, and sensual landing page for 'Sensual', a luxury ayurvedic CBD massage oil by Ayura. The design philosophy is 'less is more', focusing on evoking feelings of sensuality, intimacy, and natural luxury.

This project is a visually stunning, modern, and minimalist landing page designed to provide a premium and immersive user experience. It features a dark, sophisticated theme with warm gold and subtle lavender accents, enhanced with smooth animations to create a captivating and elegant atmosphere.

## ✨ Key Features

-   **Elegant & Sensual Design:** A minimalist, luxurious aesthetic with a dark theme that evokes intimacy and sophistication.
-   **Fully Responsive:** Flawless layout and performance across all devices, from mobile phones to desktops.
-   **Smooth Animations:** Subtle, beautiful animations and micro-interactions powered by Framer Motion for a polished feel.
-   **Single-Page Architecture:** A seamless, narrative-driven user journey on a single page.
-   **High-Performance:** Built with Vite and optimized for lightning-fast load times on the Cloudflare network.
-   **Component-Based:** Developed with React and shadcn/ui for a robust and maintainable codebase.

## 🚀 Technology Stack

-   **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Deployment:** [Cloudflare Pages & Workers](https://workers.cloudflare.com/)
-   **Package Manager:** [Bun](https://bun.sh/)

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:
-   [Git](https://git-scm.com/)
-   [Bun](https://bun.sh/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/ayura-sensual-landing.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd ayura-sensual-landing
    ```
3.  **Install dependencies:**
    ```sh
    bun install
    ```

## 💻 Development

To start the local development server, run the following command:

```sh
bun run dev
```

This will start the Vite development server, typically on `http://localhost:3000`. The page will automatically reload as you make changes to the source files.

## ☁️ Deployment

This project is optimized for deployment on the Cloudflare network.

1.  **Build the application for production:**
    ```sh
    bun run build
    ```
2.  **Deploy to Cloudflare:**
    Make sure you have the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and configured. Then, run the deployment script:
    ```sh
    bun run deploy
    ```

Alternatively, you can deploy directly from your GitHub repository using the button below.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Jaythatskywalker/SensualFeelingOil)

## 📂 Project Structure

The codebase is organized as follows:

```
ayura-sensual-landing/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (including shadcn/ui)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components (HomePage.tsx)
│   ├── index.css        # Global styles and Tailwind directives
│   └── main.tsx         # Main application entry point
├── worker/              # Cloudflare Worker server-side logic
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Customization

The visual theme can be easily customized:

-   **Colors:** The primary color palette is defined with CSS variables in `src/index.css` under the `:root` and `.dark` selectors.
-   **Fonts & Spacing:** Extended theme values like fonts, spacing, and animations are configured in `tailwind.config.js`.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.