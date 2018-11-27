import React, { Component } from 'react';
import GyroscopicSensor from '../GyroscopicSensor/GyroscopicSensor';
import IonDriveSensor from '../IonDriveSensor/IonDriveSensor';
import FlameSensor from '../FlameSensor/FlameSensor'; // Your flames don't look very... flamey
// This used to look so pretty! What's the problem? Did you lose your sense of style?
import './Sensors.css';

class Sensors extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Sensors</h2>
                <div className='sensor-container'>
                    <GyroscopicSensor />
                    <IonDriveSensor /> {/* error was here */}
                    <FlameSensor />
                </div>
            </div>
        );
    }
}

export default Sensors;
