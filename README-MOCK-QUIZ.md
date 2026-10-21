# Local mock quiz 15/15

1. In `.env.local` set `NEXT_PUBLIC_MOCK_QUIZ=true`. Keep existing Discord credentials unchanged.
2. Restart `npm run dev`.
3. Answer each of the 15 questions by selecting an option. No grading is performed; any selected option counts as one point. Timer is shown as no time limit.
4. After 15 questions, result is 15/15. Download the DEMO-marked certificate and test X sharing (prefilled text explicitly discloses mock). Attach the PNG manually to the X post.
5. Turn off by removing the variable or setting `NEXT_PUBLIC_MOCK_QUIZ=false`, and restart.

Safety: the mock mode requires both `NODE_ENV=development` and the explicit variable. It does not mark modules completed, does not update a leaderboard, and does not produce an unmarked certificate. No production scoring is bypassed.
