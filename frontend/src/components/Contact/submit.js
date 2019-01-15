import { SubmissionError } from 'redux-form'
/* import { connect } from 'react-redux'; */
import agent from '../../agent';
/* import {
  CONTACT_SEND_MAIL_SUCCESS
} from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  s: payload =>
    dispatch({
      type: CONTACT_SEND_MAIL_SUCCESS,
      payload
    })
});
 */

function submit(values) {
  console.log("v-------------", values)

  /* fetch(`http://localhost:4000/api/contact`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify ({data:{
        emaili: values.email,
        company: values.username,
        projectDescription: values.username
      }})
    })
    .then((result) => result.json())
    .then((result) => {

        console.log(result)
    }); */
  return agent.Contact.sendEmail({
      emaili: values.email,
      company: values.username,
      projectDescription: values.username
    }).then((response) => {
    console.log("v-------------",response)
    if (response.email && !response.status) {
      console.log("v-------------", response)
      throw new SubmissionError({
        username: response.message,
        _error: 'Login failed!'
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(response, null, 2)}`)
    }
  })
  .catch(err => {
    console.log(err.message, err.response)
  });

  /* .catch(err => console.log("v-------------", err)) */

};
export default submit
/* export default connect(() => ({}), mapDispatchToProps)(submit); */


/* 
import { SubmissionError } from 'redux-form'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(3000).then(() => {
    // simulate server latency
    if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!'
      })
    } else if (values.age !== 'redux-form') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!'
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  })
}

export default submit
 */