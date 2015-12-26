'use strict';

const React = require('react-native');

const ReactTestUtils = require('react-addons-test-utils');
const shallowRenderer = ReactTestUtils.createRenderer();

let WelcomeComponent = require('../welcome-component');

describe('testing welcome component', function() {

    it('should not blow up!', function() {
        shallowRenderer.render(<WelcomeComponent/>);
    });
});
