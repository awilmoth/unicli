unicli
======

CLI for Uniswap protocol

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/unicli.svg)](https://npmjs.org/package/unicli)
[![Downloads/week](https://img.shields.io/npm/dw/unicli.svg)](https://npmjs.org/package/unicli)
[![License](https://img.shields.io/npm/l/unicli.svg)](https://github.com/awilmoth/unicli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g unicli
$ unicli COMMAND
running command...
$ unicli (-v|--version|version)
unicli/1.0.0 darwin-x64 node-v12.19.0
$ unicli --help [COMMAND]
USAGE
  $ unicli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`unicli _meta`](#unicli-_meta)
* [`unicli autocomplete [SHELL]`](#unicli-autocomplete-shell)
* [`unicli bundle`](#unicli-bundle)
* [`unicli bundles`](#unicli-bundles)
* [`unicli burn`](#unicli-burn)
* [`unicli burns`](#unicli-burns)
* [`unicli commands`](#unicli-commands)
* [`unicli help [COMMAND]`](#unicli-help-command)
* [`unicli liquidityPosition`](#unicli-liquidityposition)
* [`unicli liquidityPositionSnapshot`](#unicli-liquiditypositionsnapshot)
* [`unicli liquidityPositionSnapshots`](#unicli-liquiditypositionsnapshots)
* [`unicli liquidityPositions`](#unicli-liquiditypositions)
* [`unicli mint`](#unicli-mint)
* [`unicli mints`](#unicli-mints)
* [`unicli pair`](#unicli-pair)
* [`unicli pairDayData`](#unicli-pairdaydata)
* [`unicli pairDayDatas`](#unicli-pairdaydatas)
* [`unicli pairHourData`](#unicli-pairhourdata)
* [`unicli pairHourDatas`](#unicli-pairhourdatas)
* [`unicli pairs`](#unicli-pairs)
* [`unicli swap`](#unicli-swap)
* [`unicli swaps`](#unicli-swaps)
* [`unicli token`](#unicli-token)
* [`unicli tokenDayData`](#unicli-tokendaydata)
* [`unicli tokenDayDatas`](#unicli-tokendaydatas)
* [`unicli tokens`](#unicli-tokens)
* [`unicli transaction`](#unicli-transaction)
* [`unicli transactions`](#unicli-transactions)
* [`unicli uniswapDayData`](#unicli-uniswapdaydata)
* [`unicli uniswapDayDatas`](#unicli-uniswapdaydatas)
* [`unicli uniswapFactories`](#unicli-uniswapfactories)
* [`unicli uniswapFactory`](#unicli-uniswapfactory)
* [`unicli user`](#unicli-user)
* [`unicli users`](#unicli-users)

## `unicli _meta`

```
USAGE
  $ unicli _meta

OPTIONS
  -h, --help     show CLI help
  --block=block
```

_See code: [src/commands/_meta/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/_meta/index.ts)_

## `unicli autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ unicli autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ unicli autocomplete
  $ unicli autocomplete bash
  $ unicli autocomplete zsh
  $ unicli autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `unicli bundle`

```
USAGE
  $ unicli bundle

OPTIONS
  -h, --help     show CLI help
  --block=block
  --id=id        (required)
```

_See code: [src/commands/bundle/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/bundle/index.ts)_

## `unicli bundles`

```
USAGE
  $ unicli bundles

OPTIONS
  -h, --help                       show CLI help
  --block=block
  --first=first
  --orderBy=orderBy
  --orderDirection=orderDirection
  --skip=skip
  --where=where
```

_See code: [src/commands/bundles/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/bundles/index.ts)_

## `unicli burn`

```
USAGE
  $ unicli burn

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --id=id                            (required)
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
```

_See code: [src/commands/burn/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/burn/index.ts)_

## `unicli burns`

```
USAGE
  $ unicli burns

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --first5=first5
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderBy5=orderBy5
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --orderDirection5=orderDirection5
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --skip5=skip5
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
  --where5=where5
```

_See code: [src/commands/burns/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/burns/index.ts)_

## `unicli commands`

list all the commands

```
USAGE
  $ unicli commands

OPTIONS
  -h, --help              show CLI help
  -j, --json              display unfiltered api data in json format
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --hidden                show hidden commands
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.3.0/src/commands/commands.ts)_

## `unicli help [COMMAND]`

display help for unicli

```
USAGE
  $ unicli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `unicli liquidityPosition`

```
USAGE
  $ unicli liquidityPosition

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --id=id                            (required)
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --where=where
  --where1=where1
  --where2=where2
```

_See code: [src/commands/liquidityPosition/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/liquidityPosition/index.ts)_

## `unicli liquidityPositionSnapshot`

```
USAGE
  $ unicli liquidityPositionSnapshot

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --id=id                            (required)
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --where=where
  --where1=where1
  --where2=where2
```

_See code: [src/commands/liquidityPositionSnapshot/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/liquidityPositionSnapshot/index.ts)_

## `unicli liquidityPositionSnapshots`

```
USAGE
  $ unicli liquidityPositionSnapshots

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
```

_See code: [src/commands/liquidityPositionSnapshots/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/liquidityPositionSnapshots/index.ts)_

## `unicli liquidityPositions`

```
USAGE
  $ unicli liquidityPositions

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
```

_See code: [src/commands/liquidityPositions/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/liquidityPositions/index.ts)_

## `unicli mint`

```
USAGE
  $ unicli mint

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --id=id                            (required)
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
```

_See code: [src/commands/mint/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/mint/index.ts)_

## `unicli mints`

```
USAGE
  $ unicli mints

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --first5=first5
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderBy5=orderBy5
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --orderDirection5=orderDirection5
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --skip5=skip5
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
  --where5=where5
```

_See code: [src/commands/mints/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/mints/index.ts)_

## `unicli pair`

```
USAGE
  $ unicli pair

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --id=id                            (required)
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --skip=skip
  --skip1=skip1
  --where=where
  --where1=where1
```

_See code: [src/commands/pair/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/pair/index.ts)_

## `unicli pairDayData`

```
USAGE
  $ unicli pairDayData

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --id=id                            (required)
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --skip=skip
  --skip1=skip1
  --where=where
  --where1=where1
```

_See code: [src/commands/pairDayData/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/pairDayData/index.ts)_

## `unicli pairDayDatas`

```
USAGE
  $ unicli pairDayDatas

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --where=where
  --where1=where1
  --where2=where2
```

_See code: [src/commands/pairDayDatas/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/pairDayDatas/index.ts)_

## `unicli pairHourData`

```
USAGE
  $ unicli pairHourData

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --id=id                            (required)
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --skip=skip
  --skip1=skip1
  --where=where
  --where1=where1
```

_See code: [src/commands/pairHourData/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/pairHourData/index.ts)_

## `unicli pairHourDatas`

```
USAGE
  $ unicli pairHourDatas

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --where=where
  --where1=where1
  --where2=where2
```

_See code: [src/commands/pairHourDatas/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/pairHourDatas/index.ts)_

## `unicli pairs`

```
USAGE
  $ unicli pairs

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --where=where
  --where1=where1
  --where2=where2
```

_See code: [src/commands/pairs/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/pairs/index.ts)_

## `unicli swap`

```
USAGE
  $ unicli swap

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --id=id                            (required)
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
```

_See code: [src/commands/swap/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/swap/index.ts)_

## `unicli swaps`

```
USAGE
  $ unicli swaps

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --first5=first5
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderBy5=orderBy5
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --orderDirection5=orderDirection5
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --skip5=skip5
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
  --where5=where5
```

_See code: [src/commands/swaps/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/swaps/index.ts)_

## `unicli token`

```
USAGE
  $ unicli token

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --id=id
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --where=where
  --where1=where1
  --where2=where2
```

_See code: [src/commands/token/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/token/index.ts)_

## `unicli tokenDayData`

```
USAGE
  $ unicli tokenDayData

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --id=id                            (required)
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
```

_See code: [src/commands/tokenDayData/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/tokenDayData/index.ts)_

## `unicli tokenDayDatas`

```
USAGE
  $ unicli tokenDayDatas

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
```

_See code: [src/commands/tokenDayDatas/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/tokenDayDatas/index.ts)_

## `unicli tokens`

```
USAGE
  $ unicli tokens

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
```

_See code: [src/commands/tokens/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/tokens/index.ts)_

## `unicli transaction`

```
USAGE
  $ unicli transaction

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --id=id                            (required)
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
```

_See code: [src/commands/transaction/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/transaction/index.ts)_

## `unicli transactions`

```
USAGE
  $ unicli transactions

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --first5=first5
  --first6=first6
  --first7=first7
  --first8=first8
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderBy5=orderBy5
  --orderBy6=orderBy6
  --orderBy7=orderBy7
  --orderBy8=orderBy8
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --orderDirection5=orderDirection5
  --orderDirection6=orderDirection6
  --orderDirection7=orderDirection7
  --orderDirection8=orderDirection8
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --skip5=skip5
  --skip6=skip6
  --skip7=skip7
  --skip8=skip8
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
  --where5=where5
  --where6=where6
  --where7=where7
  --where8=where8
```

_See code: [src/commands/transactions/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/transactions/index.ts)_

## `unicli uniswapDayData`

```
USAGE
  $ unicli uniswapDayData

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --id=id                            (required)
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
```

_See code: [src/commands/uniswapDayData/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/uniswapDayData/index.ts)_

## `unicli uniswapDayDatas`

```
USAGE
  $ unicli uniswapDayDatas

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --first5=first5
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderBy5=orderBy5
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --orderDirection5=orderDirection5
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --skip5=skip5
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
  --where5=where5
```

_See code: [src/commands/uniswapDayDatas/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/uniswapDayDatas/index.ts)_

## `unicli uniswapFactories`

```
USAGE
  $ unicli uniswapFactories

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --first5=first5
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderBy5=orderBy5
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --orderDirection5=orderDirection5
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --skip5=skip5
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
  --where5=where5
```

_See code: [src/commands/uniswapFactories/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/uniswapFactories/index.ts)_

## `unicli uniswapFactory`

```
USAGE
  $ unicli uniswapFactory

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --id=id                            (required)
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
```

_See code: [src/commands/uniswapFactory/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/uniswapFactory/index.ts)_

## `unicli user`

```
USAGE
  $ unicli user

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --id=id                            (required)
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --where=where
  --where1=where1
  --where2=where2
```

_See code: [src/commands/user/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/user/index.ts)_

## `unicli users`

```
USAGE
  $ unicli users

OPTIONS
  -h, --help                         show CLI help
  --block=block
  --first=first
  --first1=first1
  --first2=first2
  --first3=first3
  --first4=first4
  --orderBy=orderBy
  --orderBy1=orderBy1
  --orderBy2=orderBy2
  --orderBy3=orderBy3
  --orderBy4=orderBy4
  --orderDirection=orderDirection
  --orderDirection1=orderDirection1
  --orderDirection2=orderDirection2
  --orderDirection3=orderDirection3
  --orderDirection4=orderDirection4
  --skip=skip
  --skip1=skip1
  --skip2=skip2
  --skip3=skip3
  --skip4=skip4
  --where=where
  --where1=where1
  --where2=where2
  --where3=where3
  --where4=where4
```

_See code: [src/commands/users/index.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/users/index.ts)_
<!-- commandsstop -->
