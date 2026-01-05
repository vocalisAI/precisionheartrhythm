import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Device Clinic | Precision Heart Rhythm",
  description: "Comprehensive care for Pacemakers, ICDs, and Loop Recorders.",
};

export default function DeviceClinicPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Device Clinic</h1>
          <p className={styles.subtitle}>Comprehensive management of cardiac rhythm devices.</p>
        </div>
      </div>

      <div className="container">
        <section className={styles.deviceSection}>
          <div className={styles.deviceContent}>
            <h2>Pacemakers & ICDs</h2>
            <p>
              We provide full-spectrum care for patients with implanted cardiac devices. 
              From initial implantation to routine follow-up and battery management, our clinic ensures your device is functioning optimally to protect your heart.
            </p>
            <ul>
              <li><strong>Pacemakers:</strong> For slow heart rhythms (Bradycardia).</li>
              <li><strong>ICDs (Defibrillators):</strong> For life-threatening fast rhythms.</li>
              <li><strong>Loop Recorders:</strong> For long-term rhythm monitoring.</li>
            </ul>
          </div>
          <div className={styles.deviceImage}>
             {/* Placeholder for device image */}
             <div className={styles.placeholderBg}>
               <span>Device Technology</span>
             </div>
          </div>
        </section>

        <section className={styles.monitoringSection}>
          <h2>Remote Monitoring</h2>
          <p>
            Modern cardiac devices often support remote monitoring, allowing our team to check your device status and heart rhythm from your home.
            This reduces the need for frequent in-office visits and allows for earlier detection of potential issues.
          </p>
          <div className={styles.monitoringGrid}>
            <div className={styles.monitoringCard}>
              <h3>Convenient</h3>
              <p>Transmissions happen automatically while you sleep.</p>
            </div>
            <div className={styles.monitoringCard}>
              <h3>Secure</h3>
              <p>Your data is transmitted securely to our clinic.</p>
            </div>
            <div className={styles.monitoringCard}>
              <h3>Proactive</h3>
              <p>Alerts us to changes in your condition sooner.</p>
            </div>
          </div>
        </section>

        <div className={styles.ctaWrapper}>
          <Button href="/contact" variant="primary">Contact Device Clinic</Button>
        </div>
      </div>
    </div>
  );
}
