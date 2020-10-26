import React from 'react';

import reactRoutes from './sections/react-routes';
import formsRoutes from './sections/forms-routes';

export interface RouteInfo {
  path: string;
  label: string;
  main: React.FC;
  exact?: boolean;
}

export interface AppRoutesMap {
  [title: string]: RouteInfo[];
}

const appRoutes: AppRoutesMap = {
  'React tasks': reactRoutes,
  'Forms tasks': formsRoutes,
};

export default appRoutes;
