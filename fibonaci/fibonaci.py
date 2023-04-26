class Solution:
    def fib(self, n: int) -> int:
        num = 0
        if n > 1:
            fibo = n - 1
        else:
            fibo = n

        for num in range(fibo):
            print(range(fibo))
            if num == 0:
                num = num + 1
            else:
                print(num - 1)
                num = num + (num - 1)
        print(num)

Solution.fib(2, 30)