import React from 'react';

// import styles from './styles.module.css';

export default class HelloWorld extends React.Component {
  render() {
    // JSX element !!
    return (
      <div>
        <h3>
          Hello!!!
        </h3>
      </div>
    );
  }
}

// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );
//
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
//
// // simplified
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };
