import '../assets/styles/burguer-menu.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
const URL_PUBLIC_MEDIA = "/media/favicon"

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="list">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="list">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a" />&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link"
          >
            <img src={props.currentUser.image} className="user-pic" alt="" />
            {props.currentUser.username}
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

@inject('userStore', 'commonStore')
@observer
class Header extends React.Component {
  render() {
    return (
      <nav className="">{/* margin-top: 150px               da color al texto del menu*/}
        <div className="menu ">{/*container               centra el texto*/}

          <Link to="/" className="navbar-brand">
            <picture>
              <source media="(min-width: 650px)" srcSet={`${URL_PUBLIC_MEDIA}/returnlearning-200px.png`}/>
              <source media="(min-width: 465px)" srcSet={`${URL_PUBLIC_MEDIA}/returnlearning150px.png`}/>
              <img src={`${URL_PUBLIC_MEDIA}/favicon-96x96.png`} alt="Logo Return Learning" styles="width:auto;"/>
            </picture> 
          </Link>
          <input className="list-btn" type="checkbox" id="list-btn" />
          <label className="list-icon" htmlFor="list-btn"><span className="navicon"></span></label>

          <LoggedOutView currentUser={this.props.userStore.currentUser} />

          <LoggedInView currentUser={this.props.userStore.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
