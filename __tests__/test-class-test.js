jest.dontMock('../test-class');

describe('test test', function() {

    var underTest = require('../test-class');

    it('should not blow up!', function() {
        expect(underTest()).not.toBeUndefined();
    });

    it('should return the correct result', function() {
        expect(underTest('Calin')).toBe('Hello world Calin!');
    });
});
