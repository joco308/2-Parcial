// components/molecules/CardBody/CardBody.tsx
import { BodyText } from '@/components/atoms/BodyText/BodyText';
import styles from './CardBody.module.css';

interface CardBodyProps {
  description: string;
}

export const CardBody = ({ description }: CardBodyProps) => {
  return (
    <div className={styles.body}>
      <BodyText text={description} />
    </div>
  );
};