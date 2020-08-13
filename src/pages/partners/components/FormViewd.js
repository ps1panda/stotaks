import React, { Component } from 'react'

import Partnerveryfication from './partner_veryfication'
import Emailverification from './email_verification'
import Regform from './regform.js'


export default class FormViewd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            whatshow: '1',
            link: ''
        };

    };
    updateData = (value) => {
        this.setState({ whatshow: value })
    }
    render() {
        if (this.state.whatshow === '1') {
            return ( < Regform updateData = { this.updateData }/>
            )
        } else if (this.state.whatshow === '2') {
            return ( < Partnerveryfication /> )
        } else if (this.state.whatshow === '3') {
            return ( < Emailverification />

            )
        }

    }
}