# Half-Baked Planner

## Demo

[Link to Demo](https://alchemy-react-planner.netlify.app)

## Getting Started

Use [this template](https://github.com/alchemycodelab/adv-react-half-baked-planner) to get started.

### Learning Objectives

- Explain how action types describe state changes
- Explain the two parameters (`state` and `action`) of the reducer function
- Explain the purpose of the `reducer` function
- Use `useReducer` to manage complex application state
- Use the `dispatch` function to dispatch actions to update state
- Use a reducer function to update state
- Use a `switch` statement to handle multiple conditions
- Use `useContext` to manage global application state
- Be able to spread props into children components
- Use functions to expose API calls to components
- Use custom hooks to share application logic
- Use props.children to pass child components into a component

### Description

For this deliverable, you'll be fixing a *Planner* App — an app to help you keep track of things. The Planner utilizes React Router to navigate between a list view of planner entries and their corresponding detail pages — well, that's what it's supposed to do, at least...

Right now, the Planner is a bit buggy. Really buggy, actually. It doesn't even start without throwing errors. Your job is to read over the code, find the bugs, and fix them. To get started, try running the app and looking at your browser's console. Look for `TODO`s if you need a hint.

This deliverable combines both the `useContext` and `useReducer` hooks to make a light-weight Redux-like alternative that only uses React.

### Acceptance Criteria

- A user can add planner entries
- A user can visit `/entries` to list all planner entries
- A user can visit `/entries/:id` (where `:id` is an entry's `id`) to display the detail view for a given entry
- A user can see how many items are currently on the Planner by looking at the right-side of the `Header`
  - This count should be updated when new entries are added
- (STRETCH) Add the ability to edit/update entries
- (STRETCH) Add the ability to delete entries
- (STRETCH) Save Planner entries to local storage/Supabase

### Rubric

| Task                                                                  | Points |
| --------------------------------------------------------------------- | ------ |
| `EntryList` component displays all entries stored in `PlannerContext` | 3      |
| `Entry` view displays correct data for a given planner entry          | 3      |
| Header displays a count of entry items                                | 2      |
| Existing tests pass                                                   | 2      |
