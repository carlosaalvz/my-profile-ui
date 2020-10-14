import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

export function configureAmplify() {
  Amplify.configure(awsconfig);
} 