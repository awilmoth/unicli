import * as Types from '../../types';

import { Command, flags } from '@oclif/command'
import handler from '../../handler'
import gql from 'graphql-tag';

const _MetaDocument = `
query _meta($block: Block_height) {
  _meta(block: $block) {
    block {
      hash
      number
    }
    deployment
    hasIndexingErrors
  }
}`

export default class _meta extends Command {
  
  
  static flags = {
    help: flags.help({ char: 'h' }),
    block: flags.string({
      multiple: false,
      required: false,
    })
  };

  async run() {
    const { flags } = this.parse(_meta);
    await handler({ command: this, query: _MetaDocument, variables: flags });
  }
}
