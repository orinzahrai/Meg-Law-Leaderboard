export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Case Manager Leaderboard</title>
      </head>
      <body>{children}</body>
    </html>
  );
}