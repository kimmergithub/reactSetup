// /imports was using es6 instead using require statement per tutorials instructions
let React = require('react');
let ReactDOM = require('react-dom');





//Creat Component

// function Hello() {
//   return <h1>Hello</h1>;
// }
//
// ReactDOM.render(
//   <Hello />,
//   document.getElementById('intro-wrapper')
// );
// //put component into HTML page
// //ReactDOM.render(reactElement, domContainerNode)
//
// //Components accept arbitrary inputs called props and return react elements describing what should appear on the screen.
//
// //REVIEW: component below is same component but written using an ES6 class
// class Welcome extends React.Component {
//   render() {
//     return <h1>Welcome</h1>;
//   }
// }
//
// ReactDOM.render(
//   <Welcome />,
//   document.getElementById('intro-wrapper2')
// );//wrapper will only contain one element and is overwritten by last render method?
// //Always start component names with a capitol letter
// //companents can refer to other companents in their output
//
// function Creepin(props) {
//   return <h1>Hello, {props.name}</h1>;
//   }
//
//  function App() {
//     return (
//       <div>
//         <Creepin name='Bob' />
//         <Creepin name='Phil' />
//         <Creepin name='Bill' />
//       </div>
//     );
//   }
//
//  ReactDOM.render(
//     <App />,
//     document.getElementById('intro-wrapper3')
//   );


function Hello() {
  return <h1>Hello</h1>;
}

ReactDOM.render(
  <Hello />,
  document.getElementById('intro-wrapper3')
);
