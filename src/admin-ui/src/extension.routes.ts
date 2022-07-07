export const extensionRoutes = [  {
    path: 'extensions/greet',
    loadChildren: () => import('./extensions/a7b47a757d66acda007407cf84298e8d33e482005aa4d4293e79a8f4b3083365/greeter.module').then(m => m.GreeterModule),
  }];
