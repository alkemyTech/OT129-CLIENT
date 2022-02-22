### useDebounceSearch:

## How it works?

- The hook takes two arguments: `value` (str) and `delay` (number) (the second one is setted in 300ms by default if you don't want to pass it as arg).
- Handles your search with a `setTimeout` function wich recieves your delay as the expected timer.
- The hook clears the timeout before returning the new value.

## How to use it?

- With a simple `useState`, handle your searches (eg.: `const [search, setSearch] = useState("");`).
- Import the hook wherever your `useEffect` is handling the HTTP Request.
- Set a new variable for storing the hook values (eg.: `const searchValue = useDebounceSearch(search, 400);`). Here we are passing the `search` state as the first arg (`value`).
- Pass the hook variable as argument to the HTTP request service and add it to the `useEffect` dependecies array (eg.: `useEffect(() => { dispatch(fetchActivities(searchValue)); }, [dispatch, searchValue]);`)

## Pairing component:

- `<SearchInput />`
