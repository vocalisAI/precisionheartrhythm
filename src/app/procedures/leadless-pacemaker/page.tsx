import Button from "@/components/ui/Button";
import styles from "../../conditions/atrial-fibrillation/page.module.css";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadless Pacemaker | Precision Heart Rhythm",
  description: "Advanced leadless pacemaker technology (Micra, Aveir) for cardiac rhythm management without wires.",
};

export default function LeadlessPacemakerPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Leadless Pacemaker</h1>
          <p className={styles.subtitle}>The world&#39;s smallest pacemaker: No wires, no incision, just results.</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <h2>Reimagining Pacing Technology</h2>
              <p>
                Traditional pacemakers require a surgical "pocket" under the skin and wires (leads) that travel to the heart. 
                A <strong>leadless pacemaker</strong> is a revolutionary leap forward—a self-contained generator and electrode system the size of a large vitamin capsule that is implanted directly inside the heart.
              </p>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/images/leadless_pacemaker_xray.jpg" 
                  alt="X-ray showing a leadless pacemaker implanted in the heart" 
                  width={800} 
                  height={600} 
                  className={styles.contentImage}
                />
                <p className={styles.caption}>Actual X-ray showing the compact placement of a leadless pacemaker directly within the heart ventricle.</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Advanced Options Available</h2>
              <p>Dr. Patel specializes in the implantation of the leading devices in this category:</p>
              <ul className={styles.list}>
                <li><strong>Medtronic Micra™:</strong> The first FDA-approved leadless pacing system.</li>
                <li><strong>Abbott Aveir™:</strong> Featuring unique mapping capabilities and retrievability.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Key Benefits</h2>
              <ul className={styles.list}>
                <li><strong>No Chest Scar:</strong> Implanted via a vein in the leg, leaving no visible chest scar or bump.</li>
                <li><strong>Fewer Complications:</strong> Eliminates lead-related issues like fractures or insulation breaches.</li>
                <li><strong>No Restrictions:</strong> Designed to allow full shoulder mobility immediately after the procedure.</li>
                <li><strong>MRI Safe:</strong> Fully compatible with MRI scans.</li>
              </ul>
            </section>

            <div className={styles.ctaBox}>
              <h3>Is This Technology Right for You?</h3>
              <p>Schedule a consultation to determine if you are a candidate for leadless pacing.</p>
              <Button href="/contact" variant="primary">Make an Appointment</Button>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>Devices Available</h3>
              <div className={styles.comparisonBlock}>
                <h4>Medtronic Micra™</h4>
                <ul className={styles.compactList}>
                  <li><strong>Size:</strong> 93% smaller than traditional pacemakers (vitamin capsule size).</li>
                  <li><strong>Battery:</strong> Up to 16-17 years (AV2/VR2 models).</li>
                  <li><strong>Key Feature:</strong> World's smallest; 10+ years of proven clinical data.</li>
                </ul>
              </div>
              <div className={styles.separator} />
              <div className={styles.comparisonBlock}>
                <h4>Abbott Aveir™</h4>
                <ul className={styles.compactList}>
                  <li><strong>Size:</strong> Smaller than a AAA battery.</li>
                  <li><strong>Battery:</strong> Projected 17+ years longevity.</li>
                  <li><strong>Key Feature:</strong> Unique mapping capability before fixation; designed for retrievability.</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
