import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/navbar.jsx';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="bg-gray-50 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
