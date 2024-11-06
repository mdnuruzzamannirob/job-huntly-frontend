import type { Metadata } from 'next';
import '@/styles/globals.css';

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
      <body className="text-neutrals-700 dark:text-neutrals-100">
        {children}
      </body>
    </html>
  );
}
