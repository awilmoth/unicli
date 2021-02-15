import * as Types from '../../types';

import { Command, flags } from '@oclif/command'
import handler from '../../handler'
import gql from 'graphql-tag';

const BundleDocument = `
query bundle($id: ID!, $block: Block_height) {
  bundle(id: $id, block: $block) {
    id
    ethPrice
  }
}`

export default class bundle extends Command {
  
  
  static flags = {
    help: flags.help({ char: 'h' }),
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
    const { flags } = this.parse(bundle);
    await handler({ command: this, query: BundleDocument, variables: flags });
  }
}
