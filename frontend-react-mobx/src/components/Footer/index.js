
import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footergloria.css';

import logo_texto_color from './media/logo_grutinet.svg';
import social_facebook from './media/social_facebook.svg';
import newsletter from './media/newsletter.png'
import social_instagram from './media/social_instagram.svg';
import social_twitter from './media/social_twitter.svg';

import Link from '../Link';
let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i

class Footergloria extends React.Component {
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
      <div className={s.footerContent}>
        
        <div style={bgStyle} className={s.footerContent__newslatter}>
          <div className={cx(s.footerContent__eleme, s.padding)}>
            <p className={s.title}>Newsletter</p>
            <input value={this.state.email} onChange={this.handleInputChange}  className={cx(s.element, s.elementEmail)} placeholder="Email:" name="email" type="email"/>
            <button onClick={this.handleClick} className={cx(s.element, s.elementBtn)}>Suscríbete</button>
          </div>
        </div>

        <div className={cx(s.footerContent__menu, s.padding)}>
          
          <div className={s.footerContent__img}>
            <img className={s.imgEmpresa} src={logo_texto_color}></img>
            <div className={s.footerContent__imgSociales}>
              <div className={s.footerContent__imgSocialesGrid}>
                <img className={s.imgSociale} src={social_facebook}></img>
                <img className={s.imgSociale} src={social_twitter}></img>
                <img className={s.imgSociale} src={social_instagram}></img>
              </div>
            </div>
          </div>


          <div className={s.footerContent__linksGrid}>
            <Link className={s.link} to="/">
              Home
            </Link>
            
            <Link className={s.link} to="#">
            Link Abcde
            </Link>
            
            <Link className={s.link} to="#">
            Link Abcde
            </Link>
            
            <Link className={s.link} to="#">
            Link Abcde
            </Link>
            
            <Link className={s.link} to="#">
            Link Abcde
            </Link>
            
            <Link className={s.link} to="#">
            Link Abcde
            </Link>

            <Link className={s.link} to="#">
            Link Abcde
            </Link>
          </div>

          <div className={s.registro}>
            <span className={s.textregistro}>© Inscrita en el Reg. Mercantil de Valencia, Tomo 7020, Libro 4323, Folio 205, Sec. 8, Hoja V-80116, C.I.F. B-97.141.410. Inscrita en el Registro General de Empresas de Venta a Distancia del Ministerio de Industria, Comercio y Turismo, con el número (NEVA) 2002/0300/10/46/9/V. GRUTINET, GRUTINET MOVEMOS TUS VENTAS y GRUTICASH son marcas registradas por GRUTINET, S.L.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footergloria);
