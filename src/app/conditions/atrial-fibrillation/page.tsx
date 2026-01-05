import Link from "next/link";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atrial Fibrillation (AFib) | Precision Heart Rhythm",
  description: "Learn about Atrial Fibrillation causes, symptoms, and treatment options at Precision Heart Rhythm.",
};

export default function AFibPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Atrial Fibrillation (AFib)</h1>
          <p className={styles.subtitle}>Understanding the most common heart rhythm disorder.</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <h2>What is Atrial Fibrillation?</h2>
              <p>
                Atrial fibrillation, often called AFib, is an irregular and often very rapid heart rhythm (arrhythmia) that can lead to blood clots in the heart. 
                AFib increases the risk of stroke, heart failure and other heart-related complications.
              </p>
              <p>
                During atrial fibrillation, the heart&apos;s two upper chambers (the atria) beat chaotically and irregularly — out of coordination with the two lower chambers (the ventricles) of the heart.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Common Symptoms</h2>
              <ul className={styles.list}>
                <li>Palpitations (sensations of a racing, uncomfortable, irregular heartbeat or a flip-flopping in your chest)</li>
                <li>Weakness</li>
                <li>Reduced ability to exercise</li>
                <li>Fatigue</li>
                <li>Lightheadedness</li>
                <li>Dizziness</li>
                <li>Shortness of breath</li>
                <li>Chest pain</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Treatment Options</h2>
              <p>Treatment for atrial fibrillation depends on how long you&apos;ve had AFib, how bothersome your symptoms are and the underlying cause of your atrial fibrillation. Goals of treatment are to:</p>
              <ul className={styles.list}>
                <li>Reset the rhythm or control the rate</li>
                <li>Prevent blood clots</li>
              </ul>
              <p>Options include medication, cardioversion, catheter ablation, or device therapy.</p>
            </section>

            <div className={styles.ctaBox}>
              <h3>Concerned you might have AFib?</h3>
              <p>Early diagnosis and treatment can significantly reduce the risk of complications.</p>
              <Button href="/contact" variant="primary">Schedule an Evaluation</Button>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>Quick Facts</h3>
              <ul>
                <li>AFib affects millions of people worldwide.</li>
                <li>It is the most common type of treated heart arrhythmia.</li>
                <li>Untreated AFib doubles the risk of heart-related death and is associated with a 5-fold increased risk of stroke.</li>
              </ul>
            </div>
            
            <div className={styles.sidebarCard}>
              <h3>Related Procedures</h3>
              <ul className={styles.linkList}>
                <li><Link href="/procedures/cardiac-ablation">Cardiac Ablation</Link></li>
                <li><Link href="/device-clinic">Pacemakers & Devices</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
