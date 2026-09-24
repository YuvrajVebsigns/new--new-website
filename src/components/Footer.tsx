// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { Phone, MapPin } from 'lucide-react';
// // import { Send, Mail } from 'lucide-react';
// // import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
// // import { useState, useEffect } from 'react';
// // import { submitSubscribe } from '@/services/subscribes.service';

// export default function Footer() {
//   return (
//     <footer className="footer-section">
//       <div className="footer-main">
//         <div className="footer-container">
//           <div className="footer-grid">
//             <div className="footer-widget footer-brand">
//               <Link href="/" className="footer-logo">
//                 <Image
//                   src="/assets/vishwasai/Vlogo-darkk.png"
//                   alt="Vishwasai Consultancy"
//                   width={190}
//                   height={130}
//                   className="footer-logo-image"
//                 />
//               </Link>

//               <p className="footer-description">
//                 Expert consultancy for co-operative agriculture and finance
//               </p>

//               <p className="footer-since">Since 2009</p>
//             </div>

//             <div className="footer-widget">
//               <h4 className="footer-title">Quick Links</h4>

//               <ul className="footer-links">
//                 <li><Link href="/">Home</Link></li>
//                 <li><Link href="/about-us">About Us</Link></li>
//                 <li><Link href="/services">Services</Link></li>
//                 <li><Link href="/portfolio">Portfolio</Link></li>
//                 <li><Link href="/blog">Blog</Link></li>
//                 <li><Link href="/events">Events</Link></li>
//                 <li><Link href="/videos">Videos</Link></li>
//                 <li><Link href="/contact">Contact Us</Link></li>
//               </ul>
//             </div>

//             <div className="footer-widget">
//               <h4 className="footer-title">Services</h4>

//               <ul className="footer-links">
//                 <li>Multistate Credit Cooperative Societies</li>
//                 <li>NBFC Consultancy</li>
//                 <li>FPO Consultancy</li>
//                 <li>Project Funding</li>
//                 <li>Loan Funding</li>
//                 <li>Management Consulting</li>
//                 <li>Real Estate Consulting</li>
//                 <li>Business Development</li>
//                 <li>Export-Import Consulting</li>
//               </ul>
//             </div>

//             <div className="footer-widget">
//               <h4 className="footer-title">Contact</h4>

//               <div className="footer-office">
//                 <p className="footer-office-text">
//                   Platinum 9, 4th Floor, A/20, No. 52/5, Sr.No. 1, Pashan - Sus Rd, Near Audi
//                   Showroom, Baner, Pune, Maharashtra 411045
//                 </p>

//                 <a href="tel:9588686363" className="footer-office-item">
//                   <span className="footer-office-icon">
//                     <Phone size={15} />
//                   </span>
//                   <span className="footer-office-text">9588686363</span>
//                 </a>

//                 <a href="mailto:vishwasai@vishwasai.com" className="footer-office-item">
//                   <span className="footer-office-icon">
//                     <Phone size={15} />
//                   </span>
//                   <span className="footer-office-text">vishwasai@vishwasai.com</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';
// import { Send, Mail } from 'lucide-react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
// import { useState, useEffect } from 'react';
// import { submitSubscribe } from '@/services/subscribes.service';

export default function Footer() {
  // Subscribe form logic kept here for easy re-enabling — not part of the
  // current reference design, which shows a simple 4-column footer.
  //
  // const [email, setEmail] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [popupMessage, setPopupMessage] = useState<string | null>(null);
  //
  // useEffect(() => {
  //   if (!popupMessage) return;
  //   const timer = window.setTimeout(() => setPopupMessage(null), 3200);
  //   return () => window.clearTimeout(timer);
  // }, [popupMessage]);
  //
  // const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setPopupMessage(null);
  //   if (!email || !email.includes('@')) {
  //     setPopupMessage('Please enter a valid email address');
  //     return;
  //   }
  //   setIsLoading(true);
  //   try {
  //     await submitSubscribe({ email });
  //     setPopupMessage('Successfully subscribed!.');
  //     setEmail('');
  //   } catch (error: unknown) {
  //     const message =
  //       error instanceof Error ? error.message : 'Failed to subscribe. Please try again.';
  //     setPopupMessage(message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* COLUMN 1 — BRAND */}
            <div className="footer-widget footer-brand">
              <Link href="/" className="footer-logo">
                <Image
                  src="/assets/vishwasai/Vlogo-darkk.png"
                  alt="Vishwasai Consultancy"
                  width={190}
                  height={130}
                  className="footer-logo-image"
                />
              </Link>

              <p className="footer-description">
                Empowering cooperatives, enabling growth and building a stronger financial future.
              </p>
            </div>

            {/* COLUMN 2 — QUICK LINKS */}
            <div className="footer-widget">
              <h4 className="footer-title">Quick Links</h4>

              <ul className="footer-links">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/about-us">About Us</Link>
                </li>

                <li>
                  <Link href="/services">Services</Link>
                </li>

                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>

                <li>
                  <Link href="/blog">Blogs</Link>
                </li>

                <li>
                  <Link href="/videos">Videos</Link>
                </li>

                <li>
                  <Link href="/events">Event</Link>
                </li>

                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3 — OUR SERVICES */}
            <div className="footer-widget">
              <h4 className="footer-title">Our Services</h4>

              <ul className="footer-links">
                <li>
                  <span>Cooperative Societies</span>
                </li>

                <li>
                  <span>NBFC &amp; Corporate Setup</span>
                </li>

                <li>
                  <span>Agricultural Support</span>
                </li>

                <li>
                  <span>Compliance &amp; Advisory</span>
                </li>
              </ul>
            </div>

            {/* COLUMN 4 — OUR OFFICE */}
            <div className="footer-widget">
              <h4 className="footer-title">Our Office</h4>

              <div className="footer-office">
                <div className="footer-office-item">
                  <span className="footer-office-icon">
                    <MapPin size={15} />
                  </span>

                  <p className="footer-office-text">
                    Platinum 9, 4th Floor, A/20, No. 52/5, Sr.No. 1, Pashan - Sus Rd, Near Audi
                    Showroom, Baner, Pune, Maharashtra 411045
                  </p>
                </div>
                <br />
                <br />

                <a href="tel:+919588686363" className="footer-office-item">
                  <span className="footer-office-icon">
                    <Phone size={15} />
                  </span>

                  <span className="footer-office-text">+91-9588686363</span>
                </a>
              </div>

              {/* Original subscribe form + email + socials kept for reference — see commented block above */}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      {/* <div className="footer-bottom">
        <div className="footer-container footer-bottom-wrapper">
          <div className="footer-copy">
            © 2024 <Link href="/">Vishwasai Consultancy LLP</Link>. All Rights Reserved.
          </div>
        </div>
      </div> */}
    </footer>
  );
}
