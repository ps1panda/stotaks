import React, { Component } from 'react'

export default class adminMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            whatadminpage: 'admin',
            title: ''
        };
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
        this.handleClick5 = this.handleClick5.bind(this)
        this.handleClick6 = this.handleClick6.bind(this)
    };
    handleClick1(){
        this.setState({
            whatadminpage:'adminhome',
            title :'Главная страница'
        })
     this.props.updateData(this.state.whatadminpage, this.state.title)
     
       
    }
    handleClick2(){
        this.setState({
            whatadminpage:'admindrivers',
            title :'Анкеты водителей'
        })
     this.props.updateData(this.state.whatadminpage)
       
    }
    handleClick3(){
        this.setState({
            whatadminpage:'adminpartners',
            title :'Анкеты водителей'
        })
     this.props.updateData(this.state.whatadminpage)
    }
    handleClick4(){
        this.setState({
            whatadminpage:'adminnews',
            title :'Анкеты водителей'
        })
     this.props.updateData(this.state.whatadminpage)
    }
    handleClick5(){
        this.setState({
            whatadminpage:'adminabout',
            title :'Анкеты водителей'
        })
     this.props.updateData(this.state.whatadminpage)
    }
    handleClick6(){
        this.setState({
            whatadminpage:'adminwiki',
            title :'Анкеты водителей'
        })
     this.props.updateData(this.state.whatadminpage)
    }
    render() {
        return (
            
                <nav className='adminmenu'>
                    <a href="../admin/adminhome" onClick={this.handleClick1}>Главная страница</a>
                    <a href="../admin/driverlist" onClick={this.handleClick2}>Анкеты водителей</a>
                    <a href="../admin/partnerslist" onClick={this.handleClick3}>Анкеты организаций</a>
                    <a href="../admin/newslist" onClick={this.handleClick4}>Новости такси</a>
                    <a href="../admin/aboutlist" onClick={this.handleClick5}>О сообществе</a>
                    <a href="../admin/wikilist" onClick={this.handleClick6}>Энциклопедия такси</a>
                </nav>
            
        )
    }
}
