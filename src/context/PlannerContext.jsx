import { createContext, useContext, useEffect, useReducer } from 'react';
import { parseDate } from '../utils/parseDate';

// payload is an entry object:
// { title: String, content: String, date: Date }
function entriesReducer(entries, { type, payload }) {
  switch (type) {
    case 'create':
      const entry = { ...payload, id: entries.length };
      return [entry, ...entries];
    case 'reset':
      return [...payload];
    case 'update':
      return entries.map((entry) =>
        entry.id === payload.id ? payload : entry
      );
    case 'delete':
      return entries.filter((entry) => entry.id !== payload.id);
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

export const PlannerContext = createContext();

const PlannerProvider = ({ children }) => {
  const localEntries = JSON.parse(localStorage.getItem('entries'));
  const [entries, dispatch] = useReducer(entriesReducer, []);

  useEffect(() => {
    // Note that 'entries' below would likely be an API request in practice
    const entries = localEntries || [
      {
        id: 0,
        title: 'Start Planning',
        content: 'I should write in my planner',
        date: parseDate(new Date()),
      },
    ];
    dispatch({
      type: 'reset',
      payload: entries,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    const payload = {
      ...entry,
      date: parseDate(entry.date),
    };
    dispatch({ type: 'create', payload });
    return payload;
  };

  const getEntry = (id) => {
    return entries.find((note) => note.id === Number(id));
  };

  const onUpdate = (entry) => {
    dispatch({ type: 'update', payload: entry });
  };

  const onDelete = (id) => {
    dispatch({ type: 'delete', payload: { id } });
  };

  const entriesCount = entries.length;

  return (
    <PlannerContext.Provider
      value={{
        entries,
        addEntry,
        getEntry,
        entriesCount,
        onUpdate,
        onDelete,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
};

const useEntries = () => {
  const context = useContext(PlannerContext);

  if (context === undefined) {
    throw new Error('useEntries must be used within a PlannerProvider');
  }

  return context;
};

export { PlannerProvider, useEntries };
