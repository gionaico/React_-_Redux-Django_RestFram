import { SubmissionError } from 'redux-form'
/* import { connect } from 'react-redux'; */
import agent from '../../agent';


/*Sweet Alert */
import Swal from "sweetalert2";



function submit(values) {
  console.log("v-------------", values)

  return agent.Contact.sendEmail(
    {
      emaili: values.email,
      company: values.username,
      projectDescription: values.username
    }
  ).then((response) => {
    console.log("v-------------",response)
    const toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 4000
    });

    toast({
      type: 'success',
      title: 'Your message has been sended!'
    })
  })
  .catch(err => {
    console.log(err.message, "----------", err.response, "----------", err.response.body.errors)    
    const toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 4000
    });

    toast({
      type: 'error',
      title: 'Something went wrong!'
    })

    let errores = err.response.body.errors;
    if (errores.email) {
      throw new SubmissionError({
        username: errores.email,
        _error: "Contact failed!"
      });
    }
  });

};
export default submit
