import React, { Component } from 'react';
import InfoBox from './components/infobox';
import Sidebar from './components/sidebar';
import TopBox from './components/topbox';

export default class OrgPageLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            org_title: 'ТАКСИ РИТМ',
            page_name: 'organization_page',

        };

    };

    render() {
        return (
            <div>
                <h1 className="zag">{this.state.org_title}</h1>
                <div className="organization_page__wrap">
                    <div className='main_box'>
                        <div className="top_box">
                            <TopBox />
                        </div>
                        <div className="info_box">
                            <InfoBox />
                        </div>
                    </div>
                    <div className='sidebar'>
                        <Sidebar />
                    </div>
                </div>

            </div>
        );
    }
}
