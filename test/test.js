/**
 * Created by Piotr Staniów on 04.01.2017.
 */

const fs = require('fs');
const jsdom = require('jsdom');
const expect = require('expect.js');
const Cookies = require('js-cookie');

const index = fs.readFileSync(require.resolve("../index.js"), { encoding: "utf-8" });

describe('Cookies test', () => {

    let window;
    beforeEach(() => {
        const document = jsdom.jsdom('<!doctype html><html><body></body></html>');
        window = document.defaultView;
        window.name = '';

        const scriptEl = document.createElement("script");
        scriptEl.textContent = index;
        document.body.appendChild(scriptEl);
    });

    it('should set and get cookie', () => {
        expect(Cookies.get('coo')).to.be.equal('foo');
    })
});