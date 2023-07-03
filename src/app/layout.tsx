import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Kseniia Zaitseva',
    description: 'Kseniia Zaitseva Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gradient-to-r from-purple-500 to-pink-500`}>{children}</body>
        </html>
    );
}
