import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEntries } from '../context/PlannerContext';

import styles from './Entry.css';

export default function Entry() {
  const { id } = useParams();
  const [entry, setEntry] = useState({});
  const { entries, getEntry, onUpdate, onDelete } = useEntries();
  const [isEditing, setIsEditing] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setEntry(getEntry(id));
  }, [id, entries.length, entries]);

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
        <button
          type="button"
          onClick={() => {
            onDelete(entry.id);
            history.replace('/');
          }}
        >
          Delete
        </button>
      </>
    );
  } else {
    content = (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(false);
          }}
        >
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
