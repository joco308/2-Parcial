// components/molecules/CardFooter/CardFooter.tsx
import { MetaLabel } from '@/components/atoms/MetaLabel/MetaLabel';
import { DateText } from '@/components/atoms/DateText/DateText';
import styles from './CardFooter.module.css';

interface CardFooterProps {
  lastUpdated: string;
}

export const CardFooter = ({ lastUpdated }: CardFooterProps) => {
  return (
    <div className={styles.footer}>
      <MetaLabel label="Last Updated" />
      <DateText date={lastUpdated} />
    </div>
  );
};