# Unit Test Members Form

## Cases:

1. `Should show error validation messages:`
    - The first test done was to prove if when submitting the form with empty fields, the error messages appear. First, we used the render method  to the form to supply a mocked version of the MembersForm component. Then,  a user event of click to the button of the form was requested, mocking the action of submitting the form without  any field completed.  This whole process was submitted with an asyc action.  Finally,  we used the waitFor method with expect. For the former, the method causes the current thread (what it is inside of the parenthesis) to wait until the process has terminated. For the latter, the expect method is what the test is expecting to receive, in this case the error messages.
2. `Should prevent submiting form whith empty fields:`
    - The second test done was to test if the form can be submitted although the fields were empty. Again, the same methods of render and userEvent click were applied. Also, no data was passed to the test, but, in this case, the mock of toHaveBeenCalled() was used, so,  the user event was test. However, before this method is called a not property was applied to test if even though no data has been passed the mocked function was called.
3. `Should submit and create a member correctly:`
    - Third test was to submit the form and check if a member was created correctly. For this case, first, the MemberForm component had to be modified as for these tests, each field needed a new prop (in this case data-testid), so, when providing mocked data, the test applied the provided mocked data to each input/field. This mocked data was applied outside of the describe block as a const variable. Finally, a user event of click was done and two expect methods were require. The first one, is if the form was submitted and the second one if a correct message appeared in the screen.
4. `Should submit and edit a member correctly:`
    - In the case of the forth test, was the same as the previous one (create member), but, in this case the test was to prove if a member was edited correctly. The same logic was applied except a put petition was applied.
5. `Show error message if the user was not created:`
    - Fifth test was to test if an error message was sent when submitting/creating a new member but there was a problem when the body was sent. The logic to it was the same as the ones mentioned above, excepts this one, instead of data being sent with data: true, in this case, data was sent as false, representing as if something happened during the petition.
6. `Should show error that it could not be edited correctly:`
    - This test, is the same as the one above, except this case is for editing a member.
7. `Should show create form:`
    - The task of this test was to prove if the renderization of the MembersForm when creating a new member is correct. 
8. `Should show edit form:`
    - The task of this test was to prove if the renderization of the MembersForm when editing a new member is correct. 
9. `should make request in action create:`
    - Final test was to prove if the instance of axios was doing correctly the petitions.