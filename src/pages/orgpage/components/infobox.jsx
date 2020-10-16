import React, { Component } from 'react';

export default class InfoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
         
        };
      }
      componentDidMount() {
        fetch("http://46.17.43.203:10101/api/form/taxipool/1345863141")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
    
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      //const pp = items.filter(item => this.props.kind == item.kind)
      
      return (
        123
      );
   
   
    }
  }
}
