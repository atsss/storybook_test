import React, { Component } from 'react';
import Balloon from './components/atoms/Balloon';
import Img from './components/atoms/Img';
import Heading from './components/atoms/Heading';

// class App extends Component {
//   render() {
//     return (
//       <Balloon />
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Balloon>test</Balloon>
      <Img src='https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/13631654_879887108807235_2829615063363236677_n.jpg?_nc_cat=101&_nc_ht=scontent-nrt1-1.xx&oh=28bc5da8151830b3e881a150a7fdf4ac&oe=5C6C3AED' width='128' height='72' />
      <Heading>aaaa</Heading>
    </div>
  )
}

export default App;
