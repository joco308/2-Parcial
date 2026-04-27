// components/molecules/CardHeader/CardHeader.tsx
import { BadgeNumber } from '@/components/atoms/BadgeNumber/BadgeNumber';
import { CardTag } from '@/components/atoms/CardTag/CardTag';
import { DiamondIcon } from '@/components/atoms/DiamondIcon/DiamondIcon';
import styles from './CardHeader.module.css';

interface CardHeaderProps {
  badgeNumber: number;
  title: string;
  tagLabel: string;
}

export const CardHeader = ({ badgeNumber, title, tagLabel }: CardHeaderProps) => {
  return (
    <div className={styles.header}>
      <BadgeNumber value={badgeNumber} />
      <span className={styles.title}>{title}</span>
      <CardTag label={tagLabel} />
      <DiamondIcon />
    </div>
  );
};