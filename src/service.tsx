import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

export function configureAmplify() {
  Auth.configure(awsconfig);
  Amplify.configure(awsconfig);
} 