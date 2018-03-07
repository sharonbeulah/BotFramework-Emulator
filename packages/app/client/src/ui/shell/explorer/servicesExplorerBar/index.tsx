import * as React from 'react';
import { getBotById } from '../../../../data/botHelpers';
import { ExplorerBarHeader, Title, Accessories } from '../explorerBarHeader';
import { ExplorerBarBody } from '../explorerBarBody';
import { getBotDisplayName } from '@bfemulator/app-shared';
import { PortalsExplorer } from '../portalsExplorer';

export default class ServicesExplorerBar extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <>
        <ExplorerBarHeader>
          <Title>
            Services
          </Title>
        </ExplorerBarHeader>
        <ExplorerBarBody>
          <PortalsExplorer/>
        </ExplorerBarBody>
      </>
    );
  }
}