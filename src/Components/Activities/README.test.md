# Test unitarios

## Casos testeados:

- `Should show validation errors`: Render with validation errors

- `Should pass the validations and not show validation errors`: If it passes the validations it should not render the validation errors.

- `Should show validation errors and not let the submit be done`: must render the validation errors and not allow the request to be made.

- `Should show create form`: must render the activity creation form component.

- `Should show edit form`: must render the activity edit form component.

- `Should do the submit and create an activity correctly`: This test should verify that the correct post request for the form is made and should display the confirmation alert

- `Should make the shipment and show the error that it could not be created correctly.`: this test should verify that the post request of the form cannot be made and show the error alert

- `Should do the submit and edit an activity correctly`: this test should verify that the dispatch can be done and that the function can be edited correctly by displaying an alert message
- `Should make the shipment and show the error that it could not be edit correctly.`: este test deve validar que se haga el submit del formulario y que si encuentra un error me muestre una alerta
