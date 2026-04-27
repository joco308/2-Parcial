// components/atoms/MetaLabel/MetaLabel.tsx
import styles from './MetaLabel.module.css';

interface MetaLabelProps {
  label: string;
}

export const MetaLabel = ({ label }: MetaLabelProps) => {
  return <span className={styles.label}>{label}</span>;
};