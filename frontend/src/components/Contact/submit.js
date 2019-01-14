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
  return agent.Contact.sendEmail({
      /* email: values.email, */
      company: values.username,
      projectDescription: values.username
    }).then((res) => {
    console.log("v-------------",res)
    if (res.email && !res.status) {
      console.log("v-------------", res)
      throw new SubmissionError({
        username: res.message,
        _error: 'Login failed!'
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(res, null, 2)}`)
    }
  })

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