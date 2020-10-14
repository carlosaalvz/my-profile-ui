import Amplify from '@aws-amplify/core';
import awsconfig from './aws-exports';

export function configureAmplify() {
  Amplify.configure(awsconfig);
} 