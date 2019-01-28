import React from 'react';
import './Hero.sass';

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, subtitle, channel, vidId, ...props } = this.props;
    const bgStyle = {
      backgroundImage: `url(${this.props.bg})`,      
    };

    return (
      <div className="hero-container">
        <div style={bgStyle} className="bg">
          <div className="text">
            <h1 className="title">{title}</h1>
            <h2>{subtitle}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
