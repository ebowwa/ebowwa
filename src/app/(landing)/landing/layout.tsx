// app/layout.tsx
import Navbar from '@/components/landing/layout/navbar';
import Footer from '@/components/landing/layout/footer';
//  { platform: 'LinkedIn', url: 'https://linkedin.com/example' },
//   { platform: 'Instagram', url: 'https://instagram.com/example' },
import { Layout } from '@/components/landing/layout/dom/Layout';

const navbarLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Simulation', href: '/simulation' },
  { label: 'Contact', href: '/contact' },
  { label: 'Discord', href: 'https://discord.gg/pAsQkT8u' },
];

const footerLinks = [
  { label: 'Privacy Policy', url: '/privacy' },
  { label: 'Terms of Service', url: '/terms' },
  { label: 'FAQ', url: '/faq' },
];

const socialMedia = [
  { platform: 'Twitter', url: 'https://twitter.com/Simulation_API' },
  { platform: 'Discord', url: 'https://discord.gg/pAsQkT8u' },
];

const copyright = ' 2024 SimulationAPI. All rights reserved.';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar
          logo={{ altText: 'SimulationAPI' }}
          links={navbarLinks}
        />
        <Layout>
          <main>{children}</main>
        </Layout>
        <Footer
          links={footerLinks}
          socialMedia={socialMedia}
          copyright={copyright}
        />
      </body>
    </html>
  );
}