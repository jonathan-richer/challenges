// TODO: prime, factorize, simplify

/**
 * The functions needed are declared here.
 * 
 * @module src/numbers/functions
 * 
 * @copyright Jonathan Richer dit Laflèche (c) 2019
 * @author Jonathan Richer dit Laflèche
 */

/**
 * Check whether a number is prime. (Natural numbers only)
 * 
 * @param {number} n - Any to check whether it's a prime.
 * @param {boolean} [rtn] - Whether to return the number it's divisable by.
 * 
 * @returns {boolean|number}
 */

const prime = exports.prime = (n, rtn) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return rtn ? i : false;
    }
    return true;
};

/**
 * Factorize a natural number.
 * 
 * @param {number} n_ - Any natural number to factorize.
 * @returns {number[]}
 */

const factorize = exports.factorize = n_ => {
    let n = n_;
    const factors = [];
    while (!prime(n)) {
        const divider = prime(n, true);
        n /= divider;
        factors.push(divider);
    }
    factors.push(n);
    return factors;
};

/**
 * Simplify a fraction.
 * Returns: [numerator, denominator]
 * 
 * @param {number} num - Natural number as numerator
 * @param {number} den - Natural number as denominator
 */

const simplify = exports.simplify = (num, den) => {
    const numFactors = factorize(num);
    const denFactors = factorize(den);


    const commonFactors = [];

    if (numFactors.length > denFactors.length) {
        for (const factor of denFactors) {
            for (let i = numFactors.length - 1; i >= 0; i--) {
                if (factor === numFactors[i]) {
                    commonFactors.push(factor);
                    numFactors.splice(i, 1);
                    break;
                }
            }
        }
    } else {
        for (const factor of numFactors) {
            for (let i = denFactors.length - 1; i >= 0; i--) {
                if (factor === denFactors[i]) {
                    commonFactors.push(factor);
                    denFactors.splice(i, 1);
                    break;
                }
            }
        }
    }

    const commonFactor = commonFactors.reduce((variable, current) => variable * current);
    return [num/commonFactor, den/commonFactor];
};

