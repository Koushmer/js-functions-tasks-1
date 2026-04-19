import _ from 'lodash';

// BEGIN
export default (...numbers) => {
    if (numbers.length === 0) {
        return null;
    }
    return _.sum(numbers) / numbers.length;
};
// END