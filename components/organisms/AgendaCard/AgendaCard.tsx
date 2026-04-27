// components/organisms/AgendaCard/AgendaCard.tsx
import { CardHeader } from '@/components/molecules/CardHeader/CardHeader';
import { CardBody } from '@/components/molecules/CardBody/CardBody';
import { CardFooter } from '@/components/molecules/CardFooter/CardFooter';
import styles from './AgendaCard.module.css';

interface AgendaCardProps {
  badgeNumber: number;
  title: string;
  tagLabel: string;
  description: string;
  lastUpdated: string;
}

export const AgendaCard = ({
  badgeNumber,
  title,
  tagLabel,
  description,
  lastUpdated,
}: AgendaCardProps) => {
  return (
    <article className={styles.card}>
      <CardHeader
        badgeNumber={badgeNumber}
        title={title}
        tagLabel={tagLabel}
      />
      <CardBody description={description} />
      <CardFooter lastUpdated={lastUpdated} />
    </article>
  );
};