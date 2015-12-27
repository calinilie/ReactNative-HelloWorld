/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

const React = require('react-native');
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
} = React;
const Message = require('./messages/MessageComponent');

var AwesomeProject = React.createClass({

    getInitialState: function() {
        return {
            highlighted: false,
        };
    },

    render: function() {

        return (
            <View style={{marginTop:24}}>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    welcome: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
