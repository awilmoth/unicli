import * as Types from '../../types';

import { Command, flags } from '@oclif/command'
import handler from '../../handler'
import gql from 'graphql-tag';

const TransactionsDocument = `
query transactions($skip: Int, $first: Int, $orderBy: PairDayData_orderBy, $orderDirection: OrderDirection, $where: PairDayData_filter, $skip1: Int, $first1: Int, $orderBy1: PairDayData_orderBy, $orderDirection1: OrderDirection, $where1: PairDayData_filter, $skip2: Int, $first2: Int, $orderBy2: Mint_orderBy, $orderDirection2: OrderDirection, $where2: Mint_filter, $skip3: Int, $first3: Int, $orderBy3: Swap_orderBy, $orderDirection3: OrderDirection, $where3: Swap_filter, $skip4: Int, $first4: Int, $orderBy4: Burn_orderBy, $orderDirection4: OrderDirection, $where4: Burn_filter, $skip5: Int, $first5: Int, $orderBy5: Mint_orderBy, $orderDirection5: OrderDirection, $where5: Mint_filter, $skip6: Int, $first6: Int, $orderBy6: Burn_orderBy, $orderDirection6: OrderDirection, $where6: Burn_filter, $skip7: Int, $first7: Int, $orderBy7: Swap_orderBy, $orderDirection7: OrderDirection, $where7: Swap_filter, $skip8: Int, $first8: Int, $orderBy8: Transaction_orderBy, $orderDirection8: OrderDirection, $where8: Transaction_filter, $block: Block_height) {
  transactions(
    skip: $skip8
    first: $first8
    orderBy: $orderBy8
    orderDirection: $orderDirection8
    where: $where8
    block: $block
  ) {
    id
    blockNumber
    timestamp
    mints(
      skip: $skip5
      first: $first5
      orderBy: $orderBy5
      orderDirection: $orderDirection5
      where: $where5
    ) {
      id
      transaction {
        id
        blockNumber
        timestamp
        mints(
          skip: $skip2
          first: $first2
          orderBy: $orderBy2
          orderDirection: $orderDirection2
          where: $where2
        ) {
          id
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
        burns(
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
            swaps(
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
    burns(
      skip: $skip6
      first: $first6
      orderBy: $orderBy6
      orderDirection: $orderDirection6
      where: $where6
    ) {
      id
      timestamp
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
    swaps(
      skip: $skip7
      first: $first7
      orderBy: $orderBy7
      orderDirection: $orderDirection7
      where: $where7
    ) {
      id
      timestamp
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
}`

export default class transactions extends Command {
  
  
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
    skip6: flags.integer({
      multiple: false,
      required: false,
    }),
    first6: flags.integer({
      multiple: false,
      required: false,
    }),
    orderBy6: flags.string({
      multiple: false,
      required: false,
    }),
    orderDirection6: flags.string({
      multiple: false,
      required: false,
    }),
    where6: flags.string({
      multiple: false,
      required: false,
    }),
    skip7: flags.integer({
      multiple: false,
      required: false,
    }),
    first7: flags.integer({
      multiple: false,
      required: false,
    }),
    orderBy7: flags.string({
      multiple: false,
      required: false,
    }),
    orderDirection7: flags.string({
      multiple: false,
      required: false,
    }),
    where7: flags.string({
      multiple: false,
      required: false,
    }),
    skip8: flags.integer({
      multiple: false,
      required: false,
    }),
    first8: flags.integer({
      multiple: false,
      required: false,
    }),
    orderBy8: flags.string({
      multiple: false,
      required: false,
    }),
    orderDirection8: flags.string({
      multiple: false,
      required: false,
    }),
    where8: flags.string({
      multiple: false,
      required: false,
    }),
    block: flags.string({
      multiple: false,
      required: false,
    })
  };

  async run() {
    const { flags } = this.parse(transactions);
    await handler({ command: this, query: TransactionsDocument, variables: flags });
  }
}
