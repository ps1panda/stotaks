const React = require('react')
class Uploadimg extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: './Rectangle457.jpg'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div className="banner_upload">
        
        <img src={this.state.file}/>
        <input type="file" onChange={this.handleChange}/>
      </div>
    );
  }
}
module.exports = Uploadimg