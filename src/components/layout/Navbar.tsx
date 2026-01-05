"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logoLink}>
             <Image 
              src="/images/simple icon logo.jpeg" 
              alt="Precision Heart Rhythm Logo" 
              width={36} 
              height={36} 
              className={styles.logoImage}
            />
            <span className={styles.logoText}>
              Precision Heart Rhythm
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.navLinks}>
            <Link href="/about">Meet Dr. Patel</Link>
            <Link href="/services">Services</Link>
            <Link href="/referrals">Referrals</Link>
            <Link href="/contact" className={styles.ctaButton}>
              Contact Us
            </Link>
            <a href="https://mychart.com" target="_blank" rel="noopener noreferrer" className={styles.portalButton}>
              Patient Portal
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className={isMobileMenuOpen ? styles.hamburgerOpen : styles.hamburger} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
           <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>Meet Dr. Patel</Link>
           <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
           <Link href="/conditions/atrial-fibrillation" onClick={() => setIsMobileMenuOpen(false)}>AFib Center</Link>
           <Link href="/device-clinic" onClick={() => setIsMobileMenuOpen(false)}>Device Clinic</Link>
           <Link href="/referrals" onClick={() => setIsMobileMenuOpen(false)}>Referring Physicians</Link>
           <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
           <a href="https://mychart.com" target="_blank" rel="noopener noreferrer" className={styles.mobilePortalLink} onClick={() => setIsMobileMenuOpen(false)}>
             Patient Portal
           </a>
        </div>
      )}
    </nav>
  );
}
