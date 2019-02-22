
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

import logo_texto_color from './media/logo.svg';
import social_facebook from './media/social_facebook.svg';
import newsletter from './media/newsletter.png'
import social_instagram from './media/social_instagram.svg';
import social_twitter from './media/social_twitter.svg';
const URL_PUBLIC_MEDIA = "/media/favicon"

let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i

class Footer extends React.Component {
  constructor() {
      super()
      this.state = {
        email:""
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick() {
    if (!this.state.email.match(regexEmail)) {
      console.log("no valido")
      return 
    }
    console.log("valido", this.state.email)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'radio' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      email: value
    });
  }

  
  render() {
    const bgStyle = {
      backgroundImage: `url(${newsletter})`,
    };
    
    return (
      <section className="footerContent">
        
        <div style={bgStyle} className="footerContent__newslatter">
          <div className="footerContent__eleme padding">
            <p className="title">Newsletter</p>
            <input className="element elementEmail" value={this.state.email} onChange={this.handleInputChange}  placeholder="Email:" name="email" type="email"/>
            <button className="element elementBtn" onClick={this.handleClick}>Suscríbete</button>
          </div>
        </div>

        <div className="footerContent__menu padding">
          
          <div className="footerContent__img">
            <img className="imgEmpresa" src={`${URL_PUBLIC_MEDIA}/returnlearning300px.png`}></img>
            <div className="footerContent__imgSociales">
              <div className="footerContent__imgSocialesGrid">
                <img className="imgSociale" src={social_facebook}></img>
                <img className="imgSociale" src={social_twitter}></img>
                <img className="imgSociale" src={social_instagram}></img>
              </div>
            </div>
          </div>


          <div className="footerContent__linksGrid">
            <Link className="link" to="/">
              Home
            </Link>
            
            <Link className="link" to="#">
            Link Abcde
            </Link>
            
            <Link className="link" to="#">
            Link Abcde
            </Link>
            
            <Link className="link" to="#">
            Link Abcde
            </Link>
            
            <Link className="link" to="#">
            Link Abcde
            </Link>
            
            <Link className="link" to="#">
            Link Abcde
            </Link>

            <Link className="link" to="#">
            Link Abcde
            </Link>
          </div>

          <div className="registro">
            <address className="textregistro"> ©Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore sequi consectetur doloremque dolorem amet adipisci nostrum. Sint aperiam, aliquid repellat impedit libero cumque iusto blanditiis, ratione molestias quod recusandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore sequi consectetur doloremque dolorem amet adipisci nostrum. Sint aperiam, aliquid repellat impedit libero cumque iusto blanditiis, ratione molestias quod recusandae. </address>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
