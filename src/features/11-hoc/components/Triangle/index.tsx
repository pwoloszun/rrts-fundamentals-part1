import React from 'react';

interface Props {
  a: number;
  h: number;
  onDraw: () => void;
}

export default class Triangle extends React.Component<Props> {
  render() {
    const { a, h } = this.props;
    return (
      <div>
        Triangle: {a * h / 2}
        <button onClick={this.handleDraw}>Draw!</button>
      </div>
    );
  }

  handleDraw = () => {
    const { onDraw } = this.props;
    onDraw();
  };
}
