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
              <p>Dr. Patel utilizes the latest, most advanced technologies including:</p>
              <ul className={styles.list}>
                <li><strong>Radiofrequency Ablation:</strong> Uses heat energy to eliminate the problem area.</li>
                <li><strong>Pulsed Field Ablation (PFA):</strong> A revolutionary technology that uses short-duration electrical pulses to selectively target heart tissue without excess heat or cold, maximizing safety.</li>
                <li><strong>Cryoablation:</strong> Uses extremely cold temperatures to freeze the tissue.</li>
              </ul>
              <p>Dr. Patel will recommend the best approach based on your specific condition and anatomy.</p>
            </section>

            <section className={styles.section}>
              <h2>See It In Action</h2>
              <div className={styles.videoGridLarge}> {/* Changed class for larger layout */}
                <div className={styles.videoCardLarge}>
                  <h3>AFib Ablation Mapping</h3>
                  <video controls muted className={styles.videoLarge} poster="/images/simple icon logo.jpeg">
                    <source src="/videos/af_ablation_1.mov" type="video/mp4" />
                    <source src="/videos/af_ablation_1.mov" type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className={styles.videoCardLarge}>
                   <h3>Precision Targeting</h3>
                   <video controls muted className={styles.videoLarge} poster="/images/simple icon logo.jpeg">
                    <source src="/videos/af_ablation_2.mov" type="video/mp4" />
                    <source src="/videos/af_ablation_2.mov" type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
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
                <li style={{ whiteSpace: "nowrap" }}>Supraventricular Tachycardia (SVT)</li>
                <li>Premature Ventricular Beat (PVC)</li>
                <li>Ventricular Tachycardia</li>
              </ul>
            </div>
            
            <div className={styles.sidebarCard}>
               <h3>SVT Visualization</h3>
               <video controls className={styles.sidebarVideo} poster="/images/simple icon logo.jpeg">
                   <source src="/videos/svt_ablation.mov" type="video/mp4" />
                   <source src="/videos/svt_ablation.mov" type="video/quicktime" />
                   Your browser does not support the video tag.
               </video>
               <p className={styles.captionSmall}>Understanding electrical pathways in SVT.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
