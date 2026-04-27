// components/atoms/BadgeNumber/BadgeNumber.tsx
import styles from './BadgeNumber.module.css';

interface BadgeNumberProps {
  value: number;
}

export const BadgeNumber = ({ value }: BadgeNumberProps) => {
  return <span className={styles.badge}>{value}</span>;
};