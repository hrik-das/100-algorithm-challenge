function adjacentElementsProduct(ary) {
    let largest_product = ary[0] * ary[1];
    
    for (let i=1; i<ary.length - 1; i++) {
        const product = ary[i] * ary[i+1];

        if (largest_product < product)
            largest_product = product;
    }

    return largest_product;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));