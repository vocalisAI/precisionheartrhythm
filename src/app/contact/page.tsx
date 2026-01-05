import LocationMap from "@/components/ui/LocationMap";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Precision Heart Rhythm",
  description: "Contact information, location, and appointment requests for Precision Heart Rhythm in Sylvania, OH.",
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>Reach out to schedule an appointment or ask a question.</p>
        </div>
      </header>

      <div className="container">
        <div className={styles.grid}>
          {/* Left Column - Location */}
          <div className={styles.card}>
            <h2 className={styles.cardHeading}>Office Location</h2>
            <div className={styles.cardDivider} />
            <address className={styles.address}>
              <p><strong>Precision Heart Rhythm</strong></p>
              <p>7640 W Sylvania Ave - Suite G</p>
              <p>Sylvania, OH 43560</p>
            </address>
            <LocationMap />
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=7640+W+Sylvania+Ave+Suite+G,+Sylvania,+OH+43560" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.directionsBtn}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
              Get Directions
            </a>
          </div>

          {/* Right Column - Contact & Schedule */}
          <div className={styles.card}>
            <h2 className={styles.cardHeading}>Schedule an Appointment</h2>
            <div className={styles.cardDivider} />

            <h3 className={styles.subHeading}>Contact Details</h3>
            <div className={styles.detailRow}>
              <strong>Phone:</strong> <a href="tel:4197543278">(419) 754-3278</a>
            </div>
            <div className={styles.detailRow}>
              <strong>Fax:</strong> <span>(844) 812-0035</span>
            </div>
            <div className={styles.detailRow}>
              <strong>Email:</strong> <a href="mailto:info@precisionheartrhythm.com">info@precisionheartrhythm.com</a>
            </div>

            <div className={styles.cardDivider} />

            <h3 className={styles.subHeading}>Office Hours</h3>
            <ul className={styles.hoursList}>
              <li><span>Monday - Friday:</span> 8:00 AM - 5:00 PM</li>
              <li><span>Saturday - Sunday:</span> Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
