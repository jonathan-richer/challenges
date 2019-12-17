const { prime, factorize, simplify } = require("../../src/numbers/functions");

test("Prime checker test", () => {
    expect(prime(3)).toStrictEqual(true);
    expect(prime(7)).toStrictEqual(true);
    expect(prime(11, false)).toStrictEqual(true);
    expect(prime(47, true)).toStrictEqual(true);

    expect(prime(56)).toStrictEqual(false);
    expect(prime(25, false)).toStrictEqual(false);
    expect(prime(51, true)).toStrictEqual(3);
    expect(prime(22, true)).toStrictEqual(2);
});

test("Factorizer test", () => {
    expect(factorize(4)).toStrictEqual([2,2]);
    expect(factorize(6)).toStrictEqual([2,3]);
    expect(factorize(2)).toStrictEqual([2]);
    expect(factorize(3)).toStrictEqual([3]);
});

test("Simplifyer test", () => {
    expect(simplify(4,8)).toStrictEqual([1,2]);
    expect(simplify(12,6)).toStrictEqual([2,1]);
    expect(simplify(5,15)).toStrictEqual([1,3]);
    expect(simplify(9,36)).toStrictEqual([1,4]);
});
