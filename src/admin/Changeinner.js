import React, { Component } from 'react'
import AdminHome from './adminpage/Adminhome'
export default class Changeinner extends Component {

    render() {
        if (this.props.whatadminpage  === 'adminhome') {
            return(
            <div>
                <AdminHome />
            </div>
            )

        }
        if (this.props.whatadminpage  === 'admindrivers') {
            return(
                <div>{this.props.title}
                
                
                </div>
            )

        }
        if (this.props.whatadminpage  === 'adminpartners') {
            return(
                <div>{this.props.title}</div>
            )

        }
        if (this.props.whatadminpage  === 'adminnews') {
            return(
                <div>{this.props.title}</div>
            )

        }
        if (this.props.whatadminpage  === 'adminabout') {
            return(
                <div>{this.props.title}</div>
            )

        }
        if (this.props.whatadminpage  === 'adminwiki') {
            return(
                <div>{this.props.title}</div>
            )

        }
        if (this.props.whatadminpage  === 'admin') {
            return(
                <div>{this.props.title}</div>
            )

        }
    }
}
