import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import config from '../../config.base';

//@todo: Add route to App.dom.js
//import UserDetails from './src/components/UserDetails/UserDetails.dom';
//<Route exact path="/users/create" component={UserDetails} />

class UserDetails extends Component {
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
            <View style={{flex: 1}}>
            <ScrollView>
                <Text>UserDetails</Text>
                <View>
                    <View>
                        <Text>acctNum</Text>
                        <TextInput type="text"
                            value={this.state.acctNum}
                            onChangeText={text => this.setState({ acctNum: text })}
                        />
                    </View>
                    <View>
                        <Text>nameLastCompany:</Text>
                        <TextInput type="text"
                            value={this.state.nameLastCompany}
                            onChangeText={text => this.setState({ nameLastCompany: text })}
                        />
                    </View>
                    <View>
                        <Text>nameFirstMI:</Text>
                        <TextInput type="text"
                            value={this.state.nameFirstMI}
                            onChangeText={text => this.setState({ nameFirstMI: text })}
                        />
                    </View>
                    <View>
                        <Text>nameCallMe:</Text>
                        <TextInput type="text"
                            value={this.state.nameCallMe}
                            onChangeText={text => this.setState({ nameCallMe: text })}
                        />
                    </View>
                    <View>
                        <Text>billAddress:</Text>
                        <TextInput type="text"
                            value={this.state.billAddress}
                            onChangeText={text => this.setState({ billAddress: text })}
                        />
                    </View>
                    <View>
                        <Text>physAddress:</Text>
                        <TextInput type="text"
                            value={this.state.physAddress}
                            onChangeText={text => this.setState({ physAddress: text })}
                        />
                    </View>
                    <View>
                        <Text>eMail:</Text>
                        <TextInput type="text"
                            value={this.state.eMail}
                            onChangeText={text => this.setState({ eMail: text })}
                        />
                    </View>
                    <View>
                        <Text>phone.phPrimary:</Text>
                        <TextInput type="text"
                            value={this.state.phone.phPrimary}
                            onChangeText={text => this.setState({ phone:Object.assign({}, this.state.phone, {phPrimary: text })})}
                        />
                    </View>
                    <View>
                        <Text>phone.phType:</Text>
                        <TextInput type="text"
                            value={this.state.phone.phType}
                            onChangeText={text => this.setState({ phone:{...this.state.phone, phType: text }})}
                        />
                    </View>
                    <View>
                        <Text>phone.phNum:</Text>
                        <TextInput type="text"
                            value={this.state.phone.phNum}
                            onChangeText={text => this.setState({ phone:{...this.state.phone, phNum: text }})}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.saveItem.bind(this)}><Text>Create</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            </View>
        );
    }
}

const styles = {

}

export default UserDetails;