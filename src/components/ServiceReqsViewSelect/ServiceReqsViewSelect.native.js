import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import config from '../../config.base';

class ServiceReqsViewSelect extends Component {
    state = {
        loggedInRep: '',
        repCallMe: '',
        selectedReq: '',
        serviceReqs: []
     }

    componentDidMount() {
        axios.get(`${config.baseApiUrl}api/servicereqs`, {params: this.props.navigation.state.params})
            .then(response => {
                this.setState({serviceReqs: response.data });
            });
    }
    
    selectReq() {
        console.log("81-402", this.state);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.reqListContainer}>
                    <Text style={styles.font18}>
                        Field Rep Logged in == {this.props.navigation.state.params.loggedInRep}
                    </Text>
                    <View>
                        <ScrollView keyboardShouldPersistTaps="always" >
                            {this.state.serviceReqs.map(serviceReq => (
                                 <View key={serviceReq._id}> 
                                    <TouchableOpacity
                                        key={serviceReq._id}
                                        style={styles.selectButton}
                                        onPress={this.selectReq.bind(this.key)}>
                                        <Text style={styles.font18} key={serviceReq._id} >{serviceReq.sourceAcct}</Text>
                                    </TouchableOpacity>
                                 </View> 
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
    reqListContainer: {
        flex: 4,
        margin: 5,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#2180C0'
    },
    selectButton: {
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