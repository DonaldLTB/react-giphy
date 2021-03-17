import '../assets/stylesheets/application.scss';

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

// const Hello = (props) => {
//   const { name } = props;
//   return <h1>Hello!2 {name}</h1>;
// };

// Ruby would be class Hello < React.Component

// eslint-disable-next-line react/prefer-stateless-function
// class Hello extends React.Component {
//   // constructor(props) {
//   //   // def initialize
//   //   super(props);
//   // }

//   render() {
//     const { name } = this.props;
//     return (
//       <h1>Hello!2 {name}</h1>
//     );
//   }
// }


const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
