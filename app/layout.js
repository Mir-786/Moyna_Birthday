import "./globals.css";

export const metadata = {
  title: "Happy Birthday Sweety!",
  description: "Counting the years and celebrating every memory.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-pink-200 selection:text-pink-900">
        {children}
      </body>
    </html>
  );
}
