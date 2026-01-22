import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WATCHMAN & AF Ablation | Precision Heart Rhythm",
  description: "WATCHMAN left atrial appendage closure and combined AF Ablation procedures for stroke risk reduction in atrial fibrillation.",
};

export default function WatchmanPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>WATCHMAN™ & Combined AF Ablation + WATCHMAN</h1>
          <p className={styles.subtitle}>Stroke-risk reduction and rhythm control—personalized for atrial fibrillation care.</p>
        </div>
      </div>

      <div className="container">
        {/* Hero section with intro text on left, video on right */}
        <section className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <p className={styles.introParagraph}>
              If you have non-valvular atrial fibrillation (AFib), our goal is to reduce both:
            </p>
            <ul className={styles.goalsList}>
              <li><strong>Stroke risk</strong> — from clot formation, often in the left atrial appendage</li>
              <li><strong>AFib symptoms/burden</strong> — palpitations, fatigue, shortness of breath</li>
            </ul>
            <p className={styles.introNote}>Two common tools in that plan are the <strong>WATCHMAN™</strong> left atrial appendage closure device and catheter ablation.</p>
          </div>

          <div className={styles.heroVideo}>
            <h3>See How WATCHMAN Works</h3>
            <a 
              href="https://www.youtube.com/watch?v=oD7_W28zjmg&t=60s" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.videoLink}
            >
              <div className={styles.videoThumbnail}>
                <img 
                  src="https://img.youtube.com/vi/oD7_W28zjmg/maxresdefault.jpg" 
                  alt="WATCHMAN Procedure Video - Click to watch on YouTube"
                />
                <div className={styles.playButton}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className={styles.videoCaption}>Watch on YouTube →</span>
              </div>
            </a>
            <p className={styles.videoNote}>Video by Boston Scientific</p>
          </div>
        </section>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            {/* WATCHMAN Section */}
            <section className={styles.section}>
              <h2>WATCHMAN™: Left Atrial Appendage Closure</h2>
              
              <div className={styles.subsection}>
                <h3>What it is</h3>
                <p>
                  WATCHMAN is a minimally invasive, catheter-based implant that seals the left atrial appendage (LAA)—a common source of clots in non-valvular AFib—to help reduce stroke risk.
                </p>
              </div>

              <div className={styles.subsection}>
                <h3>Who may be a candidate</h3>
                <p>WATCHMAN may be appropriate if you:</p>
                <ul className={styles.list}>
                  <li>Have non-valvular AFib</li>
                  <li>Have moderate to high stroke risk</li>
                  <li>Have a contraindication to long-term oral anticoagulation or a high bleeding risk where an alternative is reasonable</li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h3>What to expect</h3>
                <ul className={styles.expectList}>
                  <li><strong>Before:</strong> Review of your AFib history, stroke/bleeding risk, and imaging to evaluate LAA anatomy (as needed).</li>
                  <li><strong>During:</strong> A catheter is placed through the vein in the leg (groin) and guided to the heart to deploy the device.</li>
                  <li><strong>After:</strong> Most patients take a short-term blood thinner and/or antiplatelet regimen while the device heals into place, with follow-up imaging often around ~45-90 days (plan is individualized).</li>
                </ul>
              </div>

              <div className={styles.keyPoint}>
                <strong>Key Point:</strong> WATCHMAN helps address stroke risk—it does not treat the AFib rhythm itself.
              </div>
            </section>

            {/* Combined Procedure Section */}
            <section className={styles.section}>
              <h2>Combined AF Ablation + WATCHMAN in One Procedure</h2>
              
              <div className={styles.subsection}>
                <h3>What it is</h3>
                <p>In selected patients, it may be possible to perform:</p>
                <ul className={styles.list}>
                  <li><strong>Catheter ablation</strong> (to reduce AFib episodes and symptoms), and</li>
                  <li><strong>Left atrial appendage closure (WATCHMAN)</strong></li>
                </ul>
                <p>during the same visit.</p>
                <p>This combined approach has been studied and shown to be feasible in appropriately selected patients.</p>
              </div>

              <div className={styles.subsection}>
                <h3>Why consider combining them?</h3>
                <p>Potential advantages (when appropriate):</p>
                <ul className={styles.list}>
                  <li>One anesthesia and one recovery period</li>
                  <li>Addresses symptoms (ablation) and stroke risk (WATCHMAN) as part of one coordinated plan</li>
                  <li>Helpful for patients who are good ablation candidates but also need an alternative to long-term anticoagulation</li>
                </ul>
              </div>

              <div className={styles.importantNote}>
                <strong>Important:</strong> Not everyone should do both together. Some patients do better with a staged approach depending on anatomy, AFib type, bleeding risk, and overall medical complexity.
              </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.section}>
              <h2>Common Questions</h2>
              
              <div className={styles.faqItem}>
                <h3>Does WATCHMAN mean I&apos;ll never need blood thinners again?</h3>
                <p>
                  Many patients use blood thinners or antiplatelet therapy temporarily after implant while the device heals, and then may transition off long-term anticoagulation depending on imaging and your clinical situation.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3>Will ablation &ldquo;cure&rdquo; my AFib?</h3>
                <p>
                  Ablation is designed to reduce AFib burden and symptoms. Some patients have long periods without AFib; others may need medications or repeat treatment. (It&apos;s individualized.)
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3>What are the risks?</h3>
                <p>
                  All catheter-based heart procedures have risks (bleeding, vascular injury, stroke, device-related complications, pericardial effusion, and need for additional procedures). We review your personalized risk profile in detail before proceeding.
                </p>
              </div>
            </section>


          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <img 
                src="/images/watchman_device.webp" 
                alt="WATCHMAN Left Atrial Appendage Closure Device"
                className={styles.deviceImage}
              />
            </div>

            <div className={styles.sidebarCard}>
              <h3>Ideal Candidates</h3>
              <ul>
                <li>Non-valvular AFib</li>
                <li>High stroke risk</li>
                <li>Contraindication to long-term blood thinners</li>
                <li>High bleeding risk</li>
              </ul>
            </div>
          </aside>

          <div className={styles.ctaBox}>
            <h3>Request a Consultation</h3>
            <p>Find out if WATCHMAN or combined procedures are right for you.</p>
            <Button href="/contact" variant="primary">Schedule Consultation</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
