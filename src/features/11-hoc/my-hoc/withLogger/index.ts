import React from 'react';

interface InputProps {
  [name: string]: any;
}

interface OutputEvents {
  [name: string]: Function;
}

type ComponentDef<P> = React.FunctionComponent<P> | React.ComponentClass<P>;

interface Logger {
  log(...args: any): void;
}

function withLogger<P extends object>(OriginalComponent: ComponentDef<P>, logger: Logger) {

  class WithLogger extends React.Component<P> {

    componentDidMount() {
      const { props, state } = this;
      logger.log({
        props,
        state,
      });
    }

    render() {
      return React.createElement(OriginalComponent, this.props);
    }

  }

  // set display name
  const originalName = OriginalComponent.displayName || OriginalComponent.name;
  (WithLogger as any).displayName = `WithLogger(${originalName})`;

  return WithLogger;
}

export default withLogger;
