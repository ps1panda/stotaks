import React from 'react';
import Json from '../Json/Json.js';
import SearchByName from '../SearchByName.jsx';
import Selectview from '../views/selectview.jsx';
import { YMaps, Map } from 'react-yandex-maps';
import Filters from '../Filters.js';
import {Redirect} from 'react-router-dom';
export default function OrgPage(props) {
 
console.log()
if (!props.location.title) return <Redirect to="/" />;
else{
return (
  <div className="Taxopark_page select_page">
  <div className="wrap">
     

      <h1 className='zag'>{props.location.title}</h1>
      
      <div className="Taxopark_wrap select_wrap">
          <div className='filter'>
             <SearchByName />
              <form action="" className="filters">
              <h3>Поиск по фильтрам</h3>
              <Filters kindfilter={props.location.kindfilter}/>
              </form>
          </div>
          
          <Selectview />
          <div className='select_list'>
             
                      < Json kind={props.location.kind} />
                  
              
          </div>
          <div className='maps'>
          <YMaps>
              <div>
              <p>Выберите ближайший к Вам</p>
              <Map width='100%' height='400px' defaultState={{ center: [55.75, 37.57], zoom: 11 }} />
              </div>
          </YMaps>
          </div>
      </div>
  </div>
</div>
)
}
}
