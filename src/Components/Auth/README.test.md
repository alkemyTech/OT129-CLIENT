# Unit Test Register Form

## Cases:

1. `Displaying error messages if required fields are empty:`
    - Render alerts `<div>` with correct messages if the inputs aren't filled.
2. `Preventing submit dispatch if form insn't validated:`
    - getRegistered service isn't allowed to be requested if the fields aren't validated properly.
3. `If required fields are valid, should dispatch onSubmit:`
    - onSubmit method should be dispatched when the fields are validated.
4. `Should make request at the right endpoint:` 
    - The HTTP request is working properly and matching the the correct endpoint.
5. `Should display status messages according to the HTTP request:` 
    - The component handles status messages properly and this it's showed to the user correctly.
