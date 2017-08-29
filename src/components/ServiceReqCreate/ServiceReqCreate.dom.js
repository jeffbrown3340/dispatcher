import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config.base';
import { BrowserRouter, Route, Link, history } from 'react-router-dom'

//@todo: Add route to App.dom.js
//import serviceReqs from './src/components/serviceReqs/serviceReqs.dom';
//<Route exact path="/servicereqs/create" component={serviceReqs} />

class serviceReqs extends Component {
    state = {
        sourceAcct: "",
        reqType: '',
        ownerRep: '',
        status: 'Pending'
    }

    clearState() {
        this.setState({
            sourceAcct: "",
            reqType: '',
            ownerRep: '',
            status: 'Pending'
        });
    }

    saveItem(event) {
        axios.post(`${config.baseApiUrl}api/servicereqs`, this.state)
            .then(response => {
                this.clearState();
                this.props.history.push('/servicereqcreate');
            });
    }
    
    navToUsers() {
        this.props.history.push('/userdetails');
    }

    navToSRVSD() {
        this.props.history.push('/srvsd');
    }


    render() {
        return (
            <div>
                <h3 style={styles.pageTitle}>Create Service Requests</h3>
                <div className='row'>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>Description for Field Rep</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.sourceAcct}
                            onChange={event => this.setState({ sourceAcct: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>Type of Service Requested</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.reqType}
                            onChange={event => this.setState({ reqType: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>Assign to Field Rep</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.ownerRep}
                            onChange={event => this.setState({ ownerRep: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>Status (leave Pending):</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.status}
                            onChange={event => this.setState({ status: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <button className='btn btn-danger' onClick={this.saveItem.bind(this)}>create<br />request</button>
                        <button style={styles.navToSRVSD} className='btn btn-danger' onClick={this.navToSRVSD.bind(this)}>request<br />console</button>
                        <button style={styles.navToUserButton} className='btn btn-danger' onClick={this.navToUsers.bind(this)}>users</button>
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
        width: 260
    },
    navToUserButton: { marginLeft: 20},
    navToSRVSD: { marginLeft: 20}
}

export default serviceReqs;