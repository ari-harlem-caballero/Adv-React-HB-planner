import AddEntry from '../components/Planner/AddEntry';
import Entries from '../components/Planner/EntryList';
import styles from './Planner.css'

export default function Planner() {
  return (
    <main className={styles.main}>
      <AddEntry />
      <Entries />
    </main>
  );
}
