# Discord Login — 4D Labs Academy v0.2.0

This version adds real Discord OAuth2 login with Auth.js v5. It does **not** yet store quiz progress in a shared database. The existing local quiz/certificate behavior remains unchanged. **Do not treat the existing quiz score as server-verified.**

## Setup on Windows

1. In Discord Developer Portal → your application → OAuth2 → Redirects, save exactly:
   `http://localhost:3000/api/auth/callback/discord`
2. Copy `.env.example` to `.env.local` and fill in `AUTH_SECRET`, `AUTH_DISCORD_ID`, and `AUTH_DISCORD_SECRET`. Never share the secrets.
3. From the project folder run `npm install`, then `npm run dev`.
4. Open `http://localhost:3000`, click **Connect Discord**, authorize, and check the avatar and username.
5. Test refresh, sign out, and sign in again.

Generate AUTH_SECRET in PowerShell:
```
$bytes = New-Object byte[] 32
[System.Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
[Convert]::ToBase64String($bytes)
```

If Discord reports `redirect_uri mismatch`, confirm localhost vs 127.0.0.1, port 3000, exact callback path, and Save Changes.
If you see `Configuration`, confirm all environment values are present and restart `npm run dev`.
Do not use the sign-in flow as a substitute for server-side scoring, persistent accounts, or an authenticated leaderboard.
