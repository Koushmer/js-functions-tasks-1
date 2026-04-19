// BEGIN
const isPrime = (number) => {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= number / 2; i += 1) {
        if (number % i === 0) {
            return false;
        } 
    }
    return true;
};

const sayPrimeOrNot = (number) => {
    console.log(isPrime(number) ? 'yes' : 'no')
};

export default sayPrimeOrNot;
// END