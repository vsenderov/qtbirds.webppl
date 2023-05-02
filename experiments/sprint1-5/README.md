## Sprints 1 - 5

### Experiment 1: Only phenotypic evolution

```json exp1-rates
{
    "lam": 0.2,
    "mu": 0.0,
    "nu": 0.0,
    "time": 1
}
```

To simulate data:

```
webppl qtbirds-sim.wppl --require fasta2json --require . --require webppl-fs  -- params/sample2.fasta experiments exp1-rates.json params/colors11.json Q/jc69.json Q/neighbor.json > experiments/exp1-data.json
```

To do inference for the simulated data:

```
webppl qtbirds-inf.wppl --require fasta2json --require . --require webppl-fs\ 
  -- experiments/exp1-data.json params/rates-priors.json params/colors11.json Q/jc69.json Q/neighbor.json exp1
```

### Experiment 2: Only molecular evolution

```json exp2-rates
{
  "lam": 0.0,
  "mu": 0.2,
  "nu": 0.0,
  "time": 1
} 
```

To simulate data:

```
webppl qtbirds-sim.wppl --require fasta2json --require . --require webppl-fs\
  -- params/sample2.fasta experiments/exp2-rates.json params/colors11.json\
  Q/jc69.json Q/neighbor.json > experiments/exp2-data.json
```

To do inference:

```
webppl qtbirds-inf.wppl --require fasta2json --require . --require webppl-fs\ 
  -- experiments/exp2-data.json params/rates-priors.json params/colors11.json Q/jc69.json Q/neighbor.json exp2
```

### Experiment 3

```
 webppl qtbirds-sim.wppl --require fasta2json --require . --require webppl-fs --require phyjs -- params/sample2.fasta trees/jeremy_crbd.tre.phyjson experiments/exp1-rates.json params/colors11.json Q/jc69.json Q/neighbor.json > experiments/exp3.treejson
 ```
