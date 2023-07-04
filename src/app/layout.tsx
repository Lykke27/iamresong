import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Kseniia Zaitseva',
    description: 'Kseniia Zaitseva Portfolio',
    referrer: 'origin-when-cross-origin',
    keywords: ['Portfolio', 'Kseniia', 'Kseniia Zaitseva', 'Data Analyst', 'SQL', 'Python', 'Resume'],
    creator: 'Lykke',
    siteName: 'Portfolio',
    type: 'website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>{children}</body>
        </html>
    );
}
