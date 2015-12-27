'use strict';

const React = require('react-native');
const ReactTestUtils = require('react-addons-test-utils');
const shallowRenderer = ReactTestUtils.createRenderer();

jest.dontMock('../../messages/MessageComponent');
let MessageComponent = require('../../messages/MessageComponent');

describe('Message component', function() {

    describe('when rendered', () => {

        it('should not blow up', () => {
            shallowRenderer.render(<MessageComponent/>);
        });

        it('should have children', () => {
            let output = shallowRenderer.getRenderOutput();
            console.log(output.props.children);
            expect(output.props.children).not.toBeUndefined();
        });
    });
});
