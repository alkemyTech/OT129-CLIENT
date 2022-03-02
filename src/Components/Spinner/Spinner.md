# ***Spinner***

Spinner is a reutilizable component which receive a serie of props to define its own HTML element type, and properties.

Bootstrap *`spinners`* was implemented for to show the loading state in the project.
To invoke te spinner just need to import and add to your code.

### Example

```javascript
import { Spinner } from "../Components/Spinner/Spinner";

const MyComponent = () => {
  return(
    {
      isLoading ?
      <Spinner />
      :
      <p> Hi!, i'm a line of a paragraph. </p>
    }
  );
};

export default MyComponent;
```