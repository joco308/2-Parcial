// components/atoms/DateText/DateText.tsx
import styles from './DateText.module.css';

interface DateTextProps {
  date: string;
}

export const DateText = ({ date }: DateTextProps) => {
  return <span className={styles.date}>{date}</span>;
};