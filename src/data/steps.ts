export type Step = {
  title: string;
  prompt: string; // indovinello+azione da far leggere a Pierpaolo
  build: string;
  clue: string;
};

export const steps: Step[] = [
  {
    title: "1 · Dal calcio al tennis",
    prompt:
      "INDOVINELLO 1\n" +
      "Una volta il rumore era quello del pallone sul cemento,\n" +
      "oggi e il colpo pulito di una racchetta in movimento.\n" +
      "Leggi e poi mima un servizio di tennis: lancio della pallina e colpo deciso.\n" +
      "Quando hai finito il servizio, premi \"Mostra indizio\" per continuare.",
    build:
      "Quando Pierpaolo porta il primo bigliettino, leggetelo tra di voi senza spiegargli ancora cosa state combinando.\n" +
      "Scegliete insieme una zona del pavimento dove costruirete la vostra figura segreta e fate in modo che, quando Pierpaolo è senza benda, quella zona resti nascosta dai corpi delle persone in piedi intorno.\n" +
      "Spiegategli che durante i tragitti per cercare i biglietti e leggere il telefono potrà togliersi la benda, ma ogni volta che torna nella zona di gioco dovrà rimetterla.\n" +
      "Per voi questo livello serve a creare una prima linea lunga a terra, che userete come misura di riferimento.\n" +
      "Fategli scegliere una racchetta (o un oggetto sportivo lungo) e guidatelo ad appoggiarla a terra ben dritta.\n" +
      "Se vi sembra troppo corta, potete fargli prendere un altro oggetto simile (un'altra racchetta, la borsa da tennis, un asciugamano lungo...) e metterlo in fila, attaccato alla racchetta, finche ottenete una linea lunga e diritta.\n" +
      "Non parlate di forme precise: per lui sono solo gesti, per voi la prima linea della vostra figura segreta.",
    clue:
      "C era il pallone, ora c e la racchetta,\n" +
      "che aspetta silenziosa la prossima partita perfetta.\n" +
      "Vicino alla borsa da sport o dove riposa il tuo tennis fedele,\n" +
      "troverai il biglietto con il prossimo segreto da svelare.\n" +
      "Quando lo trovi, riportalo di nuovo al gruppo in silenzio."
  },
  {
    title: "2 · Re della casa in movimento",
    prompt:
      "INDOVINELLO 2\n" +
      "In questa casa c e qualcuno che non sta mai fermo:\n" +
      "lava, cucina, sistema e corre da una stanza all altra.\n" +
      "Leggi ad alta voce e poi fai qualche passo come se stessi passando lo straccio sul pavimento.\n" +
      "Solo dopo il movimento, premi \"Mostra indizio\" qui sotto per scoprire dove andare.",
    build:
      "Con il secondo bigliettino potete aggiungere un altra linea lunga, più o meno della stessa lunghezza della racchetta.\n" +
      "Prendete solo oggetti di cucina lunghi e maneggevoli (forchette, cucchiai, mestoli, coltelli...) e fate in modo che Pierpaolo li appoggi a terra in fila, ben dritti.\n" +
      "Se un singolo oggetto e più corto della racchetta, fategliene prendere due, tre o quattro e metterli uno dopo l'altro, finché a colpo d'occhio le due linee lunghe vi sembrano della stessa misura.",
    clue:
      "Nel regno di piatti, spugne e sapone,\n" +
      "tra acqua che scorre e un po' di schiumone,\n" +
      "c e un biglietto che aspetta nascosto bene:\n" +
      "cercalo dove lavi pentole, piatti e posate ogni sere.\n" +
      "Quando lo trovi, riportalo al gruppo senza farlo leggere a nessun altro."
  },
  {
    title: "3 · Meglio fuori che sul divano",
    prompt:
      "INDOVINELLO 3\n" +
      "Dove ti senti davvero te stesso: chiuso in casa o con le scarpe gia pronte alla porta?\n" +
      "Leggi e poi fai qualche passo sul posto come se stessi infilando le scarpe per uscire.\n" +
      "Quando hai fatto qualche passo, premi \"Mostra indizio\" per scoprire dove andare.",
    build:
      "Con il terzo bigliettino tracciate una linea più corta sul lato ancora aperto della vostra figura.\n" +
      "Usate scarpe, ciabatte o stivaletti per disegnare questa linea: fate mettere a Pierpaolo le scarpe in fila, punta contro tallone, cosi la traiettoria resta dritta.\n" +
      "Se una scarpa e troppo corta, potete usarne due in fila per arrivare alla misura che vi sembra giusta.\n" +
      "Lasciate lo spazio interno della figura vuoto: l altro lato corto arrivera solo con il prossimo indizio.",
    clue:
      "Per uno che in casa non riesce a stare,\n" +
      "la porta è sempre pronta a farti passare.\n" +
      "Vicino alle scarpe o al posto dove lasci le sneaker al rientro,\n" +
      "un altro biglietto ti aspetta, pronto al decollo.\n" +
      "Quando lo trovi, riportalo al gruppo come se fosse un nuovo pezzo di mappa."
  },
  {
    title: "4 · Viaggiatore natalizio",
    prompt:
      "INDOVINELLO 4\n" +
      "Tra luci di Natale e valigie pronte,\n" +
      "le tue foto raccontano piu aeroporti che salotti.\n" +
      "Leggi e poi mima il gesto di tirare un trolley verso una nuova avventura.\n" +
      "Quando hai finito di trascinare il tuo trolley immaginario, premi \"Mostra indizio\" per la prossima missione.",
    build:
      "Con il quarto bigliettino potete chiudere la vostra cornice.\n" +
      "Cercate souvenir di viaggio che potete mettere in fila (magliette con scritte di citta, foulard o sciarpe comprate in viaggio, teli mare, strofinacci con monumenti, piccole guide o cartoline rigide) e fate in modo che Pierpaolo li appoggi a terra uno dopo l altro, con i bordi che si toccano.\n" +
      "Se usate magliette, teli o foulard, arrotolateli o piegateli a striscia in modo che diventino una linea più leggibile.\n" +
      "Usateli per tracciare l ultima linea più corta, quella che collega tra loro le estremita libere delle due linee lunghe.\n" +
      "Se un singolo souvenir e corto, usatene due, tre o quattro in fila per arrivare alla lunghezza che vi serve.\n" +
      "Anche qui non nominate forme precise: per lui sono solo movimenti, per voi la figura finale che si chiude.",
    clue:
      "Chi ama partire ha sempre una valigia a portata di mano,\n" +
      "pronta per un weekend o magari per un lungo piano.\n" +
      "Cerca il biglietto vicino al trolley o allo zaino da viaggio,\n" +
      "lì ti aspetta il penultimo passaggio.\n" +
      "Quando lo trovi, riportalo al gruppo come se fosse quasi l ultimo pezzo del puzzle."
  },
  {
    title: "5 · Il ricordo del civico",
    prompt:
      "INDOVINELLO 5\n" +
      "Da piccolo c era un gioco un po particolare:\n" +
      "lanciare in aria qualcosa che contava più di tutto.\n" +
      "Leggi e poi, se pensi di aver capito che figura avete creato a terra con tutti gli oggetti,\n" +
      "prova a dirla ad alta voce e a mimare nell aria il gesto di lanciarla verso il cielo (solo con le mani).\n" +
      "Solo dopo il gesto finale, premi \"Mostra indizio\" per scoprire come finisce davvero la serata.",
    build:
      "Con l ultimo bigliettino non dovete cambiare più nulla a terra.\n" +
      "Lasciate che Pierpaolo faccia il gesto finale dell indovinello e provi a dire che forma secondo lui avete costruito.\n" +
      "Poi fate in modo che si tolga la benda e si giri verso il centro della vostra opera segreta, cosi possa vedere per la prima volta il disegno creato con tutti gli oggetti.\n" +
      "Questo è il momento in cui uno di voi gli consegna il regalo finale, spiegandogli che tutta la mappa nascosta serviva ad arrivare proprio qui.",
    clue:
      "L ultimo indizio non ti manda a cercare un altro biglietto,\n" +
      "ma ti porta dritto a quello che stavi aspettando.\n" +
      "Dopo aver mimato la forma che hai in mente, voltati verso il gruppo e lasciati guidare:\n" +
      "ti faranno vedere il disegno nascosto\n" +
      "e qualcuno ti metterà finalmente il regalo tra le mani."
  }
];
