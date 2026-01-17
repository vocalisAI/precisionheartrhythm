import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Resources | Precision Heart Rhythm",
  description: "Patient forms, educational resources, and appointment information for Precision Heart Rhythm.",
};

export default function PatientResourcesPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Patient Resources</h1>
          <p className={styles.subtitle}>Forms, educational materials, and appointment scheduling information.</p>
        </div>
      </header>

      <div className="container">
        {/* Schedule Appointment Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2>Schedule Your Appointment Online</h2>
            <p>Book your appointment quickly and conveniently through our online scheduling portal.</p>
            <a 
              href="https://phr1.pehrportal.com/scheduling.html" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="primary">Schedule Appointment</Button>
            </a>
          </div>
        </section>

        {/* Patient Forms Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>New Patient Forms</h2>
          <p className={styles.sectionDesc}>
            Please complete these forms before your first visit to help us prepare for your appointment.
          </p>
          <div className={styles.cardsGrid}>
            <div className={styles.formCard}>
              <div className={styles.formIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3>New Patient Intake Forms</h3>
              <p>Complete registration package for new patients.</p>
              <div className={styles.formDetails}>
                <h4>This packet includes:</h4>
                <ul>
                  <li>Patient demographics &amp; contact info</li>
                  <li>Insurance information</li>
                  <li>Medical history questionnaire</li>
                  <li>Current medications list</li>
                  <li>HIPAA authorization forms</li>
                </ul>
              </div>
              <a href="/documents/New_Patient_Intake_Forms.pdf" download className={styles.downloadLink}>
                <Button variant="secondary">Download Intake Forms (PDF)</Button>
              </a>
            </div>

            <div className={styles.formCard}>
              <div className={styles.formIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3>Cardiac Review of Systems</h3>
              <p>A checklist of your current heart-related symptoms. This helps Dr. Patel understand your concerns and prepare for a focused, efficient consultation.</p>
              <a href="/documents/New_Patient_Review_of_Systems.docx" download className={styles.downloadLink}>
                <Button variant="secondary">Download ROS Form (Word)</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Educational Resources Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Educational Resources</h2>
          <p className={styles.sectionDesc}>
            Learn more about heart rhythm conditions and treatments from trusted sources.
          </p>
          <div className={styles.cardsGrid}>
            <div className={styles.resourceCard}>
              <div className={styles.resourceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3>UpBeat - Heart Rhythm Society</h3>
              <p>Patient-focused education on arrhythmias, treatments, and heart health from the Heart Rhythm Society.</p>
              <a 
                href="https://www.upbeat.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                <Button variant="primary">Visit UpBeat.org →</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <h2>Need Assistance?</h2>
          <p>If you have questions about your forms or appointment, please contact our office.</p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <strong>Phone:</strong>
              <a href="tel:4197543278">(419) 754-3278</a>
            </div>
            <div className={styles.contactItem}>
              <strong>Email:</strong>
              <a href="mailto:info@precisionheartrhythm.com">info@precisionheartrhythm.com</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
