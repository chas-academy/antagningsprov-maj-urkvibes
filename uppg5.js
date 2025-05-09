
function uppg5() {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"
let svar;

if (4 > 3) {
    svar = "Det första talet är större än det andra";
} else {
    svar = "Det andra talet är större än det första";
}
console.log(svar);
}

module.exports = { uppg5 };
uppg5();