/* 
    given an un sorted arr return its sorted version

    example: 
    A)
    input: [3, 9, 4, 2] 
    output: [2, 3, 4, 9]

    B)
    input: [3, 2, 1] 
    output: [1, 2, 3]
*/

class sortArr{
    public sortedVersion: number[] = []
    
    constructor(private unSortedArr: number[]){
        this.sortInputArr()
    }

    sortInputArr(){
        this.unSortedArr.map((val: number)=>{
            var itsIndex: number = 0

            this.unSortedArr.map((innerVal: number)=>{
                if(val > innerVal){
                    itsIndex = itsIndex + 1
                }
            })

            this.sortedVersion[itsIndex] = val

        })

        return this.sortedVersion
    }
}

var testCase: number[] = [328, -12, 0.324, 3727, 12, 9, 731, 13, 73, 18, 34]

var sort = new sortArr(testCase)
console.log(sort.sortInputArr())