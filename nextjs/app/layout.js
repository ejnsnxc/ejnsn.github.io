import './globals.css';

export const metadata = {
  title: 'NextJS Homework',
  description: 'Counters, a project paragraph, and a store search',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
