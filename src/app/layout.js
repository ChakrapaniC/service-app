import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/navbar.jsx';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-white via-blue-50 to-blue-100 min-h-screen`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}