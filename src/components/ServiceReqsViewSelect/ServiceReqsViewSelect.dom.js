import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config.base';
import { Link } from 'react-router-dom';

// {
//     "_id" : ObjectId("5985555b0f55922c9036edb3"),
//     "sourceAcct" : "Call Martha 800-555-1212",
//     "reqType" : "Rescue cat from room",
//     "ownerRep" : "123",
//     "status" : "Pending"
// }

class ServiceReqsViewSelect extends Component {
    state = {
        loggedInRep: '',
        repCallMe: '',
        selectedReq: '',
        serviceReqs: []
     }

    componentDidMount() {
        axios.get(`${config.baseApiUrl}api/servicereqsd`)
            .then(response => {
                console.log("814-0033", response.data);
                this.setState({
                    serviceReqs: response.data
                });
            });
    }

    navToSRC() {
        this.props.history.push('/servicereqcreate');
    }


    render() {
        return (
            <div>
                <h3 style={styles.pageTitle}>
                    <span>Service Requests</span>
                    <span><button style={styles.navButton} className='btn btn-danger' onClick={this.navToSRC.bind(this)}>change to<br />create req screen</button></span>
                </h3>
                {this.state.serviceReqs.map(servicereq => (
                    <div key={servicereq._id} className='row'>
                        <div className='col' style={styles.buttonDiv}>
                            <button style={{'width': '100%', 'maxWidth': '260px', 'whiteSpace': 'normal'}} className="btn btn-danger">
                                {servicereq.ownerRep + " — " + servicereq.sourceAcct + " — " + servicereq.status}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const styles = {
    navButton: {
        marginLeft: 20
    },
    buttonDiv: {
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20
    },
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
    }
}

export default ServiceReqsViewSelect;