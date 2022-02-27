# ONG Somos Más!

## **Spinner Component:**

Spinner component is a reutilizable which receive a serie of props to define its own HTML element type, and properties.
Bootstrap “spinners” was implemented for to show the loading state in the project.
To invoke te spinner just need to import and add to your code.
usage (import) example:

import { Spinner } from "../Components/Spinner/Spinner";

           const MyComponent = () =>{
      return(
        {
          isLoading ?
          <Spinner />
          :
          <p> Hi!, i'm a line of a paragraph. </p>
        }
       );
      }
    export default MyComponent;

## **Skeleton Component:**

Skeleton component is a reutilizable placeholder which receive a serie of props to define its own HTML element type, and properties.
To invoke te skeleton just need to import and add to your code.

    import <Skeleton> from '../Skeleton/Skeleton'

    const MyComponent = () =>{
      return(
        {
          isLoading ?
          <Skeleton />
          :
          <p> Hi!, i'm a line of a paragraph. </p>
        }
       );
      }
    export default MyComponent;

**Customization Values:**

- **Element:**

You can define the HTML element that Skeleton will use.
This change the height and the shape of the resultant placeholder.
_Element prop support a string value_.
Valid types: "p", "h1", "h2", "h3", "h4", "h5", "h6", "a", "button".

Example:

    <Skeleton element="h1" />

- **Width:**

You can choose the width of the placeholder assigning a percentage or a pixels value.
_Element prop support a string value_.

Example:

    <Skeleton width="100%" />
    <Skeleton width="20px" />

- **Height:**

You can choose the width of the placeholder assigning a pixels value.
_Element prop support a string value_.

Example:

    <Skeleton width="20px" />

- **Col:**

According bootstrap grid, Skeleton can accepts col number between 1 and 12. Default value is 4.
_Element prop support a number value_.

Example:

    <Skeleton column={4} />

- **Size:**

Throught size prop, can change the default height value of the element to increase or decrease that.
_Element prop support a string value_.
Size valid values: "xs", "sm", "lg"

Example:

    <Skeleton size="md" />
    <Skeleton size="lg" />

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Can add custom classNames using the addClass prop. Skeleton is made with bootstrap classes so you can to take advantage of than using bs classes.
_Element prop support a string value_.

Example:

    <Skeleton element="button" addClass="btn" />

- **Example:**

Can add custom classNames using the addClass prop. Skeleton is made with bootstrap classes so you can to take advantage of than using bs classes.
_Element prop support a string value_.

Example:

![image](https://user-images.githubusercontent.com/71856261/152566785-905c9342-8afc-48be-bcb7-35f3cd65f460.png)

    <div className="container col-4">
      <Skeleton addClass="mx-3" col={12} element="p" height="300px" width="300px" />
      <Skeleton addClass="m-3" col={4} element="p" width="100%" />
      <Skeleton addClass="btn m-3" element="button" />
    </div>

---

## Use Sweet Alert 2

### 1 - Use a method called `alerts` in file alerts.js

### This method recive 2 arguments:

- title: the message to be displayed.(string)
- icon: the icon to be displayed.(string)

### There are 5 different icons:

- "success"
- "error"
- "info"
- "warning"
- "question"

### Example:

```
alerts("Title message", "success");
```

### Result:

![plot](https://i.ibb.co/883s3dH/example.jpg)

### 2 - Use a method called `confirmAlerts` in file alerts.js

### This method recive 3 arguments:

- title: confirmation title to be displayed.(string)
- text: descriptive text to be displayed.(string)
- callback: a function that is triggered when the user clicks on the confirmation button.(function)

### Example:

```
confirmAlerts(
      "¿Estás seguro?",
      `El slide id: 913 será eliminado permanentemente`,
      function (response) {
        if (response) {
          deleteSlide(913)
            .then((res) => {
              alerts(`Slide id: 913 eliminado correctamente`, "success");
            })
            .catch(() => {
              alerts(`Ocurrió un error al eliminar el slide 913`, "error");
            });
        }
      }
    );
```

### Result:

![plot](https://i.ibb.co/bz9wLHk/confirmation2.jpg)

![plot](https://i.ibb.co/hywdz46/confirmed.jpg)

## Use Progress component!

- Custom JSX and CSS component.
- Set your height and width as props.
- CSS root variables custom styles.

### Example:

```
  <Progress height="5px" width="500px" margin="1rem auto"/>;
```

### Result:

![plot](https://imgur.com/4qLJ6E2.png)

---

## Unit Tests of components:

- [Titles](./src/Components/Titles/README.test.md)

## Hooks:

- [useDebounceEffect](./src/hooks/useDebounceSearch.md)

## Components:

- [SearchInput](./src/Components/SearchInput/searchInput.md)
