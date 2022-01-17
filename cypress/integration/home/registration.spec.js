describe('Registration Page', () => {
  it ('should use same email as authentication email', () => {
    // TODO:
    //  Assert that the value of the email field is the same as the email used
    //    in the authentication page
  })

  it ('should invalidate empty form', () => {
    // TODO:
    //  Click Register immediately upon entering the page
    //  Assert that error displays and contains the following texts
    //    'firstname is required'
    //    'You must register at least one phone number'
  })

  it ('should invalidate short password', () => {
    // TODO:
    //  Type three character string in password field
    //  Click Register
    //  Assert that error displays and contains text 'passwd is invalid'
  })

  it ('should accept valid form', () => {
    // TODO:
    //  Enter values in all the required fields
    //  Check the 'Mrs.' Title option
    //  Change the Date of Birth year to 1984
    //  Check 'Sign up for our newsletter!'
    //  Change the State to Tennessee
    //  Assert that the page URL includes 'my-account'
  })
})
