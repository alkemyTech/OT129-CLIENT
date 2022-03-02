# SearchInput
## How to use it

- The component recieves TWO arguments:
  - `title`
  - `handleSearch` method (is required for managin the input's state)


### Example: 
```javascript
<SearchInput handleSearch={changeHandler} title="Busca tus categorias por NOMBRE" />
```
## Pairing hook:

- [`useDebounceSearch`](../../hooks/useDebounceSearch.md)
