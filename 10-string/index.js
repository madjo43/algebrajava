const text = "lorem ipsum";
let newText = "";


for (let i = 0; i < text.length; i++) {

    const char = text[i];
    if( i % 2 === 0) {
        newText = newText + char.toUpperCase();
    } else {
        newText = newText + char.toLowerCase();
    }
}

console.log(newText);

/*for (let i = 0; i < text.length; i++) {
    console.log(i,text[i]);
    const char = text[i];
    if( i % 2 === 0) {
        console.log(char.toUpperCase());
    } else {
        console.log(char.toLowerCase());
    }
}
    ovo je bio primjer*/