import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEntries } from '../context/PlannerContext';

import styles from './Entry.css';

export default function Entry() {
  const { id } = useParams();
  const [entry, setEntry] = useState({});
  const { entries, getEntry } = useEntries();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEntry(getEntry(id));
  }, [id, entries.length]);

  let content;
  if (!isEditing) {
    content = (
      <>
        <Link to="/entries" className={styles.backButton}>
          &laquo; Back to Planner
        </Link>
        <article className={styles.entry}>
          <h1>{entry?.title}</h1>
          <p>Due: {entry?.date}</p>
          <p>{entry?.content}</p>
        </article>
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  } else {
    content = (
      <>
        <form>
          <input
            type="text"
            value={entry.title}
            onChange={(e) => {
              onUpdate({ ...entry, title: e.target.value });
            }}
          />
          <input
            type="text"
            value={entry.content}
            onChange={(e) => {
              onUpdate({ ...entry, content: e.target.value });
            }}
          />
          <button>Update</button>
        </form>
      </>
    );
  }

  return content;
}
