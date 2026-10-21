# 4D Labs Academy — Public Beta preparation

Community-built independent education project; not an official 4D Labs product.

## Changes from v0.3.4
- Mock quiz scoring disabled unconditionally (including npm run dev).
- Module completion based on all 4 lesson topics being marked read, not on quiz passing.
- Review answers shows a checkmark next to the correct answer; failed answers are indicated in quiz feedback.
- .gitignore excludes local secrets, builds, node_modules, and deployment metadata.

## Local checks
```powershell
npm install
npm run check:bank
npx tsc --noEmit
npm run build
npm run start
```

## GitHub / Vercel
1. Create a private or public empty GitHub repository named `4d-labs-academy`.
2. Push this source, excluding `.env.local`.
3. Import the repository into Vercel (Next.js preset).
4. Set `AUTH_SECRET`, `AUTH_DISCORD_ID`, `AUTH_DISCORD_SECRET`, and `AUTH_URL=https://YOUR-DOMAIN.vercel.app` in Vercel environment settings.
5. Add `https://YOUR-DOMAIN.vercel.app/api/auth/callback/discord` to Discord Developer Portal OAuth2 redirects.
6. Redeploy and test login, logout, lessons, pass/fail quiz, certificate PNG and X share.

## Limitations
- Quiz scoring and certificate IDs are browser-side; they are not server-verified credentials.
- Reading progress is localStorage only and does not sync to Discord accounts.
- No leaderboard or database yet.
- Production deploy should be treated as an early public beta, not a tamper-proof certification service.
