const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined

const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined

const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' :
    undefined

const tooYoung = value =>
    value && value < 13 ?
    'You do not meet the minimum age requirement!' :
    undefined

const aol = value =>
    value && /.+@aol\.com/.test(value) ?
    'Really? You still use AOL for your email?' :
    undefined

const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value) ?
    'Only alphanumeric characters' :
    undefined

const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value) ?
    'Invalid phone number, must be 10 digits' :
    undefined




/**
 * This Validation-Object provide of validations Functions to this App.
 * This is the frontend validation.
 */
let Validation= {
    required: required,
    alphaNumeric: alphaNumeric,

    maxLength: maxLength,
    minLength: minLength,    
    minValue: minValue,
    
    email: email, 
    number: number,
    phoneNumber: phoneNumber,
    aol: aol,
    tooYoung: tooYoung
}

export {
    Validation
}