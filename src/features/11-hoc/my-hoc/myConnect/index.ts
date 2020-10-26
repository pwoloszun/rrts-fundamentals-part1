import React from 'react';

import myStore, { MyStore, MyState } from './my-simple-store';

interface InputProps {
  [name: string]: any;
}

interface OutputEvents {
  [name: string]: Function;
}

type MapStateToPropsFn = (state: MyState) => InputProps;
type MapDispatchToPropsFn = (store: MyStore) => OutputEvents;

type ComponentDef<P> = React.FunctionComponent<P> | React.ComponentClass<P>;


function myConnect<P extends object>(
  mapStateToProps: MapStateToPropsFn,
  mapDispatchToProps: MapDispatchToPropsFn,
  OriginalComponent: ComponentDef<P>
) {

  class Connected extends React.Component<Partial<P>> {
    constructor(props: P) {
      super(props);
      this.state = myStore.getState();
    }

    render() {
      const propsToPass = {
        ...mapStateToProps(myStore.getState()),
        ...mapDispatchToProps(myStore)
      } as P;
      return React.createElement(OriginalComponent, propsToPass);
    }

    componentWillMount() {
      myStore.subscribe(this.handleStoreChange);
    }

    handleStoreChange = () => {
      this.setState(() => {
        const nextState = myStore.getState();
        return nextState;
      });
    };

  }

  // set display name
  const originalName = OriginalComponent.displayName || OriginalComponent.name;
  (Connected as any).displayName = `MyConnect(${originalName})`;

  return Connected;
}

export default myConnect;

