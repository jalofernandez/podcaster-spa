import styles from '@/styles/Header.module.css'

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className={`${styles.header} ${styles.animFadeInRight}`}>
      <div>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </header>
  )
}
