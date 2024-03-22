import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['100', '200', '400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "WealthUp.me",
  description: "Check your financial health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
