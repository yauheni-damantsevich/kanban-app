import "./globals.css";

export const metadata = {
  title: "Kanban App",
  description: "Kanban App Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
