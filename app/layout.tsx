import { LanguageProvider } from './context/LanguageProvider';
import './globals.css';
import TranslationProvider from './context/TranslationProvider';
import SessionProvider from './context/SessionProvider';
import { CruiseProvider } from './context/cruiseContext';
import BurgerMenuWrapper from './components/BurgerMenuWrapper';

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
    <html lang="en">
      <body>
        <SessionProvider>
          <CruiseProvider>
            <TranslationProvider>
              <LanguageProvider>
                <BurgerMenuWrapper>{children}</BurgerMenuWrapper>
              </LanguageProvider>
            </TranslationProvider>
          </CruiseProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
