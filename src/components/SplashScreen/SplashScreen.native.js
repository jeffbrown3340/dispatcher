import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import icon from '../../../public/icon.png';
import { NavigationActions } from 'react-navigation';

class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerTitleStyle}>dispatcher 1.34</Text>
                <Image source={icon} style={{ height: 100, width: 100 }} />
            </View>

        )

    }

    componentDidMount() {
        setTimeout(() => this.nextPage(), 3000);
    }

    nextPage() {
        let resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'RepLoginScreen' })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2180C0',
        position: 'relative',
        top: 0
    },
    headerTitleStyle: {
        alignSelf: 'center',
        fontSize: 36,
        marginTop: 12,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default SplashScreen;
