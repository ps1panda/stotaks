import React, { Component } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
export default class MapOrg extends Component {
  render() {
    return (
        <YMaps>
        <div>
       
        <Map width='100%' height='400px' defaultState={{ center: [55.75, 37.57], zoom: 11 }} />
        </div>
    </YMaps>
    );
  }
}
