/*
You are given an m x n integer grid accounts
where accounts[i][j] is the amount of money 
the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have
in all their bank accounts. The richest customer
is the customer that has the maximum wealth.

# Example: 

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

*/
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const cuentas = accounts.length
    var riquezas = 0
    
    for(i=0; i < cuentas; i++){
        let cualto = accounts[i].length
        let suma = 0
        
        for(ii=0; ii < cualto; ii++){
            suma+= accounts[i][ii]
        }
        
        if (suma > riquezas) {
            riquezas = suma
        }
        
        
    }

    return riquezas
}

maximumWealth([[80,3,3],[3,2,1], [3,20,1]])
