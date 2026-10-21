# Vercel production deployment — 4D Labs Academy

## Important
This repository cannot supply private credentials to Vercel. GitHub ignores `.env.local` by design. Deleting and reimporting the Vercel project does not automatically solve Auth.js configuration errors or bypass Vercel account 2FA.

## Before deployment
1. Run `npm run check:bank`, `npx tsc --noEmit`, `npm run build`.
2. Import this GitHub repository into Vercel with Next.js preset and root `./`.
3. In Vercel project **Environment Variables**, add the keys in `.env.production.example` for **Production**. Copy AUTH_SECRET, AUTH_DISCORD_ID and AUTH_DISCORD_SECRET from your existing local `.env.local`. Do not paste placeholder values. Set secret values to Secret type.
4. Discord Developer Portal > Application > OAuth2 > Redirects: add `https://4dlabs-academy.vercel.app/api/auth/callback/discord` and Save Changes. Keep localhost callback for local tests.
5. Deploy or redeploy after changing Vercel variables. Test Discord login in an incognito window.
6. If login fails, inspect Vercel Runtime Logs for `/api/auth` and redact any tokens or secrets before sharing.

## Vercel 2FA
A prompt saying `Enter the 6-digit code from your authenticator app` requires the user's Vercel authenticator or recovery code, not an email code. Never share these codes.

## Public beta caveat
Quiz scores and certificate IDs are browser-generated and not server verified. This is an independent community learning project, not an official 4D Labs credential.
