/**
 *
 * You'll create this file manually, and configure the codegen with the path to this file.
 *   oclif will use the exported client for all its requests, so if you have any
 *   authentication or request manipulation to do, you can do it here.
 */

import { GraphQLClient } from "graphql-request";
import { Command } from "@oclif/command";

interface QueryHandlerProps {
  command: Command;
  query: string;
  variables?: Record<string, any>;
}

// Change this URL to the endpoint your CLI will use
const client = new GraphQLClient("https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3");

const handler = ({ command, query, variables }: QueryHandlerProps) => {
  return client
    .request(query, variables)
    .then(command.log)
    .catch(command.error);
};

export default handler;