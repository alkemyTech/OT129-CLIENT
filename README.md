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
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
***
## Use Sweet Alert 2

### 1 - Use a method called `alerts` in file alerts.js 

### This method recive 2 arguments:

* title: the message to be displayed.(string)
* icon: the icon to be displayed.(string)

### There are 5 different icons:

* "success"
* "error"
* "info"
* "warning"
* "question"

### Example: 

```
alerts("Title message", "success");
```

### Result:
![plot](https://i.ibb.co/883s3dH/example.jpg)


### 2 - Use a method called `confirmAlerts` in file alerts.js 

### This method recive 3 arguments:

* title: confirmation title to be displayed.(string)
* text: descriptive text to be displayed.(string)
* callback: a function that is triggered when the user clicks on the confirmation button.(function)

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
              console.log(res);
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



  

