import React from 'react';
import './Page.sass';

export default class Page extends React.Component {
  
  render() {
    const { title, subtitle, html } = this.props;
    let elementTitle, elementSubTitle;

    elementTitle = (<h1 className="title">{title}</h1>)
    elementSubTitle=(subtitle? (<p className="subtitle">{subtitle}</p>):'')
    

    return (
      <div className="root-page">
          <div className="container-page">
              {elementTitle}
              {elementSubTitle}
              <div className="text" dangerouslySetInnerHTML={{ __html: html }}/>
          </div>
      </div>
    );
  }
}


