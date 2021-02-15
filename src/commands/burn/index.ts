import * as Types from '../../types';

import { Command, flags } from '@oclif/command'
import handler from '../../handler'
import gql from 'graphql-tag';

const BurnDocument = `
query burn($skip: Int, $first: Int, $orderBy: PairDayData_orderBy, $orderDirection: OrderDirection, $where: PairDayData_filter, $skip1: Int, $first1: Int, $orderBy1: PairDayData_orderBy, $orderDirection1: OrderDirection, $where1: PairDayData_filter, $skip2: Int, $first2: Int, $orderBy2: Swap_orderBy, $orderDirection2: OrderDirection, $where2: Swap_filter, $skip3: Int, $first3: Int, $orderBy3: Burn_orderBy, $orderDirection3: OrderDirection, $where3: Burn_filter, $skip4: Int, $first4: Int, $orderBy4: Mint_orderBy, $orderDirection4: OrderDirection, $where4: Mint_filter, $id: ID!, $block: Block_height) {
  burn(id: $id, block: $block) {
    id
    transaction {
      id
      blockNumber
      timestamp
      mints(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        transaction {
          id
          blockNumber
          timestamp
          burns(
            skip: $skip3
            first: $first3
            orderBy: $orderBy3
            orderDirection: $orderDirection3
            where: $where3
          ) {
            id
            transaction {
              id
              blockNumber
              timestamp
              swaps(
                skip: $skip2
                first: $first2
                orderBy: $orderBy2
                orderDirection: $orderDirection2
                where: $where2
              ) {
                id
                transaction {
                  id
                  blockNumber
                  timestamp
                }
                timestamp
                pair {
                  id
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
                  reserveETH
                  reserveUSD
                  trackedReserveETH
                  token0Price
                  token1Price
                  volumeToken0
                  volumeToken1
                  volumeUSD
                  untrackedVolumeUSD
                  txCount
                  createdAtTimestamp
                  createdAtBlockNumber
                  liquidityProviderCount
                }
                sender
                amount0In
                amount1In
                amount0Out
                amount1Out
                to
                logIndex
                amountUSD
              }
            }
            timestamp
            pair {
              id
              reserve0
              reserve1
              totalSupply
              reserveETH
              reserveUSD
              trackedReserveETH
              token0Price
              token1Price
              volumeToken0
              volumeToken1
              volumeUSD
              untrackedVolumeUSD
              txCount
              createdAtTimestamp
              createdAtBlockNumber
              liquidityProviderCount
            }
            liquidity
            sender
            amount0
            amount1
            to
            logIndex
            amountUSD
            needsComplete
            feeTo
            feeLiquidity
          }
        }
        timestamp
        pair {
          id
          reserve0
          reserve1
          totalSupply
          reserveETH
          reserveUSD
          trackedReserveETH
          token0Price
          token1Price
          volumeToken0
          volumeToken1
          volumeUSD
          untrackedVolumeUSD
          txCount
          createdAtTimestamp
          createdAtBlockNumber
          liquidityProviderCount
        }
        to
        liquidity
        sender
        amount0
        amount1
        logIndex
        amountUSD
        feeTo
        feeLiquidity
      }
    }
    timestamp
    pair {
      id
      reserve0
      reserve1
      totalSupply
      reserveETH
      reserveUSD
      trackedReserveETH
      token0Price
      token1Price
      volumeToken0
      volumeToken1
      volumeUSD
      untrackedVolumeUSD
      txCount
      createdAtTimestamp
      createdAtBlockNumber
      liquidityProviderCount
    }
    liquidity
    sender
    amount0
    amount1
    to
    logIndex
    amountUSD
    needsComplete
    feeTo
    feeLiquidity
  }
}`

export default class burn extends Command {
  
  
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
    const { flags } = this.parse(burn);
    await handler({ command: this, query: BurnDocument, variables: flags });
  }
}
