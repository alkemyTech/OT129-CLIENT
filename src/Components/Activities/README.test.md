# Unit Test Activities Form 

## Cases:

1. `Should show validation errors:`
    - Render with validation errors

2. `Should pass the validations and not show validation errors:` 
    - If it passes the validations it should not render the validation errors.

3. `Should show validation errors and not let the submit be done:` 
    - Must render the validation errors and not allow the request to be made.

4. `Should show create form:` 
    - Must render the activity creation form component.

5. `Should show edit form:` 
    - Mustmust render the activity edit form component.

6. `Should do the submit and create an activity correctly:` 
    - This test should verify that the correct post request for the form is made and should display the confirmation alert

7. `Should make the shipment and show the error that it could not be created correctly:` 
    - This test should verify that the post request of the form cannot be made and show the error alert

8. `Should do the submit and edit an activity correctly:` 
    - This test should verify that the dispatch can be done and that the function can be edited correctly by displaying an alert message
9. `Should make the shipment and show the error that it could not be edit correctly:` 
    - This test must validate that the form is sent and that if it finds an error it shows an alert
