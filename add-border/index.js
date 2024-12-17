function addBorder(picture) {
    let wall = "";
    const length_of_wall = picture[0].length + 2;

    for (let i=0; i<length_of_wall; i++)
        wall = wall + "*";

    picture.unshift(wall);
    picture.push(wall);

    for (let i=1; i<picture.length - 1; i++)
        picture[i] = "*" + picture[i] + "*";

    return picture;
}

console.log(addBorder(["abc", "def", "ded"]));