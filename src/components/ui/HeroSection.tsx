import Image from "next/image";
import Button from "./Button";
import styles from "./HeroSection.module.css";

interface HeroAction {
  label: string;
  href: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      {/* Full bleed background image & overlay */}
      <div className={styles.heroBackground}>
        {/* Placeholder for real hero image */}
        <div className={styles.overlay} />
        
        {/* Animated ECG Line */}
        <div className={styles.ecgContainer}>
          {/* Continuous looping ECG strip */}
          <svg className={styles.ecgSvg} viewBox="0 0 2400 150" preserveAspectRatio="none">
            {/* Pattern 1: Normal Sinus Rhythm */}
            <path 
              className={styles.ecgPath} 
              d="M0,75 L50,75 L60,65 L70,85 L80,75 L120,75 L130,45 L140,105 L150,75 L170,75 L180,85 L190,65 L200,75 
                 L300,75 L310,65 L320,85 L330,75 L370,75 L380,40 L390,110 L400,75 L420,75 L430,85 L440,65 L450,75
                 L550,75 L560,65 L570,85 L580,75 L620,75 L630,45 L640,105 L650,75 L670,75 L680,85 L690,65 L700,75
                 L800,75 L810,65 L820,85 L830,75 L870,75 L880,40 L890,110 L900,75 L920,75 L930,85 L940,65 L950,75
                 L1050,75 L1060,65 L1070,85 L1080,75 L1120,75 L1130,45 L1140,105 L1150,75 L1170,75 L1180,85 L1190,65 L1200,75
                 
                 M1200,75 L1250,75 L1260,65 L1270,85 L1280,75 L1320,75 L1330,45 L1340,105 L1350,75 L1370,75 L1380,85 L1390,65 L1400,75 
                 L1500,75 L1510,65 L1520,85 L1530,75 L1570,75 L1580,40 L1590,110 L1600,75 L1620,75 L1630,85 L1640,65 L1650,75
                 L1750,75 L1760,65 L1770,85 L1780,75 L1820,75 L1830,45 L1840,105 L1850,75 L1870,75 L1880,85 L1890,65 L1900,75
                 L2000,75 L2010,65 L2020,85 L2030,75 L2070,75 L2080,40 L2090,110 L2100,75 L2120,75 L2130,85 L2140,65 L2150,75
                 L2250,75 L2260,65 L2270,85 L2280,75 L2320,75 L2330,45 L2340,105 L2350,75 L2370,75 L2380,85 L2390,65 L2400,75"
            />
          </svg>
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>
          {primaryAction && (
             // Primary CTA
            <Button href={primaryAction.href} variant="primary">
              {primaryAction.label}
            </Button>
          )}
          {secondaryAction && (
             // Secondary CTA
            <Button href={secondaryAction.href} variant="outline">
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
