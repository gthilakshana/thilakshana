import './globals.css';
import CursorAndBackground from '../components/CursorAndBackground';

export const metadata = {
  title: 'Thilakshana | Portfolio',
  description: 'Professional Portfolio of Thilakshana',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <div className="relative min-h-screen">
          <CursorAndBackground />
          {children}
        </div>
      </body>
    </html>
  );
}
