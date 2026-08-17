import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const { name, course, yearLevel, status, gwa } = student;

  const isOnProbation = status === 'On Probation';
  const isDeansLister = gwa <= 1.75;

  const cardClassName = isOnProbation
    ? `${styles.card} ${styles.probation}`
    : styles.card;

  return (
    <div className={cardClassName}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.details}>
        {course} &middot; Year {yearLevel}
      </p>
      <p className={styles.details}>GWA: {gwa.toFixed(2)}</p>

      <span className={styles.status}>
        {isOnProbation ? 'On Probation' : status}
      </span>

      {isDeansLister && <span className={styles.badge}>Dean's Lister</span>}
    </div>
  );
}
