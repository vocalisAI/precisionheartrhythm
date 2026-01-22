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
               
               <div className={styles.affiliationsWrapper}>
                 {[
                   { src: "/images/logos/umdnj.png", alt: "UMDNJ", scale: 1.1 },
                   { src: "/images/logos/iowa.png", alt: "University of Iowa", scale: 1.2 },
                   { src: "/images/logos/tufts.png", alt: "Tufts Medical Center", scale: 1.15 },
                   { src: "/images/logos/harvard.jpg", alt: "Harvard Medical School", scale: 0.95 },
                   { src: "/images/logos/acc.png", alt: "American College of Cardiology", scale: 1.1 },
                   { src: "/images/logos/utmc.jpg", alt: "University of Toledo Medical Center", scale: 1.0 },
                 ].map((logo, index) => (
                   <div 
                     key={index} 
                     className={styles.logoContainer}
                     style={{ transform: `scale(${logo.scale})` }}
                   >
                     <Image 
                       src={logo.src} 
                       alt={logo.alt} 
                       fill
                       className={styles.logoImage}
                     />
                   </div>
                 ))}
               </div>
            </div>
            
            <div className={styles.verticalDivider} />
            
            <div className={styles.bioContent}>
              <h2 className={styles.heading}>Meet Dr. Jaydutt Patel</h2>
              
              <div className={styles.bioBlock}>
                <p className={styles.text}>
                  Dr. Jaydutt B. Patel (Jay) is a board-certified cardiac electrophysiologist with over two decades of medical training and practice in the United States. After completing his medical degree in India, he pursued residency in Internal Medicine at the University of Medicine and Dentistry of New Jersey followed by Chief residency at University of Iowa and advanced fellowships in Cardiovascular Medicine and Cardiac Electrophysiology at Tufts University and Harvard Medical School. Dr. Patel serves as a Cardiac Electrophysiologist at Metro Mercy and Metro ProMedica facilities in Toledo, Ohio, and as Clinical Assistant Professor of Medicine at the University of Toledo College of Medicine and Life Sciences. His career has been marked by leadership roles, including Co-Director of the Electrophysiology Lab at Saint Vincent Hospital in Erie, PA, and active participation in national organizations such as the American College of Cardiology and the Heart Rhythm Society.
                </p>
                <p className={styles.text}>
                  Beyond his medical career, Dr. Patel has been deeply engaged in civic and community service. He has served as President of the Indian Association of Greater Erie, chaired the American Heart Association Heart Walk, and currently sits on the Board of Trustees for Maumee Valley Country Day School. With a lifelong dedication to education, service, and advancing heart health, Dr. Patel brings both professional expertise and a strong commitment to community leadership, embodying values that bridge healthcare, civic responsibility, and public service.
                </p>
                <p className={styles.text}>
                  Outside of work, he enjoys quality time with his family, staying physically fit, and reading non-fiction. Some of his favorite books are The Story of My Experiments with Truth by Mahatma Gandhi, Uncommon by Tony Dungy, and The Lessons of History by Will &amp; Ariel Durant.
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

          {/* Philosophy Section - Full Width */}
          <div className={styles.philosophySection}>
            <h3 className={styles.philosophyTitle}>Our Philosophy</h3>
            <p className={styles.philosophyIntro}>
              Dr. Patel emphasizes a compassionate, patient-centered approach that combines advanced diagnostic and procedural expertise with clear communication and trust. His philosophy blends modern technology with genuine personal connection—delivering precision-driven, community-focused cardiovascular care.
            </p>
            
            <div className={styles.philosophyGrid}>
              <div className={styles.philosophyItem}>
                <h4>Patient-Centered Care</h4>
                <p>Taking time to understand each patient’s condition, goals, and lifestyle, ensuring strong communication and trust are at the core of successful outcomes.</p>
              </div>
              <div className={styles.philosophyItem}>
                <h4>Advanced Expertise</h4>
                <p>Combining diagnostic precision and procedural excellence in electrophysiology to manage heart rhythm disorders with individualized treatment.</p>
              </div>
              <div className={styles.philosophyItem}>
                <h4>Community Connection</h4>
                <p>Committed to serving the local community with high-quality specialty care that is available, approachable, and invested in long-term relationships.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
