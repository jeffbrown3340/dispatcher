import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config.base';

//@todo: Add route to App.dom.js
//import serviceReqs from './src/components/serviceReqs/serviceReqs.dom';
//<Route exact path="/servicereqs/create" component={serviceReqs} />

class serviceReqs extends Component {
    state = {
        sourceAcct: "",
        reqType: '',
        ownerRep: '',
        status: ''
    }

    saveItem(event) {
        axios.post(`${config.baseApiUrl}api/servicereqs`, this.state)
            .then(response => {
                console.log("0804-2240");
                this.props.history.push('/servicereqcreate');
            });
    }

    render() {
        return (
            <div>
                <h1 style={styles.pageTitle}>serviceReqs</h1>
                <div className='row'>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>sourceAcct:</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.sourceAcct}
                            onChange={event => this.setState({ sourceAcct: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>reqType:</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.reqType}
                            onChange={event => this.setState({ reqType: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>ownerRep:</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.ownerRep}
                            onChange={event => this.setState({ ownerRep: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <div><label style={styles.fieldLabel}>status:</label></div>
                        <input style={styles.inputText} type="text"
                            value={this.state.status}
                            onChange={event => this.setState({ status: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <button className='btn btn-danger' onClick={this.saveItem.bind(this)}>create<br />request</button>
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
        marginBottom: 12
    }


}

export default serviceReqs;