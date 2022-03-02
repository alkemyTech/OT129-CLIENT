# ***Alerts***

This component has two methods, **`alerts`** and **`confirmAlerts`**

## `1.` **`Alerts`**

 This method recive 2 arguments:

- `title:` the message to be displayed. (string)
- `icon:` the icon to be displayed. (string). There are 5 different icons:


    - "success"
    - "error"
    - "info"
    - "warning"
    - "question"

### Example:

```javascript
alerts("Title message", "success");
```

### Result:

![plot](https://i.ibb.co/883s3dH/example.jpg)

---

## `2.` **`Confirm Alerts`** 

 This method recive 3 arguments:

- `title:` confirmation title to be displayed.(string)
- `text:` descriptive text to be displayed.(string)
- `callback:` a function that is triggered when the user clicks on the confirmation button.(function)

### Example:

```javascript
 confirmAlerts(
      "¿Are you sure?",
      "This element will be deleted permanently",
      function (response) {
        if (response) {
            .then(() => {
              alerts(`The element has been deleted successfully`, "success");
            })
            .catch(() => {
              alerts(`There was an eror traying delete this element `, "error");
            });
        }
      }
    );
```

### Result:

![plot](https://i.ibb.co/X82zPPb/confirm.jpg)

![plot](https://i.ibb.co/PYVQDwJ/deleted.jpg)
