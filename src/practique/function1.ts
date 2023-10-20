function functionDiv(n: number) : Boolean {
    switch(n){
        case 2: if(2%n==0) return true;
            break;
        case 3: if (3 % n == 0) return true;
            break;
        case 5: if (5 % n == 0) return true;
            break;
        case 7: if (7 % n == 0) return true;
            break;
    }
    return false;
}
export default functionDiv;