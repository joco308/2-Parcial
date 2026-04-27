// components/atoms/CardTag/CardTag.tsx
import styles from './CardTag.module.css';

interface CardTagProps {
  label: string;
}

export const CardTag = ({ label }: CardTagProps) => {
  return <span className={styles.tag}>{label}</span>;
};