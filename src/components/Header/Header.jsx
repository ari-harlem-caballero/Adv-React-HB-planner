import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>My Planner</h2>
      {/* TODO: Replace hard-coded count with the actual number of entries */}
      <span>1 Item Left</span>
    </header>
  );
}
