import styles from './styles.module.css';

interface ResumeProps {
  value: string;
  text: string;
}

export function Resume({ value, text }: ResumeProps) {
  return (
    <div className={styles.container}>
      <div>
        <strong>{value}</strong>
        <p>{text}</p>
      </div>
    </div>
  )
}