
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MainBanner.sass';

class MainBanner extends React.Component {
   

    static propTypes = {
        list: PropTypes.arrayOf(
            PropTypes.shape({
                icon: PropTypes.string,/*SERA DE FONDO de icono TIENE QUE LLEGAR COMO BACKGROUND */
                iconText: PropTypes.string,
                title: PropTypes.string,
                text: PropTypes.string,
                to: PropTypes.string,
                bg: PropTypes.string,/*BACKGROUD GRANDE DE LAS 3 SEECCIONES EN QUE SE DIVIDE */
            }),
        ),
    };
    
    constructor(props) {
        super(props);
    }
    
    static defaultProps = {    
        list:[]
    }
  
    render() {

        let bgStyle2 = [];        
            bgStyle2[0] = {
                backgroundImage: `url(${this.props.list[0].bg})`,      
            };
            bgStyle2[1] ={
                backgroundImage: `url(${this.props.list[1].bg})`,      
            };
            bgStyle2[2] ={
                backgroundImage: `url(${this.props.list[2].bg})`,      
            };
        
        return (            
            <div className="galleryWrap">                
                {this.props.list.map((ic, i) => (                    
                    <div key={i} className="item" style={bgStyle2[i]}>
                        <Link to={ic.to}>
                            <div className="divDentro">
                                <div className="gridDivDentro">
                                    <img className="imgN" src={ic.icon} />
                                    <p>{ic.iconText}</p>
                                </div>
                                
                            </div>
                        </Link>
                    </div>
                ))}
            </div> 
        );
    }
  }
  
  export default MainBanner;
