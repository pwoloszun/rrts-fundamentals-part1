import React from 'react';

interface Props {
  a: number;
}

export default class Rectangle extends React.Component<Props> {
  render() {
    const { a } = this.props;
    return (
      <div>Rectangle: {a ** 2}</div>
    );
  }
}

