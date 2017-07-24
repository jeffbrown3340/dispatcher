import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config.base';

//@todo: Add route to App.dom.js
//import UserDetails from './src/components/UserDetails/UserDetails.dom';
//<Route exact path="/users/create" component={UserDetails} />

class UserDetails extends Component {
    state = {
        acctNum: '',
        nameLastCompany: '',
        nameFirstMI: '',
        nameCallMe: '',
        billAddress: '',
        physAddress: '',
        eMail: '',
        phone: {
            phPrimary: true,
            phType: '',
            phNum: ''
        }
    }

    saveItem(event) {
        axios.post(`${config.baseApiUrl}api/users`, this.state)
            .then(response => {
                //this.props.history.push('/usersdetails');
            });
    }

    render() {
        return (
            <div>
                <h1>UserDetails</h1>
                <div className='row'>
                    <div className='col col-xs-12'>
                        <label>acctNum</label>
                        <input type="text"
                            value={this.state.acctNum}
                            onChange={event => this.setState({ acctNum: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>nameLastCompany:</label>
                        <input type="text"
                            value={this.state.nameLastCompany}
                            onChange={event => this.setState({ nameLastCompany: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>nameFirstMI:</label>
                        <input type="text"
                            value={this.state.nameFirstMI}
                            onChange={event => this.setState({ nameFirstMI: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>nameCallMe:</label>
                        <input type="text"
                            value={this.state.nameCallMe}
                            onChange={event => this.setState({ nameCallMe: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>billAddress:</label>
                        <input type="text"
                            value={this.state.billAddress}
                            onChange={event => this.setState({ billAddress: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>physAddress:</label>
                        <input type="text"
                            value={this.state.physAddress}
                            onChange={event => this.setState({ physAddress: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>eMail:</label>
                        <input type="text"
                            value={this.state.eMail}
                            onChange={event => this.setState({ eMail: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>phone.phPrimary:</label>
                        <input type="text"
                            value={this.state.phone.phPrimary}
                            onChange={event => this.setState({ phone:Object.assign({}, this.state.phone, {phPrimary: event.target.value })})}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>phone.phType:</label>
                        <input type="text"
                            value={this.state.phone.phType}
                            onChange={event => this.setState({ phone:{...this.state.phone, phType: event.target.value }})}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>phone.phNum:</label>
                        <input type="text"
                            value={this.state.phone.phNum}
                            onChange={event => this.setState({ phone:{...this.state.phone, phNum: event.target.value }})}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <button onClick={this.saveItem.bind(this)}>Create</button>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {

}

export default UserDetails;