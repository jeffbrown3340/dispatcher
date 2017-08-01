import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import config from '../../config.base';
import { NavigationActions } from 'react-navigation';

class RepLoginScreen extends Component {
    state = {
        ownerRep: '',
        loginAttempts: 0,
        loggedInRep: '',
     }

    repLogin(event) {
        var loginAttempts = this.state.loginAttempts;
        axios.get(`${config.baseApiUrl}api/users`, {params: {ownerRep: this.state.ownerRep}})
            .then(response => {
                var loggedInRep = "";
                if (!response.data.length) {
                    loginAttempts++;
                    console.log("Unsuccessful login attempts: ", loginAttempts);
                } else {
                    loginAttempts = 0;
                    loggedInRep = this.state.ownerRep;
                }
                this.setState({
                    loginAttempts: loginAttempts,
                    ownerRep: '',
                    loggedInRep: loggedInRep,
                });
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.font18}>Field Rep Login</Text>
                    <View>
                        <View>
                            <TextInput type="text"
                                style={styles.textOwnerRep}
                                value={this.state.ownerRep}
                                onChangeText={text => this.setState({ 
                                    ownerRep: text,
                                    loggedInRep: ''
                                })}
                                onSubmitEditing={this.repLogin.bind(this)}
                            />
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.submitButton}  
                                onPress={this.repLogin.bind(this)}>
                                <Text style={styles.font18}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    componentDidUpdate() {
        console.log("81-1130", this.state);
        if (this.state.loggedInRep != '') this.nextPage();
    }

    nextPage() {
        let navigateAction = NavigationActions.navigate({
            routeName: 'ServiceReqsViewSelect',
            params: {
                loggedInRep: this.state.loggedInRep,
            }
        });    
        this.props.navigation.dispatch(navigateAction);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#2180C0'
    },
    inputContainer: {
        flex: 4,
        margin: 5,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#2180C0'
    },
    submitButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        alignItems: 'center'
    },
    font18: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    textOwnerRep: {
        fontSize: 36,
        width: 120,
        height: 40,
        alignItems: 'center',
        borderColor: 'white'

    }


});

export default RepLoginScreen;