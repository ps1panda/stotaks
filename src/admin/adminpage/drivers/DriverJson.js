import React, { Component } from 'react';

export default class DriverJson extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      componentDidMount() {
        fetch("http://63.250.58.86:10101/api/drivers")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
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
      return (<tr><td>Ошибка: {error.message}</td></tr>);
    } else if (!isLoaded) {
      return <tr><td>Загрузка...</td></tr>;
    } else {
      return (
        <tr>
          {items.map(item => (
            <td key={item.name}>
              {item.name} {item.price}
            </td>
          ))}
        </tr>
      );
    }
  }
}
