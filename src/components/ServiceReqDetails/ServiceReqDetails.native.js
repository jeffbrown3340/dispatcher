import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import config from '../../config.base';

class ServiceReqDetails extends Component {
    state = {
        loggedInRep: '',
        repCallMe: '',
        selectedReq: '',
        serviceReq: {},
        client: ''
     }

    componentDidMount() {
        axios.get(`${config.baseApiUrl}api/servicereqs/${this.props.navigation.state.params.serviceReqID}`, {params: this.props.navigation.state.params})
            .then(response => {
                this.setState({serviceReq: response.data });
            });
    }

    statusUpdate() {
        axios.put(`${config.baseApiUrl}api/servicereqstatus/${this.state.serviceReq._id}`, this.state)
            .then(response => {
                var statusObj = this.state.serviceReq;
                statusObj.status = statusObj.status === 'Pending' ? "In Process" : "Completed";
                this.setState({serviceReq: statusObj});
            });
        
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.font18}>
                    Desc->{this.state.serviceReq.sourceAcct}
                </Text>
                <Text style={styles.font18}>
                    Rep Assignment->{this.state.serviceReq.ownerRep}
                </Text>
                <Text style={styles.font18}>
                    Service->{this.state.serviceReq.reqType}
                </Text>
                <Text style={styles.font18}>
                    Status->{this.state.serviceReq.status}
                </Text>
                <View style={styles.buttonContainer}>
                    {this.state.serviceReq.status !== "Completed" &&
                    <TouchableOpacity
                        style={styles.statusButton}  
                        onPress={this.statusUpdate.bind(this)}>
                        <Text style={styles.font18}>{this.state.serviceReq.status === "Pending" ? "Accept" : "Complete"}</Text>
                    </TouchableOpacity>
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2180C0'
    },
    buttonContainer: {
        flex: 4,
        margin: 5,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#2180C0'
    },
    statusButton: {
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
    }
});

export default ServiceReqDetails;