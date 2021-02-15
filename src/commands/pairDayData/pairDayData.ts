import * as Types from '../../types';

import { Command, flags } from '@oclif/command'
import handler from '../../handler'
import gql from 'graphql-tag';

const PairDayDataDocument = `
query pairDayData($skip: Int, $first: Int, $orderBy: PairDayData_orderBy, $orderDirection: OrderDirection, $where: PairDayData_filter, $skip1: Int, $first1: Int, $orderBy1: PairDayData_orderBy, $orderDirection1: OrderDirection, $where1: PairDayData_filter, $id: ID!, $block: Block_height) {
  pairDayData(id: $id, block: $block) {
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
        }
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
}`

export default class pairDayData extends Command {
  
  
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
    id: flags.string({
      multiple: false,
      required: true,
    }),
    block: flags.string({
      multiple: false,
      required: false,
    })
  };

  async run() {
    const { flags } = this.parse(pairDayData);
    await handler({ command: this, query: PairDayDataDocument, variables: flags });
  }
}
