import Amplify from '@aws-amplify/core';

export function configureAmplify() {
  Amplify.configure(
  {
   Auth: {
     identityPoolId: 'us-east-2:82573920-41e5-4c88-9464-628518156914',
     region: 'us-east-2',
     userPoolId: 'us-east-2_tRFhTtO5k',
     userPoolWebClientId: '1d807s4hlgh5pig8vfb0ms11hv',
    },
  Storage: { 
     bucket: 'profilebucket162840-prod',
     region: 'us-east-2',
     identityPoolId: 'us-east-2:82573920-41e5-4c88-9464-628518156914'
    }
  }
 );
} 