# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

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

## Use Progress component!

- Custom JSX and CSS component.
- CSS root variables custom styles.

### Example:

```
  <Progress />;
```

### Result:

![plot](https://imgur.com/4qLJ6E2)
