let matrix = [
    [0,1,1,2],
    [0,5,0,0],
    [2,0,3,3]
]
let totalMoney = ((matrix: number[][]) => {
    let total: number = 0 ;
    for (let i=0; i < 4; i++){
        for (let j = 0;j < 3; j++){
            if (matrix[j][i] ==0){
                break
            }
            total += matrix[j][i];
        }
    }
    return total
})
console.log(totalMoney(matrix))