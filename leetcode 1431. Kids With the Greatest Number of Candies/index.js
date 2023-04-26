/*
There are n kids with candies. You are given an integer array candies,
where each candies[i] represents the number of candies the ith kid has,
and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n,
where result[i] is true if, after giving the
ith kid all the extraCandies, they will have
the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

*/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @param {number} greater
 * @param {number} bigger
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    n = candies.length
    var isGreater = []
    
    for(i = 0; i < n; i++){
        let bigger = 0
        let greater = 0
        let candiSum = candies[i] + extraCandies

        for(x = 0; x < n; x++){
            if (bigger < candies[x]) {
                bigger = candies[x]
            }
        }

        for(x = 0; x < n; x++){
            if (candiSum >= bigger) {
                greater++
            }
        }

        isGreater.push(greater == n)
    }

    return isGreater
};

kidsWithCandies([2,3,5,1,3], 3)