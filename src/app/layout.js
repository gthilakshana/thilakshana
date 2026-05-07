import './globals.css';
import CursorAndBackground from '../components/CursorAndBackground';

export const metadata = {
  title: {
    default: 'Gavrawa Thilakshana | Full Stack Software Engineer',
    template: '%s | Gavrawa Thilakshana'
  },
  description: 'Gavrawa Thilakshana is a Full Stack Software Engineer specializing in Next.js, MERN stack, and Cloud Operations. Explore my portfolio of innovative digital solutions.',
  keywords: ['Gavrawa Thilakshana', 'Full Stack Developer', 'Software Engineer', 'Next.js Expert', 'MERN Stack', 'React Developer', 'Web Development Sri Lanka', 'Portfolio'],
  authors: [{ name: 'Gavrawa Thilakshana' }],
  creator: 'Gavrawa Thilakshana',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thilakshana.vercel.app/',
    siteName: 'Gavrawa Thilakshana Portfolio',
    title: 'Gavrawa Thilakshana | Full Stack Software Engineer',
    description: 'Professional Portfolio of Gavrawa Thilakshana. Building high-performance digital ecosystems with Next.js and Cloud technologies.',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Gavrawa Thilakshana Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gavrawa Thilakshana | Full Stack Software Engineer',
    description: 'Full Stack Software Engineer & Cloud Operations enthusiast.',
    images: ['/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
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
