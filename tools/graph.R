#!/usr/bin/r -i
json = jsonlite::fromJSON(readLines(file("stdin")))
dm = do.call(rbind, json$value)
colnames(dm) = c('end_state', 'end_correlated_trait_log', 'end_independent_trait_log')
data = as.data.frame(dm)

print("Correlated trait var:")
print(var(data$end_correlated_trait_log))
print("Indep trait var:")
print(var(data$end_independent_trait_log))
