# Vercel Web Analytics Setup Guide

This guide documents how Vercel Web Analytics is configured and integrated into the Edita project.

## Overview

Vercel Web Analytics has been enabled and integrated into this React + Vite application to track visitor analytics and page views. The `@vercel/analytics` package is used to provide seamless integration with the React application.

## Prerequisites

- A Vercel account (sign up for free at https://vercel.com/signup)
- A Vercel project (create at https://vercel.com/new)
- The Vercel CLI installed: `pnpm i vercel` (or `npm i`, `yarn i`, `bun i`)

## Current Setup

### 1. Package Installation

The `@vercel/analytics` package is already installed in this project:

```json
{
  "dependencies": {
    "@vercel/analytics": "^1.4.0"
  }
}
```

To install it in your local environment, run:

```bash
pnpm install
```

Or if using a different package manager:

```bash
npm install    # npm
yarn install   # yarn
bun install    # bun
```

### 2. Analytics Component Integration

The Analytics component is imported and integrated in `src/App.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/react";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Routes */}
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

The `<Analytics />` component is placed at the root level of the application to ensure all page views and user interactions are tracked.

### 3. Vercel Dashboard Configuration

To enable Web Analytics on the Vercel dashboard:

1. Navigate to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Click **Enable** from the dialog

> **Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.

## Deployment

To deploy your application to Vercel:

```bash
vercel deploy
```

Alternatively, for seamless deployments, connect your project's Git repository to Vercel:

1. Go to Project > Settings > Git
2. Connect your repository
3. Enable automatic deployments on main branch pushes

Once deployed, the application will automatically start tracking:
- Visitor analytics
- Page views
- Route transitions
- User interactions

## Verifying Analytics is Active

After deployment, verify that analytics is working:

1. Open your deployed application in the browser
2. Open the **Network** tab in your browser's Developer Tools
3. Visit any page on your application
4. Look for a Fetch/XHR request to `/_vercel/insights/view`

If this request appears, analytics is properly configured and actively tracking.

## Viewing Your Data

After deploying and getting some traffic:

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab

The dashboard will display:
- Visitor analytics
- Page view statistics
- Route performance
- Real-time traffic data

> **Note:** Data typically appears within a few minutes of the first deployment. Some analytics data may take up to a few hours to fully populate.

## Custom Events (Pro/Enterprise Plans)

If you're on a Pro or Enterprise Vercel plan, you can track custom events (e.g., button clicks, form submissions):

```tsx
import { track } from "@vercel/analytics";

function MyComponent() {
  const handleClick = () => {
    track("button_clicked", {
      button_name: "subscribe",
      timestamp: new Date().toISOString(),
    });
  };

  return <button onClick={handleClick}>Subscribe</button>;
}
```

## Privacy and Compliance

Vercel Web Analytics follows strict privacy and data compliance standards:

- **No personally identifiable information (PII)** is tracked
- **Privacy by default** - All data is anonymized
- **GDPR compliant** - No consent required for core analytics
- **CCPA compliant** - Respects user privacy rights
- **SOC 2 Type II certified** - Enterprise-grade security

For more details, see the [Privacy Policy documentation](https://vercel.com/docs/analytics/privacy-policy).

## Build and Development

### Development Server

To run the development server locally:

```bash
pnpm run dev
```

The development server will start at `http://localhost:5173` (or another available port).

### Production Build

To build the application for production:

```bash
pnpm run build
```

The built files will be in the `dist/` directory.

### Linting

To check code quality:

```bash
pnpm run lint
```

## Troubleshooting

### Analytics Not Appearing

1. **Check deployment**: Ensure the app is deployed to Vercel, not running locally
2. **Verify analytics is enabled**: Go to your project's Analytics tab in Vercel dashboard
3. **Check browser console**: Look for any errors related to `@vercel/analytics`
4. **Check network**: Look in the Network tab for `/_vercel/insights/` requests
5. **Clear cache**: Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

### Custom Events Not Tracked

- Ensure you're on a Pro or Enterprise plan
- Verify `track()` is imported from `@vercel/analytics`
- Check the browser console for errors
- Ensure `track()` is called on the client side only

### Missing Data

- Analytics data can take a few minutes to appear in the dashboard
- Ensure the app has received visitor traffic
- Check that the `<Analytics />` component is rendered in the app

## Additional Resources

- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics)
- [@vercel/analytics Package Documentation](https://vercel.com/docs/analytics/package)
- [Custom Events Guide](https://vercel.com/docs/analytics/custom-events)
- [Filtering Data Guide](https://vercel.com/docs/analytics/filtering)
- [Limits and Pricing](https://vercel.com/docs/analytics/limits-and-pricing)
- [Troubleshooting Guide](https://vercel.com/docs/analytics/troubleshooting)

## Next Steps

After setting up Vercel Web Analytics:

1. Deploy your application to Vercel
2. Monitor visitor analytics in the dashboard
3. Analyze page performance and user behavior
4. Use insights to optimize your application
5. Consider adding custom events to track specific user actions (Pro/Enterprise plans)

---

For questions or support, visit the [Vercel Support](https://vercel.com/support) page or check the [Vercel Community](https://github.com/vercel/next.js/discussions).
