const byteSize = (str) => {
let byteSize = 0;
for (let i = 0; i < str.length; i++) {
let charCode = str.charCodeAt(i);
// UTF-16 encoding for characters in range of 0-127 (ASCII characters)
if (charCode <= 127) {
byteSize += 1;
} else {
// UTF-8 encoding for characters outside ASCII range
byteSize += encodeURIComponent(str[i]).replace(/%../g, "x").length;
}
}
return byteSize;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));