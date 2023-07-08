import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from './context/LanguageProvider';
import './globals.css';
import { Inter } from 'next/font/google';
import TranslationProvider from './components/TranslationProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Royal Caribbean',
  description: 'Royal Caribbean Clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TranslationProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
