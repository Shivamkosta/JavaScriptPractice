function alphabet_order(str="webmaster "){
    document.write(str)
    return str.split("").sort().join("");
}

document.write(alphabet_order());