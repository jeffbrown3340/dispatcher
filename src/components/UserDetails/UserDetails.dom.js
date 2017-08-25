import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config.base';
import { BrowserRouter, Route, Link, history } from 'react-router-dom'

//@todo: Add route to App.dom.js
//import UserDetails from './src/components/UserDetails/UserDetails.dom';
//<Route exact path="/users/create" component={UserDetails} />

class UserDetails extends Component {
    state = {
        acctNum: '',
        nameLastCompany: '',
        nameFirstMI: '',
        physAddress: '',
        eMail: '',
        phone: ''
    }

    clearState() {
        console.log("84-1002");
        this.setState({
            acctNum: '',
            nameLastCompany: '',
            nameFirstMI: '',
            physAddress: '',
            eMail: '',
            phone: ''
        })        
    }

    saveItem(event) {
        axios.post(`${config.baseApiUrl}api/users`, this.state)
            .then(response => {
                this.clearState();
                this.props.history.push('/userdetails');
            });
    }

    navToSRC() {
        this.props.history.push('/servicereqcreate');
    }

    navToSRVSD() {
        this.props.history.push('/srvsd');
    }

    render() {
        return (
            <div>
                <h1 style={styles.pageTitle}>user details</h1>
                <div className='row'>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>account number</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.acctNum}
                            onChange={event => this.setState({ acctNum: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>surname or company</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.nameLastCompany}
                            onChange={event => this.setState({ nameLastCompany: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>first name</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.nameFirstMI}
                            onChange={event => this.setState({ nameFirstMI: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>location address</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.physAddress}
                            onChange={event => this.setState({ physAddress: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>email</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.eMail}
                            onChange={event => this.setState({ eMail: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>phone</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.phone}
                            onChange={event => this.setState({ phone: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <button className='btn btn-danger' onClick={this.saveItem.bind(this)}>create<br />account</button>
                        <button style={styles.navToSRVSD} className='btn btn-danger' onClick={this.navToSRVSD.bind(this)}>change to<br />req screen</button>
                        <button style={styles.navButton} className='btn btn-danger' onClick={this.navToSRC.bind(this)}>change to<br />create req screen</button>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    pageTitle: {
        color: 'white',
        fontWeight: 'bold'
    },
    fieldLabel: {
        marginBottom: 0,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'        
    },
    inputText: {
        marginBottom: 12,
        width: 500
    },
    
    navButton: { marginLeft: 20},
    navToSRVSD: { marginLeft: 20}
}

export default UserDetails;