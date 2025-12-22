# Woffy AI - Netlify Deployment Setup

## Environment Variables

You need to set the `GEMINI_API_KEY` in Netlify:

### For Production (Netlify Dashboard):
1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add: `GEMINI_API_KEY` = `your-gemini-api-key`
4. Redeploy the site

### For Local Development:
Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your-gemini-api-key-here
```

## Local Testing

1. **Install Netlify CLI** (if not installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Run local dev server with Netlify functions**:
   ```bash
   netlify dev
   ```
   
   This will:
   - Start Vite dev server
   - Run Netlify functions locally at `http://localhost:8888/.netlify/functions/`
   - Auto-load environment variables from `.env`

3. **Open the app**:
   - Navigate to `http://localhost:8888`
   - Go to Chat page and test Woffy

## Deployment

```bash
# Build and deploy to Netlify
npm run build
netlify deploy --prod
```

Or simply push to your Git repository if you have auto-deploy enabled.

## Function Endpoints

- **Local**: `http://localhost:8888/.netlify/functions/chatWithWoffy`
- **Production**: `https://your-site.netlify.app/.netlify/functions/chatWithWoffy`

## Notes

- The function uses `gemini-2.0-flash-exp` model (faster and more cost-effective)
- CORS is enabled for all origins
- Chat history is passed to maintain conversation context

