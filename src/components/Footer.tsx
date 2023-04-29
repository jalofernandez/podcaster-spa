import Image from 'next/image'
import styles from '@/styles/Footer.module.css'

interface FooterProps {
  size?: number;
}

export default function Footer({ size = 80 }: FooterProps) {
  return (
    <footer className={`${styles.center} ${styles.animOpacity}`}>
      <Image
        className={styles.logo}
        src="/podcaster-main-logo.svg"
        alt="Podacaster Logotype"
        width={size}
        height={size}
        priority
      />
    </footer>
  )
}
