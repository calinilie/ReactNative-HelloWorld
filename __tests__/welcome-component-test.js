'use strict';

const React = require('react-native');
const { Text, View, TouchableWithoutFeedback } = React;

const shallowHelpers = require('react-addons-test-utils');
const shallowRenderer = shallowHelpers.createRenderer();

let WelcomeComponent = require('../welcome-component');

describe('testing welcome component', function() {

    it('should not blow up!', function() {
        shallowRenderer.render(<WelcomeComponent/>);
    });
});
