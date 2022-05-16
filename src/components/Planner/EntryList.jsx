import { useEntries } from '../../context/PlannerContext';
import Entry from './EntryItem';
import styles from './EntryList.css';

export default function Entries() {
  // TODO: Replace with the entries stored in PlannerContext
  const { entries } = useEntries();
  
  return (
    <ul className={styles.list}>
      {entries.map(({ id, title, date }) => (
        <Entry key={id} id={id} title={title} date={date} />
      ))}
    </ul>
  );
}
