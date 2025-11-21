
var words_to_guess = [
    "effective",
    "handy",
    "consciousness",
    "mayor",
    "employ",
    "unfortunate",
    "bother",
    "cream",
    "graphic",
    "roof",
    "cereal",
    "copyright",
    "by",
    "distinct",
    "addition",
    "bear",
    "white",
    "shadow",
    "offset",
    "salad",
    "pig",
    "lead",
    "law",
    "defend",
    "dive",
    "seek",
    "shortage",
    "costume",
    "category",
    "experienced",
]

function refresh(selected_sentences) {
    var sentences = selected_sentences
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)


    var sentencePool = []; //document.getElementById('sentence-pool');
    sentences.forEach((sentence, index) => {
        sentencePool.push(sentence);
    });

    var bingoCells = document.querySelectorAll('.bingo-cell');
    for (var i=0; i < 16; i++){
        bingoCells[i].textContent = sentencePool[i]; 
        bingoCells[i].addEventListener("click", select); 
    }
}
refresh(words_to_guess)

function select(e){
    this.classList.toggle("selected"); 
}

const secret = "slf";
let typed = "";

var sentences_phrases = [
    "MLOps (o GreenOps o qualsiasi altra ops)", 
    "Data", 
    "Architettura",
    "Allineiamoci",
    "2-3 slide",
    "3-4 slide",
    "Una slide massimo",
    "Provenance", 
    "Blockchain",
    "Use case", 
    "Use cases",
    "Contesto",
    "Context", 
    "Federated", 
    "Distributed", 
    "CMCC",
    "End to end", 
    "AI", 
    "ML", 
    "*Fa finta di capire*", 
    "*Nomina una persona a caso*", 
    "*Fissa un meeting*", 
    "*Fissa un meeting sovrapposto*", 
    "*Sprinkla un po' d'inglese mentre parla in italiano*", 
    "*Sprinkla un po' d'italiano mentre parla in inglese*", 
    "*Abbandona il meeting*", 
    "*Si ferma perchè sta scrivendo a qualcuno*", 
    "Scriviamo una mail a...", 
    "Settiamo il prossimo meeting il...", 
    "Settiamo un meeting ricorrente?", 
    "*Telefonata*", 
    "*Arriva 5 minuti in ritardo*", 
    "*Arriva 10 minuti in ritardo*", 
    "*Arriva 15 minuti in ritardo*", 
    "*Arriva 30 minuti in ritardo*", 
    "Pensiamoci", 
    "Ok", 
    "Mh ok", 
    "Ne parliamo con...", 
    "Chiede una cosa per 10 volte", 
    "Planning", 
    "Salto di qualità", 
    "Deadline", 
    "Vabbene", 
    "Tesisti", 
]; 


document.addEventListener("keydown", (e) => {
    typed += e.key.toLowerCase();          // add key
    if (!secret.startsWith(typed)) typed = "";  // reset if wrong
    if (typed === secret) {
        refresh(sentences_phrases); 
        typed = "";                           // reset for reuse if you want
    }
});
