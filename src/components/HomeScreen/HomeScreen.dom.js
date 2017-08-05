import React from 'react';
import axios from 'axios';
import HomeScreenBase from './HomeScreen.base';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import config from '../../config.base';

class HomeScreen extends HomeScreenBase {
    state = {
        acctNum: ''
    }

    consoleLogin(event) {
        console.log("84-0136", event);
        axios.post(`${config.baseApiUrl}api/users`, this.state)
            .then(response => {
                this.props.history.push('/servicereqcreate');
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
                    {/* <Link to="/userdetails"><button style={styles.loginButton} className='btn btn-danger' onClick={this.consoleLogin.bind(this)}>Login</button></Link> */}
                    <button style={styles.loginButton} className='btn btn-danger' onClick={this.consoleLogin.bind(this)}>Login</button>
                </div>
            </div>
            
        );
    }
}

const styles = {
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