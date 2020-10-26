import React from 'react';

import Dashboard from '../../../../features/00-dashboard';
import ComponentBasics from '../../../../features/01-component-basics';
import PropsEvents from '../../../../features/02-props-events';
import AdvPropsChildren from '../../../../features/10-adv-props-children';
import ComponentState from '../../../../features/03-component-state';
import Forms from '../../../../features/04-forms';
import TodosPage from '../../../../features/05-todos';
import HooksApi from '../../../../features/14-hooks-api/index';

const reactRoutes = [
  {
    path: "/",
    exact: true,
    label: 'Dashboard',
    main: () => <Dashboard />
  },
  {
    path: "/component-basics",
    label: 'Comp. basics',
    main: () => <ComponentBasics />
  },
  {
    path: "/props-events",
    label: 'Props & Events',
    main: () => <PropsEvents />
  },
  {
    path: "/component-state",
    label: 'Comp. state',
    main: () => <ComponentState />
  },
  {
    path: "/forms-examples",
    label: 'Forms',
    main: () => <Forms />
  },
  {
    path: "/todos",
    label: 'Todos',
    main: () => <TodosPage />
  },

  {
    path: "/adv-props-children-examples",
    label: 'Adv. Props, Children',
    main: () => <AdvPropsChildren />
  },
  {
    path: "/hooks",
    label: 'Hooks API',
    main: () => <HooksApi />
  },

];

export default reactRoutes;
