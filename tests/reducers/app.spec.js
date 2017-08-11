import reducer, { initialState } from 'redux/reducers/app';

describe('(Reducer) App', () => {
    it('should have the correct initialState', () => {
        expect(reducer(undefined, {

        })).to.eql(initialState);
    });
});
