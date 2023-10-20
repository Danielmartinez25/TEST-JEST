export const functionArrTwo = (n: number[]): Number => {
    let num = n[0];
    for (let i = 1; i < n.length; i++) { n[i] > num ? num = n[i] : num }
    return num;
}