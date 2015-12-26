'use strict';

const React = require('react-native');
const{
  StyleSheet,
  View,
}  = React;

var WelcomeComponent = React.createClass({

    getInitialState: function() {
        return {
            highlighted: false,
        };
    },

    render: function() {
        return (
          <View> Hello World! </View>
        );
    },
});

const styles = StyleSheet.create({
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

module.exports = WelcomeComponent;
