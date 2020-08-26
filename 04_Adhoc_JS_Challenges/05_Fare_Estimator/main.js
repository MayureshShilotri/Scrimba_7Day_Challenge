function fareEstimator(rideTime, rideDistance, costPerMinute, costPerMile) {
    let arr = [];
    for (let i = 0; i < costPerMile.length; i++) {
        arr.push((costPerMinute[i]*rideTime + costPerMile[i]*rideDistance))
    }
    return arr;
}



/**
* Test Suite
*/
describe('fareEstimator()', () => {
    it('returns cost of ride', () => {
        // arrange
        const rideTime = 30;
        const rideDistance = 7;
        const costPerMinute = [0.2, 0.35, 0.4, 0.5];
        const costPerMile = [1.2, 2.0, 2.4, 3.5];

        // act
        const result = fareEstimator(rideTime, rideDistance, costPerMinute, costPerMile);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toEqual([14.4, 24.5, 28.8, 39.5]);
    });
});
