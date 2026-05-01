import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Skinthesis Cosmetics — Rethinking Aging, From the Inside Out',
  description:
    'Patent-backed collagen technology meets effortless daily skincare. One pump. Real results.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
