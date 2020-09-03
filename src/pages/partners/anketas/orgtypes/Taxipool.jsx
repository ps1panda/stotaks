import React, { Component } from 'react';
import AgreBe from '../../../../fieldsets/agrebe';
import Auto from '../../../../fieldsets/auto';
import Citizenship from '../../../../fieldsets/citizenship';
import Contacts from '../../../../fieldsets/contacts';
import Driverlicense from '../../../../fieldsets/driverlicense';
import Drivingexperience from '../../../../fieldsets/drivingexperience';
import Work from '../../../../fieldsets/work';
import Workexp from '../../../../fieldsets/workexp';

export default class Taxipool extends Component {
  render() {
    return (
        <div>
            <div className="line">
                <Work />
            </div>
            <div className="line">
                    <Contacts />
            </div>
            <div className="line">
                <h1 className="zag">Требования к водителям</h1>
                <Citizenship />
                <Driverlicense />
                <Drivingexperience />
                <Workexp />
                <AgreBe />
            </div>
            <div className="line">
                <h1 className="zag">Автомобили</h1>
                <Auto />
            </div>
        </div>
    );
  }
}
