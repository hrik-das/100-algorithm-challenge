function adjacentElementsProduct(array: number[]): number {
    let largest_product = array[0] * array[1];

    for (let i=1; i<array.length - 1; i++) {
        const product = array[i] * array[i+1];
        largest_product = largest_product < product ? product : largest_product;
    }

    return largest_product;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));