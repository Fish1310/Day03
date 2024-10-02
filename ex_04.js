function capitalize(words) {
    let capitalizedWords = [];
    for (let i = 0; i < words.length; i++) {
        capitalizedWords.push(words[i].toUpperCase());
    }
    return capitalizedWords;
}

console.log(capitalize(['CapITAlize', 'tHis', 'text']));

const result = ["CHANGE", "this", "array", "BY", "ThE", "RESULT", "oF", "youR", "FUNCTION", "TO", "test", "IT", "OUT"]
displayResult(result)