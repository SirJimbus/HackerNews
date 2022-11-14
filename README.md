## Riassunto breve

Appena si arriva sulla pagina web viene subito visualizzato un elenco dettagliato (titolo, link e data) di 10 delle ultime news recuperate attraverso le API di hackernews.

Clickando sul pulsante "Load more" sarà possibile andare a visualizzare altre 10 news

## Qualche dettaglio in più

All'avvio la funzione onload() esegue un fetch() sulla prima API (alla quale è stata assegnata la variabile newStories).

Questo fetch() ci restituisce un array composto da 500 id, dal quale, utilizzando il metodo slice(), andremo a prendere solamente i primi 10.

A questo array di 10 id assegnamo la variabile dieci, dopodiché utilizziamo il metodo map() per iterare dentro l'array e facciamo un secondo fetch() per cercare i valori che ci interessano (titolo, data e link, ai quali assegnamo una variabile)

Prima di accedere al DOM (queryselector(), appendChild(), createElement()) per andare a displayare dinamicamente i dati raccolti, andiamo a gestire gli errori con try() e catch(), servendoci degli if per andare a verificare che le proprietà che stiamo recuperando effettivamente esistano; in caso contrario verrà visualizzato un messaggio d'errore.

L'utente avrà poi a disposizione in fondo alla pagina un pulsante che chiama la funzione showdata() che gli permetterà di visualizzare altre 10 news, utilizzando il solito metodo di onload().

## Prova

L' applicazione si può trovare all'indirizzo https://velvety-dasik-9a66dd.netlify.app
