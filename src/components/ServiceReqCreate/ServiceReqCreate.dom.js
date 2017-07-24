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
        ownerRep: 0,
        status: ''
    }

    saveItem(event) {
        axios.post(`${config.baseApiUrl}api/servicereqs`, this.state)
            .then(response => {
                this.props.history.push('/servicereqcreate');
            });
    }

    render() {
        return (
            <div>
                <h1>serviceReqs</h1>
                <div className='row'>
                    <div className='col col-xs-12'>
                        <label>sourceAcct:</label>
                        <input type="text"
                            value={this.state.sourceAcct}
                            onChange={event => this.setState({ sourceAcct: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>reqType:</label>
                        <input type="text"
                            value={this.state.reqType}
                            onChange={event => this.setState({ reqType: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>ownerRep:</label>
                        <input type="text"
                            value={this.state.ownerRep}
                            onChange={event => this.setState({ ownerRep: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>status:</label>
                        <input type="text"
                            value={this.state.status}
                            onChange={event => this.setState({ status: event.target.value })}
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

export default serviceReqs;