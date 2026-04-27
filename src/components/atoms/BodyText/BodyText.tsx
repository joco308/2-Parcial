// components/atoms/BodyText/BodyText.tsx
import styles from './BodyText.module.css';

interface BodyTextProps {
  text: string;
}

export const BodyText = ({ text }: BodyTextProps) => {
  return <p className={styles.text}>{text}</p>;
};