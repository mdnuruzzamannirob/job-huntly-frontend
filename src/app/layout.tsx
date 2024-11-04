import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import '@/styles/globals.css';

const RHD = Red_Hat_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Job Huntly - A job portal website',
  description: 'A job portal website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${RHD.className ? RHD.className : 'font-sans'}`}
      >
        {children}
      </body>
    </html>
  );
}
