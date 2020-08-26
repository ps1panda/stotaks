import React, { Component } from 'react';

export default class Json extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      kind: 1
    };
  }
  componentDidMount() {
    fetch("http://185.167.97.69:10101/api/organizations")
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
      const pp = items.filter(item => this.props.kind == item.kind)

      return (
        <table>
          <tbody>
            {pp.map((item, key) => (
              <tr key={key}>
                
                <td className='td_title'>
                <a href={item.id}>{item.title}</a>
                  
                </td>
                <td  className='td_email'> {item.email}</td>
                <td className='td_phone'> {item.phone}</td>
                <td className='td_website'> {item.website}</td>
                <td className='td_groupNumber'> {item.groupNumber}</td>
                <td className='td_rating'> {item.rating}</td>


              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
}
