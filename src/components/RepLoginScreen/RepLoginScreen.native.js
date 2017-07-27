import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import config from '../../config.base';

class RepLoginScreen extends Component {
    state = {
        ownerRep: '',
        serviceReqs: []
     }

    repLogin(event) {
        axios.get(`${config.baseApiUrl}api/servicereqs`, {params: this.state})
            .then(response => {
                this.setState({serviceReqs: response.data})
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>dispatcher</Text>
                </View>            
                <View style={styles.inputContainer}>
                    <Text style={styles.font18}>RepLoginScreen</Text>
                    <View>
                        <View>
                            <Text style={styles.font18}>ownerRep</Text>
                            <TextInput type="text"
                                style={styles.textOwnerRep}
                                value={this.state.ownerRep}
                                onChangeText={text => this.setState({ ownerRep: text })}
                            />
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.submitButton}  
                                onPress={this.repLogin.bind(this)}>
                                <Text style={styles.font18}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            {this.state.serviceReqs.map(serviceReq => (
                                <Text key={serviceReq._id}>{serviceReq.sourceAcct}</Text>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'mediumblue'
    },
    headerText: {
        fontSize: 36,
        color: 'white'
    },
    inputContainer: {
        flex: 4,
        margin: 5,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF'
    },
    submitButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 5,
        alignItems: 'center'
    },
    font18: {
        fontSize: 18
    },
    textOwnerRep: {
        fontSize: 36,
        width: 120,
        height: 40,
        alignItems: 'center',
        borderColor: 'black'

    }


});

export default RepLoginScreen;