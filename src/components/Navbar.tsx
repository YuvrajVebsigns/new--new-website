// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
// import { useRef, useState } from 'react';
// import { usePathname } from 'next/navigation';

// export default function Navbar() {
//   const pathname = usePathname();

//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);

//   const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const isServicesPage =
//     pathname === '/survey-study' ||
//     pathname === '/video' ||
//     pathname === '/bespoke-events' ||
//     pathname === '/dialoges';

//   const openServices = () => {
//     if (servicesCloseTimer.current) {
//       clearTimeout(servicesCloseTimer.current);
//       servicesCloseTimer.current = null;
//     }

//     setServicesOpen(true);
//   };

//   const closeServices = () => {
//     if (servicesCloseTimer.current) {
//       clearTimeout(servicesCloseTimer.current);
//     }

//     servicesCloseTimer.current = setTimeout(() => {
//       setServicesOpen(false);
//       servicesCloseTimer.current = null;
//     }, 140);
//   };

//   const closeMobileMenu = () => {
//     setMobileOpen(false);
//     setServicesOpen(false);
//   };

//   return (
//     <header className={`navbar ${mobileOpen ? 'mobile-open' : ''}`}>
//       <div className="navbar-container">
//         <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
//           <Image src="/assets/logo/logo.png" alt="CORE Media" width={150} height={100} priority />
//         </Link>

//         <nav className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
//           <Link
//             href="/"
//             className={`nav-link ${pathname === '/' ? 'active' : ''}`}
//             onClick={closeMobileMenu}
//           >
//             Home
//           </Link>

//           <Link
//             href="/about-us"
//             className={`nav-link ${pathname === '/about-us' ? 'active' : ''}`}
//             onClick={closeMobileMenu}
//           >
//             About Us
//           </Link>

//           <div
//             className={`nav-dropdown ${servicesOpen ? 'open' : ''}`}
//             onMouseEnter={openServices}
//             onMouseLeave={closeServices}
//           >
//             <button
//               type="button"
//               className={`nav-link ${isServicesPage ? 'active' : ''}`}
//               aria-expanded={servicesOpen}
//               onClick={() => setServicesOpen((s) => !s)}
//             >
//               Services
//               <ChevronDown
//                 size={16}
//                 style={{
//                   transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
//                   transition: '0.3s ease',
//                 }}
//               />
//             </button>

//             <div className="mega-panel" onMouseEnter={openServices} onMouseLeave={closeServices}>
//               <div className="mega-column">
//                 <ul>
//                   <li>
//                     <Link href="/survey-study" className="mega-item" onClick={closeMobileMenu}>
//                       <span className="mega-icon" aria-hidden />
//                       <span>Survey / Study</span>
//                     </Link>
//                   </li>

//                   <li>
//                     <Link href="/video" className="mega-item" onClick={closeMobileMenu}>
//                       <span className="mega-icon" aria-hidden />
//                       <span>Videos</span>
//                     </Link>
//                   </li>

//                   <li>
//                     <Link
//                       href="https://ciodialogues.com/index.php/category/events/bespoke/"
//                       className="mega-item"
//                       onClick={closeMobileMenu}
//                     >
//                       <span className="mega-icon" aria-hidden />
//                       <span>Bespoke Events</span>
//                     </Link>
//                   </li>

//                   <li>
//                     <Link href="/digital-marketing" className="mega-item" onClick={closeMobileMenu}>
//                       <span className="mega-icon" aria-hidden />
//                       <span>Digital Marketing</span>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <Link
//             href="/portfolio"
//             className={`nav-link ${pathname === '/portfolio' ? 'active' : ''}`}
//             onClick={closeMobileMenu}
//           >
//             Portfolio
//           </Link>

//           <Link
//             href="/blog"
//             className={`nav-link ${pathname === '/blog' ? 'active' : ''}`}
//             onClick={closeMobileMenu}
//           >
//             Blogs
//           </Link>

//           <Link
//             href="/events"
//             className={`nav-link ${pathname === '/events' ? 'active' : ''}`}
//             onClick={closeMobileMenu}
//           >
//             Event
//           </Link>
//           {/*
//           <Link
//             href="/videos"
//             className={`nav-link ${pathname === '/videos' ? 'active' : ''}`}
//             onClick={closeMobileMenu}
//           >
//             Video
//           </Link> */}

//           <Link href="/contact" className="nav-link" onClick={closeMobileMenu}>
//             Contact
//           </Link>
//         </nav>

//         <div className="navbar-actions">
//           <Link href="/#contact-section" className="talk-btn" onClick={closeMobileMenu}>
//             <span>Let’s Talk</span>

//             <div className="talk-btn-icon">
//               <ArrowUpRight size={18} />
//             </div>
//           </Link>

//           <button
//             className={`menu-btn ${mobileOpen ? 'open' : ''}`}
//             aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
//             aria-expanded={mobileOpen}
//             onClick={() => {
//               setMobileOpen((s) => !s);
//             }}
//           >
//             {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`navbar ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
          <Image
            src="/assets/vishwasai/Vlogo-light.png"
            alt="CORE Media"
            width={150}
            height={100}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
          <Link
            href="/"
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className={`nav-link ${pathname === '/about-us' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            About Us
          </Link>

          {/* Services - Normal Page Link */}
          <Link
            href="/services"
            className={`nav-link ${pathname === '/services' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Services
          </Link>

          <Link
            href="/portfolio"
            className={`nav-link ${pathname === '/portfolio' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Portfolio
          </Link>

          <Link
            href="/blog"
            className={`nav-link ${pathname === '/blog' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Blogs
          </Link>

          <Link
            href="/videos"
            className={`nav-link ${pathname === '/videos' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Videos
          </Link>

          <Link
            href="/events"
            className={`nav-link ${pathname === '/events' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Event
          </Link>

          {/* <Link
            href="/contact"
            className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link> */}
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <Link href="/#contact-section" className="talk-btn" onClick={closeMobileMenu}>
            <span>Enquire Now</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`menu-btn ${mobileOpen ? 'open' : ''}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
          >
            {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </div>
    </header>
  );
}
