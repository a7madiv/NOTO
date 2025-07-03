import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: 'Features', path: '/#features' },
  { name: 'Medical Forms', path: '/medical-forms' },
  { name: 'Testimonials', path: '/#testimonials' },
  { name: 'Pricing', path: '/#pricing' },
  { name: 'About', path: '/#about' }
];

export default function NavLinks() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`text-gray-300 hover:text-white transition-colors ${
            location.pathname === link.path ? 'text-white' : ''
          }`}
          onClick={(e) => {
            if (link.path.startsWith('/#') && !isHome) {
              e.preventDefault();
              window.location.href = link.path;
            }
          }}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}