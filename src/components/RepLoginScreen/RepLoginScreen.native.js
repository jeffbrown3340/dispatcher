import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import config from '../../config.base';

class RepLoginScreen extends Component {
    state = {
        acctNum: '',
        nameLastCompany: '',
        nameFirstMI: '',
        nameCallMe: '',
        billAddress: '',
        physAddress: '',
        eMail: '',
        phone: {
            phPrimary: '',
            phType: '',
            phNum: ''
        }
    }

    saveItem(event) {
        console.log(this.state);
        axios.post(`${config.baseApiUrl}api/users`, this.state)
            .then(response => {
                // this.props.history.push('/users');
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
                            <Text style={styles.font18}>acctNum</Text>
                            <TextInput type="text"
                                value={this.state.acctNum}
                                onChangeText={text => this.setState({ acctNum: text })}
                            />
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.submitButton}  
                                onPress={this.saveItem.bind(this)}>
                                <Text style={styles.font18}>Create</Text>
                            </TouchableOpacity>
                        </View>
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
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    submitButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 5
    },
    font18: {
        fontSize: 18
    }

});

export default RepLoginScreen;