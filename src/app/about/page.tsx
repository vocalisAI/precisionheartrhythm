import Image from "next/image";
import Button from "@/components/ui/Button";
import ReviewsCarousel from "@/components/ui/ReviewsCarousel";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Jaydutt Patel | Precision Heart Rhythm",
  description: "Meet Dr. Jaydutt Patel, a leading expert in cardiac electrophysiology committed to patient-centered care.",
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Meet Dr. Patel</h1>
      <div className={styles.pageTitleUnderline} />
      
      <section className={styles.profileSection}>
        <div className="container">
          <div className={styles.profileGrid}>
            <div className={styles.imageWrapper}>
               <Image 
                  src="/images/jaydutt-patel.webp"
                  alt="Dr. Jaydutt Patel"
                  width={400}
                  height={500}
                  className={styles.profileImage}
               />
               <div className={styles.statsCard}>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>4.8</span>
                    <span className={styles.statLabel}>Patient Rating</span>
                    <span className={styles.statSub}>(160+ Reviews)</span>
                  </div>
                  <div className={styles.statDivider} />
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>10+</span>
                    <span className={styles.statLabel}>Years Experience</span>
                  </div>
               </div>
            </div>
            
            <div className={styles.verticalDivider} />
            
            <div className={styles.bioContent}>
              <h2 className={styles.heading}>A Patient-Centered Approach</h2>
              
              <div className={styles.bioBlock}>
                <h3>Care Philosophy</h3>
                <p className={styles.text}>
                  Dr. Patel believes that when he is with a patient, they are the center of his universe. 
                  His first duty is to evaluate a patient thoroughly. Second, to assess and provide a plan based on science and data. 
                  And third, to provide recommendations with clarity, empathy, and compassion.
                </p>
              </div>

              <div className={styles.bioBlock}>
                <h3>About Dr. Patel</h3>
                <p className={styles.text}>
                  Jaydutt Patel, MD, is a specialist in cardiac electrophysiology, treating heart conditions that cause arrhythmias 
                  such as atrial fibrillation, and managing pacemakers and defibrillators.
                </p>
                <p className={styles.text}>
                  Dr. Patel relocated to the Toledo, Ohio area with his wife and three children after practicing in Pennsylvania for 10 years. 
                  Outside of work, he enjoys quality time with his family, reading non-fiction, and practicing his religion.
                </p>
              </div>
              
              <h3 className={styles.subheading}>Specialties & Procedures</h3>
              <ul className={styles.qualificationsList}>
                <li><strong>Conditions:</strong> Atrial fibrillation, Atrial flutter, SVT, Ventricular tachycardia, CHF.</li>
                <li><strong>Procedures:</strong> Catheter ablation, Implantable defibrillators & pacemakers, Lead extraction, Watchman.</li>
                <li><strong>Languages:</strong> English, Hindi, Gujarati.</li>
              </ul>
              
              <div style={{ marginTop: "2rem" }}>
                <Button href="/contact" variant="primary">Schedule a Consultation</Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
