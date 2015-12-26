'use strict';

var React = require('react-native');

var WelcomeComponent = React.createClass({

    getInitialState: function() {
        return {
            highlighted: false,
        };
    },

    render: function() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.ios.js
            </Text>
            <Text style={styles.instructions}>
              Press Cmd+R to reload,              {'\n'}
              Cmd+D or shake for dev menu
            </Text>
          </View>
        );
    },
});

module.exports = WelcomeComponent;
