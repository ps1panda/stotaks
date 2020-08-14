import React, { Component } from 'react'

export default class Videoedit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editable: '0'
        };
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    };
    
    handleClick2(){
        this.setState({
            editable:'0',
           
        })
        
        var els = document.querySelectorAll('input');
        for (var i=0; i < els.length; i++) {
            els[i].setAttribute('readonly', 'true')
        }
     this.props.updateData(this.state.editable)
     
       
    }
    handleClick1(e){
        this.setState({
            editable:'1',
           
        })
        console.log()
        var els = document.querySelectorAll('.' + e.target.parentNode.parentNode.getAttribute('class').split(' ')[0] + ' input');
        for (var i=0; i < els.length; i++) {
            els[i].setAttribute('readonly', 'false')
        }
     this.props.updateData(this.state.editable)
     
       
    }
    render() {
        if(this.state.editable === '0'){
            return(
            <button className='blue_btn' onClick={this.handleClick1}>
                Редактировать
            </button>               
            )
            
        }
        else{
            return(
                <div className="buttons">
                    <button className='blue_btn'>Сохранить изменения</button>
                    <button className='an_btn' onClick={this.handleClick2}>Отменить</button>
                </div>
            )
        }
    }
}