import React from 'react';

import Dashboard from '../../../../features/00-dashboard';
import ComponentBasics from '../../../../features/01-component-basics';
import PropsEvents from '../../../../features/02-props-events';
import AdvPropsChildren from '../../../../features/10-adv-props-children';
import ComponentState from '../../../../features/03-component-state';
import Forms from '../../../../features/04-forms';
import Todos from '../../../../features/05-todos';
import Heroes from '../../../../features/06-heroes';
import Cities from '../../../../features/07-cities';
import RealEstates from '../../../../features/08-real-estates';
import ComplexExample from '../../../../features/09-complex-example';
import HigherOrdrComponentsExamples from '../../../../features/11-hoc';
import ComponentsTesting from '../../../../features/11-hoc/12-components-testing';
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
    main: () => <Todos />
  },
  {
    path: "/hereos",
    label: 'Heroes',
    main: () => <Heroes />
  },
  {
    path: "/cities",
    label: 'Cities',
    main: () => <Cities />
  },
  {
    path: "/real-estates",
    label: 'Real estates',
    main: () => <RealEstates />
  },
  {
    path: "/complex-example",
    label: 'Complex Exmpl.',
    main: () => <ComplexExample />
  },

  {
    path: "/adv-props-children-examples",
    label: 'Adv. Props, Children',
    main: () => <AdvPropsChildren />
  },
  {
    path: "/hoc",
    label: 'Higher Order Compoennts(HOC)',
    main: () => <HigherOrdrComponentsExamples />
  },
  {
    path: "/hooks",
    label: 'Hooks API',
    main: () => <HooksApi />
  },
  {
    path: "/components-testing",
    label: 'Components Testing',
    main: () => <ComponentsTesting />
  },


];

export default reactRoutes;
