import Button from "@/components/ui/Button";
import styles from "../../conditions/atrial-fibrillation/page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Implantable Loop Recorder | Precision Heart Rhythm",
  description: "Long-term cardiac monitoring for diagnosing unexplained symptoms like fainting or palpitations.",
};

export default function LoopRecorderPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Implantable Loop Recorder (ILR)</h1>
          <p className={styles.subtitle}>Continuous, long-term monitoring for elusive heart rhythm issues.</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <h2>Watching Over Your Heart 24/7</h2>
              <p>
                Heart rhythm problems can be unpredictable, often occurring only once every few weeks or months. 
                Traditional holter monitors worn for 24-48 hours may miss these fleeting events. 
                An <strong>Implantable Loop Recorder (ILR)</strong> acts as a constant observer, inserted just beneath the skin of the chest to record your heart's electrical activity for up to 3 years.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Why Would I Need One?</h2>
              <p>Dr. Patel may recommend an ILR if you experience:</p>
              <ul className={styles.list}>
                <li><strong>Unexplained Fainting (Syncope):</strong> To determine if a heart pause or rapid rate is the cause.</li>
                <li><strong>Cryptogenic Stroke:</strong> To check for silent Atrial Fibrillation (AFib) that may have caused a stroke.</li>
                <li><strong>Palpitations:</strong> When external monitors have failed to capture the symptom.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>The Procedure</h2>
              <p>
                Insertion is incredibly simple and takes only a few minutes. It is often done in an outpatient setting or even the office.
                A tiny incision (less than 1 cm) is made, the device is slipped under the skin, and the incision is closed with medical glue or a single stitch. 
                There is virtually no recovery time.
              </p>
            </section>
            
             <section className={styles.section}>
              <h2>Smart Connection</h2>
              <p>
                Modern ILRs connect wirelessly to a bedside monitor or even your smartphone app, sending data directly to Dr. Patel's clinic 
                if an abnormal rhythm is detected, often before you even feel a symptom.
              </p>
            </section>

            <div className={styles.ctaBox}>
              <h3>Find Answers Today</h3>
              <p>Don't live with uncertainty. Get long-term peace of mind.</p>
              <Button href="/contact" variant="primary">Request Consultation</Button>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>Key Features</h3>
              <ul>
                 <li><strong>Long Life:</strong> Monitor for 3+ years</li>
                 <li><strong>Discreet:</strong> Barely visible under the skin</li>
                 <li><strong>Automatic:</strong> Detects arrhythmias on its own</li>
                 <li><strong>Patient-Activated:</strong> You can mark symptoms when you feel them</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
