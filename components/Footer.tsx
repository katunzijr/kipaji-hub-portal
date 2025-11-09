import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    platform: [
      { name: 'Artists', href: '/artists' },
      { name: 'Learning', href: '/learning' },
      { name: 'Events', href: '/events' },
      { name: 'Marketplace', href: '/marketplace' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Help Center', href: '/help' },
      { name: 'Success Stories', href: '/stories' },
      { name: 'Community Guidelines', href: '/guidelines' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-brand-navy text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/assets/images/logo/logo-text-holizontal.png"
                alt="Kipaji Hub Logo"
                width={200}
                height={96}
                className="h-24 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm mb-6 max-w-md">
              Tanzania`s premier platform connecting music artists, educators, promoters, and investors.
              Build your music career, learn new skills, and discover opportunities.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-secondary-500" />
                <a href="mailto:info@kipajihub.com" className="hover:text-white">
                  info@kipajihub.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-secondary-500" />
                <span>+255 712 390 070</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-secondary-500" />
                <span>Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Legal */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="ml-4 text-gray-600">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Kipaji Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
