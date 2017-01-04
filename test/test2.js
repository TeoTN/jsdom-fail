/**
 * Created by Piotr on 04.01.2017.
 */
const { jsdom } = require('jsdom');
const expect = require('expect.js');


const doc = jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;
global.window.name = '';

describe('Cookies test 2', () => {
    it('should set and get cookie', () => {
        document.cookie = 'coo=foo';
        expect(document.cookie).to.contain('coo');
    })
});