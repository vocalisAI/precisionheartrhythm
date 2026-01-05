import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, onClick, variant = "primary", children, className = "" }: ButtonProps) {
  const rootClassName = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={rootClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={rootClassName}>
      {children}
    </button>
  );
}
