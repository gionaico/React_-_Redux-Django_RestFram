
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

import logo_texto_color from './media/logo.svg';
import social_facebook from './media/social_facebook.svg';
import newsletter from './media/newsletter.png'
import social_instagram from './media/social_instagram.svg';
import social_twitter from './media/social_twitter.svg';

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
      <div className="footerContent">
        
        <div style={bgStyle} className="footerContent__newslatter">
          <div className="footerContent__eleme padding">
            <p className="title">Newsletter</p>
            <input className="element elementEmail" value={this.state.email} onChange={this.handleInputChange}  placeholder="Email:" name="email" type="email"/>
            <button className="element elementBtn" onClick={this.handleClick}>Suscríbete</button>
          </div>
        </div>

        <div className="footerContent__menu padding">
          
          <div className="footerContent__img">
            <img className="imgEmpresa" src={logo_texto_color}></img>
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
            <span className="textregistro">© Inscrita en el Reg. Mercantil de Valencia, Tomo 7020, Libro 4323, Folio 205, Sec. 8, Hoja V-80116, C.I.F. B-97.141.410. Inscrita en el Registro General de Empresas de Venta a Distancia del Ministerio de Industria, Comercio y Turismo, con el número (NEVA) 2002/0300/10/46/9/V. GRUTINET, GRUTINET MOVEMOS TUS VENTAS y GRUTICASH son marcas registradas por GRUTINET, S.L.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
