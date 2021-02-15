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
* [`unicli _meta:_meta`](#unicli-_meta_meta)
* [`unicli bundle:bundle`](#unicli-bundlebundle)
* [`unicli bundles:bundles`](#unicli-bundlesbundles)
* [`unicli burn:burn`](#unicli-burnburn)
* [`unicli burns:burns`](#unicli-burnsburns)
* [`unicli help [COMMAND]`](#unicli-help-command)
* [`unicli iquidityPositionSnapshots:liquidityPositionSnapshots`](#unicli-iquiditypositionsnapshotsliquiditypositionsnapshots)
* [`unicli liquidityPosition:liquidityPosition`](#unicli-liquiditypositionliquidityposition)
* [`unicli liquidityPositionSnapshot:liquidityPositionSnapshot`](#unicli-liquiditypositionsnapshotliquiditypositionsnapshot)
* [`unicli liquidityPositions:liquidityPositions`](#unicli-liquiditypositionsliquiditypositions)
* [`unicli mint:mint`](#unicli-mintmint)
* [`unicli mints:mints`](#unicli-mintsmints)
* [`unicli pair:pair`](#unicli-pairpair)
* [`unicli pairDayData:pairDayData`](#unicli-pairdaydatapairdaydata)
* [`unicli pairDayDatas:pairDayDatas`](#unicli-pairdaydataspairdaydatas)
* [`unicli pairHourData:pairHourData`](#unicli-pairhourdatapairhourdata)
* [`unicli pairHourDatas:pairHourDatas`](#unicli-pairhourdataspairhourdatas)
* [`unicli pairs:pairs`](#unicli-pairspairs)
* [`unicli swap:swap`](#unicli-swapswap)
* [`unicli swaps:swaps`](#unicli-swapsswaps)
* [`unicli token:token`](#unicli-tokentoken)
* [`unicli tokenDayData:tokenDayData`](#unicli-tokendaydatatokendaydata)
* [`unicli tokenDayDatas:tokenDayDatas`](#unicli-tokendaydatastokendaydatas)
* [`unicli tokens:tokens`](#unicli-tokenstokens)
* [`unicli transaction:transaction`](#unicli-transactiontransaction)
* [`unicli transactions:transactions`](#unicli-transactionstransactions)
* [`unicli uniswapDayData:uniswapDayData`](#unicli-uniswapdaydatauniswapdaydata)
* [`unicli uniswapDayDatas:uniswapDayDatas`](#unicli-uniswapdaydatasuniswapdaydatas)
* [`unicli uniswapFactories:uniswapFactories`](#unicli-uniswapfactoriesuniswapfactories)
* [`unicli uniswapFactory:uniswapFactory`](#unicli-uniswapfactoryuniswapfactory)
* [`unicli user:user`](#unicli-useruser)
* [`unicli users:users`](#unicli-usersusers)

## `unicli _meta:_meta`

```
USAGE
  $ unicli _meta:_meta

OPTIONS
  -h, --help     show CLI help
  --block=block
```

_See code: [src/commands/_meta/_meta.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/_meta/_meta.ts)_

## `unicli bundle:bundle`

```
USAGE
  $ unicli bundle:bundle

OPTIONS
  -h, --help     show CLI help
  --block=block
  --id=id        (required)
```

_See code: [src/commands/bundle/bundle.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/bundle/bundle.ts)_

## `unicli bundles:bundles`

```
USAGE
  $ unicli bundles:bundles

OPTIONS
  -h, --help                       show CLI help
  --block=block
  --first=first
  --orderBy=orderBy
  --orderDirection=orderDirection
  --skip=skip
  --where=where
```

_See code: [src/commands/bundles/bundles.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/bundles/bundles.ts)_

## `unicli burn:burn`

```
USAGE
  $ unicli burn:burn

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

_See code: [src/commands/burn/burn.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/burn/burn.ts)_

## `unicli burns:burns`

```
USAGE
  $ unicli burns:burns

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

_See code: [src/commands/burns/burns.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/burns/burns.ts)_

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

## `unicli iquidityPositionSnapshots:liquidityPositionSnapshots`

```
USAGE
  $ unicli iquidityPositionSnapshots:liquidityPositionSnapshots

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

_See code: [src/commands/iquidityPositionSnapshots/liquidityPositionSnapshots.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/iquidityPositionSnapshots/liquidityPositionSnapshots.ts)_

## `unicli liquidityPosition:liquidityPosition`

```
USAGE
  $ unicli liquidityPosition:liquidityPosition

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

_See code: [src/commands/liquidityPosition/liquidityPosition.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/liquidityPosition/liquidityPosition.ts)_

## `unicli liquidityPositionSnapshot:liquidityPositionSnapshot`

```
USAGE
  $ unicli liquidityPositionSnapshot:liquidityPositionSnapshot

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

_See code: [src/commands/liquidityPositionSnapshot/liquidityPositionSnapshot.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/liquidityPositionSnapshot/liquidityPositionSnapshot.ts)_

## `unicli liquidityPositions:liquidityPositions`

```
USAGE
  $ unicli liquidityPositions:liquidityPositions

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

_See code: [src/commands/liquidityPositions/liquidityPositions.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/liquidityPositions/liquidityPositions.ts)_

## `unicli mint:mint`

```
USAGE
  $ unicli mint:mint

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

_See code: [src/commands/mint/mint.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/mint/mint.ts)_

## `unicli mints:mints`

```
USAGE
  $ unicli mints:mints

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

_See code: [src/commands/mints/mints.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/mints/mints.ts)_

## `unicli pair:pair`

```
USAGE
  $ unicli pair:pair

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

_See code: [src/commands/pair/pair.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/pair/pair.ts)_

## `unicli pairDayData:pairDayData`

```
USAGE
  $ unicli pairDayData:pairDayData

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

_See code: [src/commands/pairDayData/pairDayData.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/pairDayData/pairDayData.ts)_

## `unicli pairDayDatas:pairDayDatas`

```
USAGE
  $ unicli pairDayDatas:pairDayDatas

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

_See code: [src/commands/pairDayDatas/pairDayDatas.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/pairDayDatas/pairDayDatas.ts)_

## `unicli pairHourData:pairHourData`

```
USAGE
  $ unicli pairHourData:pairHourData

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

_See code: [src/commands/pairHourData/pairHourData.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/pairHourData/pairHourData.ts)_

## `unicli pairHourDatas:pairHourDatas`

```
USAGE
  $ unicli pairHourDatas:pairHourDatas

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

_See code: [src/commands/pairHourDatas/pairHourDatas.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/pairHourDatas/pairHourDatas.ts)_

## `unicli pairs:pairs`

```
USAGE
  $ unicli pairs:pairs

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

_See code: [src/commands/pairs/pairs.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/pairs/pairs.ts)_

## `unicli swap:swap`

```
USAGE
  $ unicli swap:swap

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

_See code: [src/commands/swap/swap.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/swap/swap.ts)_

## `unicli swaps:swaps`

```
USAGE
  $ unicli swaps:swaps

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

_See code: [src/commands/swaps/swaps.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/swaps/swaps.ts)_

## `unicli token:token`

```
USAGE
  $ unicli token:token

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

_See code: [src/commands/token/token.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/token/token.ts)_

## `unicli tokenDayData:tokenDayData`

```
USAGE
  $ unicli tokenDayData:tokenDayData

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

_See code: [src/commands/tokenDayData/tokenDayData.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/tokenDayData/tokenDayData.ts)_

## `unicli tokenDayDatas:tokenDayDatas`

```
USAGE
  $ unicli tokenDayDatas:tokenDayDatas

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

_See code: [src/commands/tokenDayDatas/tokenDayDatas.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/tokenDayDatas/tokenDayDatas.ts)_

## `unicli tokens:tokens`

```
USAGE
  $ unicli tokens:tokens

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

_See code: [src/commands/tokens/tokens.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/tokens/tokens.ts)_

## `unicli transaction:transaction`

```
USAGE
  $ unicli transaction:transaction

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

_See code: [src/commands/transaction/transaction.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/transaction/transaction.ts)_

## `unicli transactions:transactions`

```
USAGE
  $ unicli transactions:transactions

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

_See code: [src/commands/transactions/transactions.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/transactions/transactions.ts)_

## `unicli uniswapDayData:uniswapDayData`

```
USAGE
  $ unicli uniswapDayData:uniswapDayData

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

_See code: [src/commands/uniswapDayData/uniswapDayData.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/uniswapDayData/uniswapDayData.ts)_

## `unicli uniswapDayDatas:uniswapDayDatas`

```
USAGE
  $ unicli uniswapDayDatas:uniswapDayDatas

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

_See code: [src/commands/uniswapDayDatas/uniswapDayDatas.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/uniswapDayDatas/uniswapDayDatas.ts)_

## `unicli uniswapFactories:uniswapFactories`

```
USAGE
  $ unicli uniswapFactories:uniswapFactories

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

_See code: [src/commands/uniswapFactories/uniswapFactories.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/uniswapFactories/uniswapFactories.ts)_

## `unicli uniswapFactory:uniswapFactory`

```
USAGE
  $ unicli uniswapFactory:uniswapFactory

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

_See code: [src/commands/uniswapFactory/uniswapFactory.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/uniswapFactory/uniswapFactory.ts)_

## `unicli user:user`

```
USAGE
  $ unicli user:user

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

_See code: [src/commands/user/user.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/user/user.ts)_

## `unicli users:users`

```
USAGE
  $ unicli users:users

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

_See code: [src/commands/users/users.ts](https://github.com/awilmoth/unicli/blob/v1.0.0/src/commands/users/users.ts)_
<!-- commandsstop -->
