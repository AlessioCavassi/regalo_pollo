export type Step = {
  title: string;
  prompt: string; // indovinello+azione da far leggere a Pierpaolo
  build: string;
  clue: string;
};

export const steps: Step[] = [
  {
    title: "1 · Re della casa in movimento",
    prompt:
      "INDOVINELLO 1\n" +
      "In questa casa c e qualcuno che non sta mai fermo:\n" +
      "lava, cucina, sistema e corre da una stanza all altra.\n" +
      "Leggi ad alta voce e poi fai qualche passo come se stessi passando lo straccio sul pavimento.",
    build:
      "Con l aiuto di chi ti guida, prendi alcuni oggetti piatti (libri, quaderni, tovagliette) e disponili sul pavimento per creare un rettangolo: e la base dell oggetto misterioso che stai costruendo.",
    clue:
      "Nel regno di piatti, spugne e sapone,\n" +
      "tra acqua che scorre e un po' di schiumone,\n" +
      "c e un biglietto che aspetta nascosto bene:\n" +
      "cercalo dove lavi pentole, piatti e posate ogni sere."
  },
  {
    title: "2 · Dal calcio al tennis",
    prompt:
      "INDOVINELLO 2\n" +
      "Una volta il rumore era quello del pallone sul cemento,\n" +
      "oggi e il colpo pulito di una racchetta in movimento.\n" +
      "Leggi e poi mima un servizio di tennis: lancio della pallina e colpo deciso.",
    build:
      "Senza togliere la benda, usa penne o matite per fare il bordo del rettangolo: sistema gli oggetti lungo i lati, come se stessi disegnando una cornice luminosa.",
    clue:
      "C era il pallone, ora c e la racchetta,\n" +
      "che aspetta silenziosa la prossima partita perfetta.\n" +
      "Vicino alla borsa da sport o dove riposa il tuo tennis fedele,\n" +
      "troverai il biglietto con il prossimo segreto da svelare."
  },
  {
    title: "3 · Meglio fuori che sul divano",
    prompt:
      "INDOVINELLO 3\n" +
      "Dove ti senti davvero te stesso: chiuso in casa o con le scarpe gia pronte alla porta?\n" +
      "Leggi e poi fai qualche passo sul posto come se stessi infilando le scarpe per uscire.",
    build:
      "Ora riempi l interno del rettangolo con qualcosa di morbido (magliette, sciarpe, un asciugamano): deve sembrare una piccola targa morbida appoggiata a terra.",
    clue:
      "Per uno che in casa non riesce a stare,\n" +
      "la porta è sempre pronta a farti passare.\n" +
      "Vicino alle scarpe o al posto dove lasci le sneaker al rientro,\n" +
      "un altro biglietto ti aspetta, pronto al decollo."
  },
  {
    title: "4 · Viaggiatore natalizio",
    prompt:
      "INDOVINELLO 4\n" +
      "Tra luci di Natale e valigie pronte,\n" +
      "le tue foto raccontano piu aeroporti che salotti.\n" +
      "Leggi e poi mima il gesto di tirare un trolley verso una nuova avventura.",
    build:
      "Spezza delicatamente alcuni spaghetti e usali per disegnare dentro al rettangolo la forma del numero del tuo civico: deve vedersi grande e chiaro anche da lontano.",
    clue:
      "Chi ama partire ha sempre una valigia a portata di mano,\n" +
      "pronta per un weekend o magari per un lungo piano.\n" +
      "Cerca il biglietto vicino al trolley o allo zaino da viaggio,\n" +
      "lì ti aspetta il penultimo passaggio."
  },
  {
    title: "5 · Il ricordo del civico",
    prompt:
      "INDOVINELLO 5\n" +
      "Da piccolo c era un gioco un po particolare:\n" +
      "lanciare in aria qualcosa con un numero speciale.\n" +
      "Leggi e poi mima il gesto di lanciare una cornice con il numero di casa verso il cielo (solo con le mani).",
    build:
      "Senza guardare, fatti aiutare a ruotarti in modo che la tua creazione resti alle tue spalle, come se fosse appesa a una porta immaginaria: tu non la vedi, ma il numero e li che ti aspetta.",
    clue:
      "L ultimo indizio vive vicino alla porta speciale,\n" +
      "quella che porta il numero della storia principale.\n" +
      "Cerca vicino al campanello o al civico ben in vista,\n" +
      "lì il biglietto finale chiude tutta la lista."
  }
];
