import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Precision Heart Rhythm",
  description: "Comprehensive cardiac electrophysiology services including ablation, device management, and arrhythmia treatment.",
};

const services = [
  {
    title: "Atrial Fibrillation Management",
    description: "Comprehensive care for AFib including medication management, lifestyle counseling, and advanced catheter ablation.",
    link: "/conditions/atrial-fibrillation"
  },
  {
    title: "Cardiac Ablation",
    description: "Radiofrequency and cryoablation procedures for SVT, AFib, Atrial Flutter, and Ventricular Tachycardia.",
    link: "/procedures/cardiac-ablation"
  },
  {
    title: "Pacemakers & ICDs",
    description: "Implantation and management of pacemakers, defibrillators (ICDs), and cardiac resynchronization therapy (CRT) devices.",
    link: "/device-clinic"
  },
  {
    title: "Left Atrial Appendage Closure",
    description: "WATCHMAN™ procedure to reduce stroke risk in patients with non-valvular AFib who need an alternative to blood thinners.",
    link: "#" // Placeholder or specific page if needed
  },
  {
    title: "Remote Monitoring",
    description: "Continuous monitoring of cardiac devices from the comfort of your home to ensure optimal performance and early detection of issues.",
    link: "/device-clinic"
  },
  {
    title: "Syncope Evaluation",
    description: "Diagnostic testing and management for patients experiencing fainting spells or unexplained loss of consciousness.",
    link: "#"
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <HeroSection
        title="Our Services"
        subtitle="Advanced diagnostics and treatments for heart rhythm disorders."
        align="center"
      />

      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((service, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <Link href={service.link} className={styles.cardLink}>
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
