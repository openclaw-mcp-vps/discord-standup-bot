import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Standup Bot — Automated Async Standups for Teams",
  description: "Automatically DM team members for standup responses and post formatted summaries to your Discord channels. Built for remote teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8786b428-d2bd-4221-bd8b-c7168dce68f1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
