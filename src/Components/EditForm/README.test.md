# Unit Test Contact Form

## Cases:

1. `Should display an error message if an input is empty when submit:` 
    - Render error message of required input if the input is empty when submitting.

2. `Shouldn't make a put request if form is not validated:`
    - Not execute the dispatch call if the form inputs were not validated.

3. `Should make a put request if form is validated and show a succes message:` 
    - Test that the dispatch call is executed just if all the fields were validated and show a success message.

4. `Should make a put request if form is validated and show a error message:`
    - Render an alert message of error if the form was not sent.