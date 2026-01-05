import Button from "@/components/ui/Button";
import styles from "../../conditions/atrial-fibrillation/page.module.css"; // Reusing styles from conditions page to ensure consistency
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cardiac Ablation | Precision Heart Rhythm",
  description: "Expert cardiac ablation procedures for treating arrhythmias.",
};

export default function AblationPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Cardiac Ablation</h1>
          <p className={styles.subtitle}>Minimally invasive treatment for restoring normal heart rhythm.</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <h2>What is Cardiac Ablation?</h2>
              <p>
                Cardiac ablation is a procedure to scar or destroy tissue in your heart that&apos;s allowing incorrect electrical signals to cause an abnormal heart rhythm. 
                Diagnostic catheters are threaded through blood vessels to your heart where they are used to map your heart&apos;s electrical signals.
              </p>
            </section>

            <section className={styles.section}>
              <h2>How it Works</h2>
              <p>There are two primary methods of ablation used:</p>
              <ul className={styles.list}>
                <li><strong>Radiofrequency Ablation:</strong> Uses heat energy to eliminate the problem area.</li>
                <li><strong>Cryoablation:</strong> Uses extremely cold temperatures to freeze the tissue.</li>
              </ul>
              <p>Dr. Patel will recommend the best approach based on your specific condition and anatomy.</p>
            </section>

            <section className={styles.section}>
              <h2>What to Expect</h2>
              <p><strong>Before:</strong> You will receive specific instructions about fasting and medications.</p>
              <p><strong>During:</strong> The procedure is performed in a specialized electrophysiology lab. You will be sedated to ensure comfort.</p>
              <p><strong>After:</strong> Most patients go home the same day or the next morning. Recovery is generally quick, with most people returning to normal activities within a few days.</p>
            </section>

            <div className={styles.ctaBox}>
              <h3>Discuss Your Options</h3>
              <p>Find out if cardiac ablation is the right treatment for you.</p>
              <Button href="/contact" variant="primary">Request Consultation</Button>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>Treatable Conditions</h3>
              <ul>
                <li>Atrial Fibrillation (AFib)</li>
                <li>Atrial Flutter</li>
                <li>Supraventricular Tachycardia (SVT)</li>
                <li>Ventricular Tachycardia</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
