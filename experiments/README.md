# Test matrix

## Experiment 1: Only phenotypic evolution

```json exp-1-rates
{
    "lam": 0.2,
    "mu": 0.0,
    "nu": 0.0,
    "time": 1
}
```

To run:

```
webppl qtbirds-sim.wppl --require fasta2json --require . --require webppl-fs\
  -- params/sample2.fasta experiments/exp_1_rates.json params/colors11.json\
  Q/jc69.json Q/neighbor.json > experiments/exp_1_data.json
```