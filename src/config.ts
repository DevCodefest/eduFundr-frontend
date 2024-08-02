import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import {
  sepolia
} from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'Crowdfunding App',
    projectId: 'f3e4c255d277454665a3c30d56de0f8a',
  chains: [
    sepolia
  ],
  transports: {
    [sepolia.id]: http('https://sepolia.infura.io/v3/848040eacc2c4ab597cf15ce40587779'),
  },

  ssr: false,
});
