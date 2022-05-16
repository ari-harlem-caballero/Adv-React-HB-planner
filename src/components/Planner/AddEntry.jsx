import { useEntries } from '../../context/PlannerContext';
import { useForm } from '../../hooks/useForm';
import styles from './AddEntry.css';

export default function AddEntry() {
  const { addEntry } = useEntries();
  const { formState, formError, handleFormChange, setFormError } = useForm({
    title: '',
    content: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError('');
    if (!formState.title) return setFormError('Title is required');
    if (!formState.date) return setFormError('Date is required');
    addEntry(formState);
  };

  return (
    <section className={styles.formWrapper}>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Plan something"
          value={formState.title}
          onChange={handleFormChange}
          className={styles.input}
        />
        <input
          type="date"
          name="date"
          aria-label="Due date"
          value={formState.date || ''}
          onChange={handleFormChange}
          className={styles.input}
        />
        <textarea
          name="content"
          placeholder="A brief description of what you're planning"
          value={formState.content}
          onChange={handleFormChange}
          className={styles.content}
        />
        <button type="submit">Add Entry</button>
      </form>
      <p className={styles.error}>{formError || ' '}</p>
    </section>
  );
}
