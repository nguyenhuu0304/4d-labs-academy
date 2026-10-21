"use client";
import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";

function DiscordLoginInner() {
  const { data: session, status } = useSession();
  if (status === "loading") return <span className="discordStatus">Loading Discord…</span>;
  if (!session?.user) return <button type="button" className="discordButton" onClick={() => signIn("discord", { callbackUrl: "/" })}>Connect Discord</button>;
  return <div className="discordProfile">
    {session.user.image ? <img className="discordAvatar" src={session.user.image} alt="Discord avatar" referrerPolicy="no-referrer" /> : null}
    <span className="discordIdentity"><strong>{session.user.name || "Discord user"}</strong><small>Connected</small></span>
    <button type="button" className="discordSignout" onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
  </div>;
}
export default function DiscordLogin() {
  return <SessionProvider><DiscordLoginInner /></SessionProvider>;
}
