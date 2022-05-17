import { useEntries } from '../../context/PlannerContext';
import styles from './Header.css';

export default function Header() {
  const { entriesCount } = useEntries();
  return (
    <header className={styles.header}>
      <h2>My Planner</h2>
      <span>{entriesCount} Item Left</span>
    </header>
  );
}
