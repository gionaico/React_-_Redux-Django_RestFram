import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Validation} from '../../utils/validations'
import submit from './submit'

const maxLength15 = Validation.maxLength(15)

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)


const ContactForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field 
        name="username" 
        type="text"
        component={renderField} 
        label="Username"
        validate = {[
          Validation.required, 
          maxLength15
        ]}
      />
      <Field 
        name="email" 
        type="email"
        component={renderField} 
        label="Email"
        validate={Validation.email}
        warn = {
          Validation.aol
        }
      />
      <Field 
        name="age" 
        type="number"
        component={renderField} label="Age"
        validate = {[
          Validation.required, 
          Validation.number, 
          
        ]}
        warn={Validation.tooOld}
      />

      { /* This is a error which come from backend answer */ }
      {error && <strong>{error}</strong>} 
      
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'contactForm' // a unique identifier for this form
})(ContactForm)