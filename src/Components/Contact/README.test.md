# Unit Test Contact Form

## Cases:

1. `Should display an error message if an input is empty when submit:` 
    - Render error message of required input if the input is empty when submitting.

2. `Shouldn't dispatch if form is not validated:`
    - Not execute the dispatch call if the form inputs were not validated.

3. `Should dispatch if all fields exists and were validated:` 
    - Test that the dispatch call is executed just if all the fields were validated.

4. `Should make request in action Creator:`
    - Test that the dispatch is execute and point to the correct endpoint to make the post request.

5. `Should display the success alert if the form has been sent:`
    - Render an alert message of success if the form was sent.

6. `Should display the error alert if the form has not been sent:`
    - Render an alert message of error if the form was not sent.