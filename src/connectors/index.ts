import { Web3ReactHooks } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { hooks as metaMaskHooks, metaMask } from './metamask';

export const connectors: [MetaMask, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks]
];
