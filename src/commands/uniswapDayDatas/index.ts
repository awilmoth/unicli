import * as Types from '../../types';

import { Command, flags } from '@oclif/command'
import handler from '../../handler'
import gql from 'graphql-tag';

const UniswapDayDatasDocument = `
query uniswapDayDatas($skip: Int, $first: Int, $orderBy: PairDayData_orderBy, $orderDirection: OrderDirection, $where: PairDayData_filter, $skip1: Int, $first1: Int, $orderBy1: PairDayData_orderBy, $orderDirection1: OrderDirection, $where1: PairDayData_filter, $skip2: Int, $first2: Int, $orderBy2: PairDayData_orderBy, $orderDirection2: OrderDirection, $where2: PairDayData_filter, $skip3: Int, $first3: Int, $orderBy3: PairDayData_orderBy, $orderDirection3: OrderDirection, $where3: PairDayData_filter, $skip4: Int, $first4: Int, $orderBy4: TokenDayData_orderBy, $orderDirection4: OrderDirection, $where4: TokenDayData_filter, $skip5: Int, $first5: Int, $orderBy5: UniswapDayData_orderBy, $orderDirection5: OrderDirection, $where5: UniswapDayData_filter, $block: Block_height) {
  uniswapDayDatas(
    skip: $skip5
    first: $first5
    orderBy: $orderBy5
    orderDirection: $orderDirection5
    where: $where5
    block: $block
  ) {
    id
    date
    dailyVolumeETH
    dailyVolumeUSD
    dailyVolumeUntracked
    totalVolumeETH
    totalLiquidityETH
    totalVolumeUSD
    totalLiquidityUSD
    maxStored
    mostLiquidTokens(
      skip: $skip4
      first: $first4
      orderBy: $orderBy4
      orderDirection: $orderDirection4
      where: $where4
    ) {
      id
      date
      token {
        id
        symbol
        name
        decimals
        totalSupply
        tradeVolume
        tradeVolumeUSD
        untrackedVolumeUSD
        txCount
        totalLiquidity
        derivedETH
        mostLiquidPairs(
          skip: $skip2
          first: $first2
          orderBy: $orderBy2
          orderDirection: $orderDirection2
          where: $where2
        ) {
          id
          date
          pairAddress
          token0 {
            id
            symbol
            name
            decimals
            totalSupply
            tradeVolume
            tradeVolumeUSD
            untrackedVolumeUSD
            txCount
            totalLiquidity
            derivedETH
            mostLiquidPairs(
              skip: $skip1
              first: $first1
              orderBy: $orderBy1
              orderDirection: $orderDirection1
              where: $where1
            ) {
              id
              date
              pairAddress
              token1 {
                id
                symbol
                name
                decimals
                totalSupply
                tradeVolume
                tradeVolumeUSD
                untrackedVolumeUSD
                txCount
                totalLiquidity
                derivedETH
                mostLiquidPairs(
                  skip: $skip
                  first: $first
                  orderBy: $orderBy
                  orderDirection: $orderDirection
                  where: $where
                ) {
                  id
                  date
                  pairAddress
                  reserve0
                  reserve1
                  totalSupply
                  reserveUSD
                  dailyVolumeToken0
                  dailyVolumeToken1
                  dailyVolumeUSD
                  dailyTxns
                }
              }
              reserve0
              reserve1
              totalSupply
              reserveUSD
              dailyVolumeToken0
              dailyVolumeToken1
              dailyVolumeUSD
              dailyTxns
            }
          }
          reserve0
          reserve1
          totalSupply
          reserveUSD
          dailyVolumeToken0
          dailyVolumeToken1
          dailyVolumeUSD
          dailyTxns
        }
      }
      dailyVolumeToken
      dailyVolumeETH
      dailyVolumeUSD
      dailyTxns
      totalLiquidityToken
      totalLiquidityETH
      totalLiquidityUSD
      priceUSD
      maxStored
      mostLiquidPairs(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        date
        pairAddress
        reserve0
        reserve1
        totalSupply
        reserveUSD
        dailyVolumeToken0
        dailyVolumeToken1
        dailyVolumeUSD
        dailyTxns
      }
    }
    txCount
  }
}`

export default class uniswapDayDatas extends Command {
  
  
  static flags = {
    help: flags.help({ char: 'h' }),
    skip: flags.integer({
      multiple: false,
      required: false,
    }),
    first: flags.integer({
      multiple: false,
      required: false,
    }),
    orderBy: flags.string({
      multiple: false,
      required: false,
    }),
    orderDirection: flags.string({
      multiple: false,
      required: false,
    }),
    where: flags.string({
      multiple: false,
      required: false,
    }),
    skip1: flags.integer({
      multiple: false,
      required: false,
    }),
    first1: flags.integer({
      multiple: false,
      required: false,
    }),
    orderBy1: flags.string({
      multiple: false,
      required: false,
    }),
    orderDirection1: flags.string({
      multiple: false,
      required: false,
    }),
    where1: flags.string({
      multiple: false,
      required: false,
    }),
    skip2: flags.integer({
      multiple: false,
      required: false,
    }),
    first2: flags.integer({
      multiple: false,
      required: false,
    }),
    orderBy2: flags.string({
      multiple: false,
      required: false,
    }),
    orderDirection2: flags.string({
      multiple: false,
      required: false,
    }),
    where2: flags.string({
      multiple: false,
      required: false,
    }),
    skip3: flags.integer({
      multiple: false,
      required: false,
    }),
    first3: flags.integer({
      multiple: false,
      required: false,
    }),
    orderBy3: flags.string({
      multiple: false,
      required: false,
    }),
    orderDirection3: flags.string({
      multiple: false,
      required: false,
    }),
    where3: flags.string({
      multiple: false,
      required: false,
    }),
    skip4: flags.integer({
      multiple: false,
      required: false,
    }),
    first4: flags.integer({
      multiple: false,
      required: false,
    }),
    orderBy4: flags.string({
      multiple: false,
      required: false,
    }),
    orderDirection4: flags.string({
      multiple: false,
      required: false,
    }),
    where4: flags.string({
      multiple: false,
      required: false,
    }),
    skip5: flags.integer({
      multiple: false,
      required: false,
    }),
    first5: flags.integer({
      multiple: false,
      required: false,
    }),
    orderBy5: flags.string({
      multiple: false,
      required: false,
    }),
    orderDirection5: flags.string({
      multiple: false,
      required: false,
    }),
    where5: flags.string({
      multiple: false,
      required: false,
    }),
    block: flags.string({
      multiple: false,
      required: false,
    })
  };

  async run() {
    const { flags } = this.parse(uniswapDayDatas);
    await handler({ command: this, query: UniswapDayDatasDocument, variables: flags });
  }
}
