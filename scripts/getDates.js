let date = new Date();
let year = date.getFullYear();
console.log(year);
let oLastModif = new Date(document.lastModified);
document.getElementById("curryear").innerHTML = `${year}`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${oLastModif}`;