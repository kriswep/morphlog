import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme'; // makes https://github.com/FormidableLabs/enzyme-matchers available

// configure enzyme
Enzyme.configure({ adapter: new Adapter() });
