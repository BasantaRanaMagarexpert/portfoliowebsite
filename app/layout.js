import './globals.css';

export const metadata = {
  title: 'Basanta Rana Magar — Developer Portfolio',
  description: 'IT Student & Python Developer. Building clean, functional digital experiences.',
  keywords: ['Basanta Rana Magar', 'developer', 'portfolio', 'Python', 'IT student', 'Nepal'],
  authors: [{ name: 'Basanta Rana Magar' }],
  openGraph: {
    title: 'Basanta Rana Magar — Developer Portfolio',
    description: 'IT Student & Python Developer building cool things.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
