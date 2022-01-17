import { getExistingEmail, randomEmail } from '../../support/utils'

describe('Authentication Page', () => {

  it ('should show error for invalid email address', () => {
    // TODO:
    //  Type invalid email in email field in Create An Account block
    //  Click Submit
    //  Assert that email form has class 'form-error'
    //  Assert that error displays and contains text 'Invalid email address'
  })

  it ('should show error for taken email address', () => {
    // TODO:
    //  Type valid, existing email in email field
    //  Click Submit
    //  Assert that email form has class 'form-ok'
    //  Assert that error displays and contains text 'An account using this email address has already been registered.'

    const existingEmail = getExistingEmail()
  })

  it ('should accept valid email address', () => {
    // TODO:
    //  Type random, valid email in email field
    //  Click Submit
    //  Assert that email form has class 'form-ok'
    //  Assert that new page URL includes '#account-creation'

    const email = randomEmail()
  })
})
