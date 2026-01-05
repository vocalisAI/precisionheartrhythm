import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import ReviewsCarousel from "@/components/ui/ReviewsCarousel";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Heart Rhythm | Cardiac Electrophysiology in Sylvania, OH",
  description: "Expert diagnosis and treatment for atrial fibrillation, arrhythmias, and cardiac device management. Dr. Jaydutt Patel provides compassionate, patient-centered care in Northwest Ohio.",
};

export default function Home() {
  return (
    <>
      <HeroSection 
        title="Precision Heart Rhythm"
        subtitle="A Cardiac Electrophysiology Practice Specializing in Atrial Fibrillation, Arrhythmias, and Device Management in Northwest Ohio."
        primaryAction={{ label: "Schedule a Consultation", href: "/contact" }}
      />

      <div className={styles.pageContainer}>
        
        {/* Trust Pillars */}
        <section className={styles.trustSection}>
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className={styles.trustTitle}>Board Certified</h3>
              <p className={styles.trustText}>Cardiac Electrophysiology</p>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className={styles.trustTitle}>10+ Years</h3>
              <p className={styles.trustText}>Clinical Experience</p>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3 className={styles.trustTitle}>4.8 Rating</h3>
              <p className={styles.trustText}>160+ Patient Reviews</p>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <h3 className={styles.trustTitle}>Patient-Centered</h3>
              <p className={styles.trustText}>Personalized Care</p>
            </div>
          </div>
        </section>

        <div className={styles.sectionDivider} />

        {/* Meet Dr. Patel Preview */}
        <section className={styles.doctorSection}>
          <div className={styles.doctorGrid}>
            <div className={styles.doctorImageWrapper}>
              <Image 
                src="/images/jaydutt-patel.webp"
                alt="Dr. Jaydutt Patel"
                width={280}
                height={350}
                className={styles.doctorImage}
              />
            </div>
            <div className={styles.doctorContent}>
              <h2 className={styles.doctorHeading}>Meet Dr. Jaydutt Patel</h2>
              <p className={styles.doctorCredentials}>
                MD, FACC, FHRS<br />
                Cardiac Electrophysiologist
              </p>
              <p className={styles.doctorBio}>
                Dr. Patel specializes in the diagnosis and treatment of complex heart rhythm disorders. 
                With over a decade of experience in cardiac electrophysiology, he provides comprehensive care 
                for atrial fibrillation, arrhythmias, and cardiac device management.
              </p>
              <Link href="/about" className={styles.doctorLink}>
                Learn more about Dr. Patel &rarr;
              </Link>
            </div>
          </div>
        </section>

        <div className={styles.sectionDivider} />

        {/* Services */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.grid}>
            
            <Link href="/conditions/atrial-fibrillation" className={styles.card}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Atrial Fibrillation</h3>
              <p className={styles.cardText}>
                Comprehensive management including medication and catheter ablation.
              </p>
              <div className={styles.cardLink}>Learn more &rarr;</div>
            </Link>

            <Link href="/procedures/cardiac-ablation" className={styles.card}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Cardiac Ablation</h3>
              <p className={styles.cardText}>
                 Minimally invasive procedure to correct heart rhythm issues.
              </p>
              <div className={styles.cardLink}>Learn more &rarr;</div>
            </Link>

            <Link href="/device-clinic" className={styles.card}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                  <path d="M12 18h.01"/>
                  <path d="M9 6h6"/>
                  <path d="M9 10h6"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Device Clinic</h3>
              <p className={styles.cardText}>
                Monitoring and care for pacemakers, defibrillators, and loop recorders.
              </p>
              <div className={styles.cardLink}>Learn more &rarr;</div>
            </Link>

          </div>
          
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link href="/services" className={styles.textLink}>View all services</Link>
          </div>
        </section>

        <div className={styles.sectionDivider} />

        {/* What Patients Say */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Patients Say</h2>
          <ReviewsCarousel />
        </section>

      </div>

      {/* CTA Band */}
      <section className={styles.ctaBand}>
        <div className={styles.pageContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to improve your heart rhythm?</h2>
            <Link href="/contact" className={styles.btnWhite}>
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
