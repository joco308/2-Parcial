// components/atoms/DiamondIcon/DiamondIcon.tsx
import styles from './DiamondIcon.module.css';

export const DiamondIcon = () => {
  return (
    <span className={styles.wrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className={styles.icon}
        aria-hidden="true"
      >
        <path d="M12 2L2 9l10 13L22 9 12 2z" />
      </svg>
    </span>
  );
};