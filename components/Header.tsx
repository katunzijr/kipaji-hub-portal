'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Artists', href: '/artists' },
    { name: 'Learning', href: '/learning' },
    { name: 'Events', href: '/events' },
    { name: 'Promoters & Investors', href: '/promoters-investors' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Affiliates', href: '/affiliates' },
  ];

  return (
    <header className="bg-primary shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-2">
          <div className="flex items-center animate-fade-in">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/logo/logo-text-holizontal.png"
                alt="Kipaji Hub Logo"
                width={180}
                height={40}
                className="h-18 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6 animate-fade-in animate-delay-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-100 hover:text-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-4 animate-fade-in animate-delay-200">
            <button type="button" aria-label="Search" className="p-2 text-gray-100 hover:text-secondary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/login"
              className="text-sm font-medium text-gray-100 hover:text-secondary transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-primary hover:bg-secondary-600 transition-colors"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden animate-fade-in animate-delay-100">
            <button
              type="button"
              className="text-white hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-1 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-white hover:bg-secondary hover:text-primary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 space-y-2 px-3">
              <Link
                href="/login"
                className="block text-center px-4 py-2 text-sm font-medium text-white border-2 border-secondary rounded-md hover:bg-secondary hover:text-primary transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="block text-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-primary hover:bg-secondary-600 transition-colors"
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
