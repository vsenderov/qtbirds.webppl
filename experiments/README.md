# README.md

The json chunks need to be extracted with `tools/json-extractor.js`.

# Experiment 8.1

```json exp8.1.a
{
    "lam": 0.1,
    "mu": 0.1,
    "nu": 0.0
}
```

```json exp8.1.b
{
    "lam": 0.0,
    "mu": 0.0,
    "nu": 0.1
}
```

node tools/json-extractor.js experiments/README.md

webppl qtbirds-sim2.wppl --require fasta2json --require . --require webppl-fs --require phyjs --  phylo/single-nuc.fasta  phylo/bing_small.phyjson exp8.1.a.json  pheno/2state.json  nucleo/jc69.Q.json  pheno/mk-2state.Q.json 200 > indepedent.tre.json 

webppl qtbirds-sim2.wppl --require fasta2json --require . --require webppl-fs --require phyjs --  phylo/single-nuc.fasta  phylo/bing_small.phyjson exp8.1.b.json  pheno/2state.json  nucleo/jc69.Q.json  pheno/mk-2state.Q.json 200 > simultaneous.tre.json 