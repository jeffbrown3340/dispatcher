import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import config from '../../config.base';
import { NavigationActions } from 'react-navigation';


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
                this.setState({
                    loggedInRep: this.props.navigation.state.params.loggedInRep,
                    serviceReqs: response.data 
                });
            });
    }
    
    selectReq(id, acct) {
        let navigateAction = NavigationActions.navigate({
            routeName: 'ServiceReqDetails',
            params: {
                serviceReqID: id,
                loggedInRep: this.state.loggedInRep,
                sourceAcct: acct
            }
        });    
        this.props.navigation.dispatch(navigateAction);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.font18}>
                    Field Rep Logged in == {this.props.navigation.state.params.loggedInRep}
                </Text>
                <View style={styles.reqListContainer}>
                    <View style={styles.reqListContainer}>
                        <ScrollView style={styles.scrollItems} keyboardShouldPersistTaps="always" >
                            {this.state.serviceReqs.map(serviceReq => (
                                  <View style={styles.scrollItems} key={serviceReq._id}>
                                    <TouchableOpacity
                                        key={serviceReq._id}
                                        style={styles.selectButton}
                                        onPress={this.selectReq.bind(this, serviceReq._id, serviceReq.sourceAcct)}>
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
        alignItems: 'center',
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
        flex: 1,
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

    },
    scrollItems: {
        flex: 1
    }


});

export default ServiceReqsViewSelect;