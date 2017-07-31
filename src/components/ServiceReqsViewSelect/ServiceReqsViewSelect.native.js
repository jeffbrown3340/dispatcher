import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import config from '../../config.base';

class ServiceReqsViewSelect extends Component {
    state = {
        loggedInRep: '',
        repCallMe: '',
        serviceReqs: []
     }

    componentDidMount() {
        // axios.get(`${config.baseApiUrl}api/servicereqs`, {params: this.state})


        axios.get(`${config.baseApiUrl}api/servicereqs`, {params: this.props.navigation.state.params})
            .then(response => {
                this.setState({serviceReqs: response.data });
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.font18}>
                        Field Rep Logged in == {this.props.navigation.state.params.loggedInRep}
                    </Text>
                    <View>
                        <ScrollView>
                            {this.state.serviceReqs.map(serviceReq => (
                                <Text style={styles.font18} key={serviceReq._id}>{serviceReq.sourceAcct}</Text>
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

export default ServiceReqsViewSelect;