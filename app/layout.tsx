import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
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
      <body>
        <Header />
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
