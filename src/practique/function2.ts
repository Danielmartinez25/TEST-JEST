export const functionDig = (num: number): Number =>{
    if(num > 1000)return 4;
    else if(num > 100)return 3;
    else if (num > 10)return 2;
    else return 1;
}
