## useDebouceSearch:

### How it works?

- The hook takes two arguments: 
    - `value` (str) 
    - `minValueLength` (number). The second argument is setted in 3 by default).
- Handles your search with a `setTimeout` function setted by default in 300ms.
- The hook clears the timeout before returning the new value.

### How to use it?

- With a simple `useState`, handle your searches (eg.: `const [search, setSearch] = useState("");`).
- Import the hook wherever your `useEffect` is handling the HTTP Request.

- Set a new variable for storing the hook values (eg.: `const searchValue = useDebouceSearch(search, 2);`). Here we are passing the `search` state as the first arg (`value`), and `2` as the minValueLenght.

- Pass the hook variable as argument to the HTTP request service and add it to the `useEffect` dependecies array (eg.: `useEffect(() => { dispatch(fetchActivities(searchValue)); }, [dispatch, searchValue]);`)

### Pairing component:

- `<SearchInput />`