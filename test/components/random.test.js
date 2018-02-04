import { shallow } from 'enzyme';

describe('Random', () => {
	it('Should Contain this text', () => {
		let mountedComponent;

		const component = shallow(Random);

		expect(mountedComponent.containsMatchingElement(<div>Coder, WoW Player, noob!</div>)).to.be.true;
	});
});
