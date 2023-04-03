import Header from "./components/header/header";
import SelectedCards from "./components/selected-cards/selected-cards";
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
        <SelectedCards />
      </body>
    </html>
  );
}
