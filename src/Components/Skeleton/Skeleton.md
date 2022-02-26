# ***Skeleton***

Skeleton component is a reutilizable placeholder which receive a serie of props to define its own HTML element type, and properties.

Here is an example of its implementation

```javascript
import Skeleton from '../Skeleton/Skeleton';

const MyComponent = () => {
    return (
        {
        isLoading ?
            <Skeleton />
        :
            <p> Hi!, i'm a line of a paragraph. </p>
        }
    );
}

export default MyComponent;
```

## **Customization Values:**

### 1. **Element**

- You can define the HTML element that Skeleton will use.
This change the height and the shape of the resultant placeholder.
>_Element prop support a string value_.

>Valid types: "p", "h1", "h2", "h3", "h4", "h5", "h6", "a", "button".

Example:
```javascript
    <Skeleton element="h1" />
```
***
### 2. **Width**

- You can choose the width of the placeholder assigning a percentage or a pixels value.
>_Element prop support a string value_.

Example:

    <Skeleton width="100%" />

***
### 3. **Height**

- You can choose the width of the placeholder assigning a pixels value.
>_Element prop support a string value_.

Example:

    <Skeleton width="20px" />

***
### 4. **Col**

- According bootstrap grid, Skeleton can accepts col number between 1 and 12. 
>_Element prop support a number value_.

>Default value is 4.

Example:

    <Skeleton column={4} />
***
### 5. **Size:**

- Throught size prop, you can change the default height value of the element to increase or decrease it.
>_Element prop support a string value_.

>Size valid values: "xs", "sm", "lg"

Example:

    <Skeleton size="md" />
    <Skeleton size="lg" />
*** 
### 6. **Custom class name**

- You can add custom classNames using the addClass prop. Skeleton is made with bootstrap classes so you can take advantage of that using bs classes.
>_Element prop support a string value_.

Example:

    <Skeleton element="button" addClass="btn" />
---
***Visual Example:***

![image](https://user-images.githubusercontent.com/71856261/152566785-905c9342-8afc-48be-bcb7-35f3cd65f460.png)
```javascript
<div className="container col-4">
    <Skeleton addClass="mx-3" col={12} element="p" height="300px" width="300px" />
    <Skeleton addClass="m-3" col={4} element="p" width="100%" />
    <Skeleton addClass="btn m-3" element="button" />
</div>
```

