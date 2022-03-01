# Test unitarios

## RegisterForm:

- `Displaying error messages if required fields are empty`: Render alerts `<div>` with correct messages if the inputs aren't filled.
- `Preventing submit dispatch if form insn't validated`: getRegistered service isn't allowed to be requested if the fields aren't validated properly.
- `If required fields are valid, should dispatch onSubmit`: onSubmit method should be dispatched when the fields are validated.
- `Should make request at the right endpoint`: the HTTP request is working properly and matching the the correct endpoint.
- `Should display status messages according to the HTTP request`: the component handles status messages properly and this it's showed to the user correctly.

## LoginForm:

- `Displaying error messages if required fields are empty`: Render alerts `<div>` with correct messages if the inputs aren't filled.
- `Preventing submit dispatch if form insn't validated`: getRegistered service isn't allowed to be requested if the fields aren't validated properly.
- `If required fields are valid, should dispatch onSubmit`: onSubmit method should be dispatched when the fields are validated.
- `Should make request at the right endpoint`: the HTTP request is working properly and matching the the correct endpoint.
- `Should display status messages according to the HTTP request`: the component handles status messages properly and this it's showed to the user correctly.
