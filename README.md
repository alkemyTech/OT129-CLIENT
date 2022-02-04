# ONG Somos Más!

## **Skeleton Component:**

Skeleton component is a reutilizable placeholder which receive a serie of props to define its own HTML element type, and properties.
To invoke te skeleton just  need to import and add to your code.

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
 *Element prop support a string value*.
Valid types: "p", "h1", "h2", "h3", "h4", "h5", "h6", "a", "button", "img", "span", "input", "label".

Example:

    <Skeleton element="h1" />

 - **Width:**

You can choose the width of the placeholder assigning a percentage or a pixels value.
 *Element prop support a string value*.

Example:

    <Skeleton width="100%" />
    <Skeleton width="20px" />


 - **Height:**

You can choose the width of the placeholder assigning a pixels value.
 *Element prop support a string value*.

Example:

    <Skeleton width="20px" />

 - **Col:**

According bootstrap grid, Skeleton can accepts col number between 1 and 12. Default value is 4.
 *Element prop support a string number*.

Example:

    <Skeleton column={4} />

 - **Size:**

Throught size prop, can change the default height value of the element to increase or decrease that. 
 *Element prop support a string string*.
 Size valid values: "xs", "sm", "lg"

Example:

    <Skeleton size="md" />
    <Skeleton size="lg" />
