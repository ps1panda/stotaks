import React from 'react';
import InfoBox from './components/infobox';
import Sidebar from './components/sidebar';
import TopBox from './components/topbox';

export default function OrgPageLayout(props) {
 console.log(props.location.orgid)
 console.log(props.location.orgkind)
         return(
            <div>
                <h1 className="zag">{props.location.org_title}</h1>
                <div className="organization_page__wrap">
                    <div className='main_box'>
                        <div className="top_box">
                            <TopBox />
                        </div>
                        <div className="info_box">
                            <InfoBox idlink={props.location.orgid} orgkind={props.location.orgkind} />
                        </div>
                    </div>
                    <div className='sidebar'>
                    <Sidebar idlink={props.location.orgid} orgkind={props.location.orgkind} />
                    </div>
                </div>

            </div>
        );
    
}

