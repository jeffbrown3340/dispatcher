import React from 'react';
import axios from 'axios';
import HomeScreenBase from './HomeScreen.base';
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import config from '../../config.base';

class HomeScreen extends HomeScreenBase {
    state = {
        loginAttempts: 0,
        loggedInRep: '',
        acctNum: ''

    }

    consoleLogin() {
        var loginAttempts = this.state.loginAttempts;
        axios.get(`${config.baseApiUrl}api/users`, {params: {ownerRep: this.state.acctNum}})
            .then(response => {
                var loggedInRep = "";
                if (!response.data.length) {
                    loginAttempts++;
                    console.log("Unsuccessful login attempts: ", loginAttempts);
                } else {
                    loginAttempts = 0;
                    loggedInRep = this.state.acctNum;
                }
                this.setState({
                    loginAttempts: loginAttempts,
                    acctNum: '',
                    loggedInRep: loggedInRep,
                });
            });
    }

    render() {
        return (
            <div className='row'>
                <div style={styles.font18}>Console Login</div>
                <div className='col col-xs-12'>
                    <input type="text"
                        value={this.state.acctNum}
                        onChange={event => this.setState({ acctNum: event.target.value })}
                    />
                </div>
                <div className='col col-xs-12' style={styles.loginButtonDiv}>
                    <button style={styles.loginButton} className='btn btn-danger' onClick={this.consoleLogin.bind(this)}>Login</button>
                </div>
                <div className='col col-xs-12' style={styles.footnoteText}>
                    8/24/2017<br />
                    current development (next):<br />
                    --console req select into edit req details<br />
                    --authentication<br />
                    --native app request create<br />
                    --more...
                </div>
            </div>
            
        );
    }

    componentDidUpdate() {
        if (this.state.loggedInRep != '') this.nextPage();
    }

    nextPage() {
        this.props.history.push('/srvsd');

    }
}

const styles = {
    footnoteText: {
        marginBottom: 0,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'        
    },
    font18: {
        marginLeft: 10,
        padding: 5,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'        
    },
    
    loginButtonDiv: { padding: 10 },
    loginButton: { margin: 5 }
}

export default HomeScreen;