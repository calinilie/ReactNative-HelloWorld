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
const MessageList = require('./messages/MessageListComponent');

var AwesomeProject = React.createClass({

    getInitialState: function() {
        return {
            highlighted: false,
        };
    },

    render: function() {
        return (
            <View style={styles.container}>
               <MessageList/>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        paddingTop: 24,
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
