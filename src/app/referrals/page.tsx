import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physician Referrals | Precision Heart Rhythm",
  description: "Referral information for physicians sending patients to Dr. Patel at Precision Heart Rhythm.",
};

export default function ReferralsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Physician Referrals</h1>
          <p className={styles.subtitle}>Partnering with you to provide expert electrophysiology care for your patients.</p>
        </div>
      </header>

      <div className="container">
        <div className={styles.grid}>
          <div className={styles.infoCard}>
            <h2>Urgent Referrals</h2>
            <p>
              For urgent consultations or hospital transfers, please contact our office directly via the dedicated physician line.
            </p>
            <div className={styles.contactBlock}>
              <p className={styles.label}>Physician Line:</p>
              <a href="tel:4197543278" className={styles.phoneLink}>(419) 754-3278</a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h2>Standard Referrals</h2>
            <p>
              Please fax the patient&apos;s demographics, insurance information, and recent relevant records (monitor reports, EKGs, echo reports) to:
            </p>
            <div className={styles.contactBlock}>
              <p className={styles.label}>Referral Fax:</p>
              <span className={styles.phoneLink}>(844) 812-0035</span>
            </div>
          </div>
        </div>

        <section className={styles.processSection}>
          <h2>Why Refer to Precision Heart Rhythm?</h2>
          <ul className={styles.benefitsList}>
            <li><strong>Timely Access:</strong> We prioritize quick scheduling for new patients.</li>
            <li><strong>Comprehensive Communication:</strong> You will receive prompt updates and reports after every visit and procedure.</li>
            <li><strong>Collaborative Care:</strong> We work as an extension of your practice, ensuring seamless continuity of care.</li>
          </ul>
        </section>

        <section className={styles.resourcesSection}>
          <h2>Referral Resources</h2>
          <p>Download our referral form (available in printable or fillable format).</p>
          <div className={styles.buttonGroup}>
            <a href="/documents/Referral_Form_Printable.pdf" download className={styles.resourceBtn}>
              <Button variant="secondary">Referral Form (Printable PDF)</Button>
            </a>
            <a href="/documents/Referral_Form_Fillable.pdf" download className={styles.resourceBtn}>
              <Button variant="secondary">Referral Form (Fillable PDF)</Button>
            </a>
          </div>
        </section>

        <section className={styles.patientSection}>
          <h2>For Patients</h2>
          <p>New patient forms and resources to prepare for your appointment.</p>
          <div className={styles.buttonGroup}>
            <a href="/documents/New_Patient_Intake_Forms.pdf" download className={styles.resourceBtn}>
              <Button variant="secondary">New Patient Intake Forms (PDF)</Button>
            </a>
            <a href="/documents/New_Patient_Review_of_Systems.docx" download className={styles.resourceBtn}>
              <Button variant="secondary">Cardiac Review of Systems (Word)</Button>
            </a>
            <a 
              href="https://phr1.pehrportal.com/scheduling.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.resourceBtn}
            >
              <Button variant="primary">Schedule Appointment Online</Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
