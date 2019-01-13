const expect = require('expect');
const {isRealString} = require('./validation');

describe('check if string object', () => {
	it('should reject non-string values', () => {
		expect(isRealString(123)).toEqual(false);
		expect(isRealString({})).toEqual(false);
		expect(isRealString(2.0)).toEqual(false);
		expect(isRealString([])).toEqual(false);
	});

	it('should reject string with only spaces', () => {
		expect(isRealString('    ')).toEqual(false);
		expect(isRealString('		')).toEqual(false);
	});

	it('should allow string with non space characters', () => {
		expect(isRealString('asdf')).toEqual(true);
		expect(isRealString(' a f s s  ')).toEqual(true);
		expect(isRealString(' asdasd')).toEqual(true);
		expect(isRealString('asdasd	')).toEqual(true);
	});
});