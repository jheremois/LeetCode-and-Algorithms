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

package main

import "fmt"

func maximumWealth(accounts [][]int) int {
	var riquezas = 0

	fmt.Print(riquezas)

	for i := 0; i < len(accounts); i++ {
		for ii := 0; ii < len(accounts); ii++ {
			riqueza := accounts[i][ii]

			if riqueza > riquezas {
				riquezas = riqueza
			}
		}
	}

	fmt.Println(riquezas)
	return 0
}

func main() {
	var pepe []int = []int{1, 2, 4}
	var jheremy []int = []int{1, 2, 9}
	var tigueres [][]int = [][]int{pepe, jheremy}

	maximumWealth(tigueres)
}
