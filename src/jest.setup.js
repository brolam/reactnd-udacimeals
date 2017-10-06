/*
* Article : https://medium.com/@oieduardorabelo/react-16-enzyme-3-jest-21-the-triforce-bbd2c52ef541
* Source : https://github.com/oieduardorabelo/enzyme-v3-and-react-16/blob/master/jest.setup.js
*/

/* jest.config.js
* Article : https://medium.com/@oieduardorabelo/react-16-enzyme-3-jest-21-the-triforce-bbd2c52ef541
* Source : https://github.com/oieduardorabelo/enzyme-v3-and-react-16/blob/master/jest.config.js
module.exports = {
    setupFiles: ["./jest.setup.js"],
    snapshotSerializers: ["enzyme-to-json/serializer"]
  };
*/

import "raf/polyfill";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
