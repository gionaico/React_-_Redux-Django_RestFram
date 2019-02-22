import { withRouter, Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React from 'react';
import { inject, observer } from 'mobx-react';
import firebase from 'firebase'

@inject('authStore')
@withRouter
@observer
export default class Login extends React.Component {

  componentWillUnmount() {
    this.props.authStore.reset();
  }

  handleEmailChange = e => this.props.authStore.setEmail(e.target.value);
  handlePasswordChange = e => this.props.authStore.setPassword(e.target.value);
  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.authStore.login()
      .then(() => this.props.history.replace('/'));
  };

  
  handleAuth = ()=> {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/plus.login')
    const authStore = this.props.authStore
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log(`${result.user.email} ha iniciado sesión`, result)
        authStore.setEmail(result.user.email);
        authStore.setPassword(result.additionalUserInfo.profile.id);
        
        authStore.socialLogin({
          email: result.user.email,
          password: result.additionalUserInfo.profile.id,
          username: result.additionalUserInfo.profile.id,
          token: result.credential.idToken
        }).then(() => {
          console.warn("yesssssssssssssssssss")
          return this.props.history.replace('/')
        });
        
      })
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  render() {
    const { values, errors, inProgress } = this.props.authStore;

    return (
      <div className="auth-page">
      
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to="register">
                  Need an account?
                </Link>
              </p>

              <ListErrors errors={errors} />

              <form onSubmit={this.handleSubmitForm}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={this.handleEmailChange}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={this.handlePasswordChange}
                    />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={inProgress}
                  >
                    Sign in
                  </button>

                </fieldset>
              </form>

              <button
                className='waves-effect waves-light btn blue darken-1'
                onClick={this.handleAuth}>Login
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
