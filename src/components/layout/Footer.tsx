import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = 2035; // Fixed as per requirements, or use new Date().getFullYear() if meant to be dynamic but request said "is copyright 2035"

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Practice Info */}
          <div className={styles.column}>
            <h3>Precision Heart Rhythm</h3>
            <p>7640 W Sylvania Ave - Suite G<br />Sylvania, OH 43560</p>
            <p>Phone: <a href="tel:4197543278" style={{ color: "inherit", textDecoration: "none" }}>419-75-HEART</a></p>
            <p>Fax: (844) 812-0035</p>
            <p><a href="mailto:info@precisionheartrhythm.com">info@precisionheartrhythm.com</a></p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h3>Quick Links</h3>
            <Link href="/about">About Dr. Patel</Link>
            <Link href="/services">Our Services</Link>
            <Link href="/patient-resources">Patient Resources</Link>
            <Link href="/referrals">For Physicians</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h3>Services</h3>
            <Link href="/conditions/atrial-fibrillation">Atrial Fibrillation</Link>
            <Link href="/procedures/cardiac-ablation">Cardiac Ablation</Link>
            <Link href="/device-clinic">Pacemaker & ICDs</Link>
            <Link href="/procedures/watchman">Watchman Procedure</Link>
            <Link href="/procedures/leadless-pacemaker">Leadless Pacemaker</Link>
            <Link href="/procedures/loop-recorder">Loop Recorder</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Precision Heart Rhythm. All rights reserved.</p>
          <p>
            <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Use</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
