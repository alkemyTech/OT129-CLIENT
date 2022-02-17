export const debouncerSearch = (e, debounceRef, setSearch, delay) => {
  let search = e.target.value;

  if (debounceRef.current) {
    clearTimeout(debounceRef.current);
  }
  if (search.length >= 3) {
    debounceRef.current = setTimeout(() => {
      setSearch(e.target.value);
    }, [delay]);
  } else if (search.length < 3) {
    setSearch("");
  }
};
