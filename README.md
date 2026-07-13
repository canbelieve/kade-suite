# KAde Suite

KAde Suite è un’estensione Chrome per scaricare, organizzare e archiviare localmente F24 e Certificazioni Uniche dal Cassetto Fiscale dell’Agenzia delle Entrate.

Il sito pubblico del progetto è pensato per essere pubblicato con GitHub Pages usando la cartella `docs` come sorgente.

## GitHub Pages

Configurazione consigliata:

```text
Settings → Pages → Source: Deploy from a branch
Branch: main
Folder: /docs
```

Dopo la pubblicazione, il sito sarà raggiungibile a un indirizzo simile a:

```text
https://TUOUSERNAME.github.io/kade-suite/
```

La privacy policy sarà disponibile qui:

```text
https://TUOUSERNAME.github.io/kade-suite/privacy.html
```

## Nota

KAde Suite è uno strumento indipendente e non è affiliato, sponsorizzato, approvato o gestito dall’Agenzia delle Entrate.

Contatto: info@latenzazero.it


## Ottimizzazione per Google

La cartella `docs` include:

- metadati SEO e social generati con `jekyll-seo-tag`;
- URL canonici generati automaticamente con l’indirizzo reale di GitHub Pages;
- `sitemap.xml` generata con l’URL reale del sito;
- dati strutturati `SoftwareApplication`;
- immagine Open Graph e favicon;
- titolo principale e contenuti ottimizzati per ricerche relative a download massivo F24 e CU.

Dopo la pubblicazione, invia a Google Search Console questo indirizzo:

```text
https://TUOUSERNAME.github.io/kade-suite/sitemap.xml
```

Non è stato aggiunto un file `robots.txt`: in un sito di progetto pubblicato sotto `/kade-suite/`, il file non si troverebbe alla radice del dominio `github.io` e quindi non avrebbe la funzione prevista dal protocollo robots.txt.
