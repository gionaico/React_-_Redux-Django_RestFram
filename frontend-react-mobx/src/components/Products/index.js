import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import Hero from '../Hero';
import MainView from './MainView';
import './products.sass';
import banner from './media/contacto_bg.png'

@inject('commonStore')
@withRouter
@observer
export default class Products extends React.Component {

  componentDidMount() {
    
  }
  render() {
    
    return (
      <div>
        <Hero title="Nuestros cursos" bg={banner} />
        <div className="products-container">
              <MainView />
        </div>
      </div>
    );
  }
}

//serializer = RegistrationSerializer(data={u'username': u'yomogan', u'password': u'yy', u'email': u'yomogan@gmail.com'})
/* 

python manage.py shell
from rest_framework import serializers
from conduit.apps.authentication.serializers import SocialLoginSerializer
serializer = SocialLoginSerializer(data={u'username': u'yy', u'password': u'yy', u'email': u'gionaico@gmail.com'})
serializer.is_valid(raise_exception = True)


serializer.data
serializer.error
 */

