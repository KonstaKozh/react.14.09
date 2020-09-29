import React from 'react';
import ReactDOM from 'react-dom';
import Message from './components/Message';
import Counter from './components/Counter';
import FormMessage from './components/FormMessage';

console.log("Hello React!");

class HelloMessage extends React.Component {
  /*constructor() {
    super();

    this.state = {
      count: 0,
      messages: ["hi", "how are you"],
    };

     this.onClick = this.onClick.bind(this);
    this.addMessage = this.addMessage.bind(this); 
  };*/

  state = {
    count: 0,
    messages: ["hi", "how are you"],
    isVisible: false,
  };

  componentDidMount() {
    console.log("I am from componentDidMount");
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("I am from componentDidUpdate");
  };

  onClick = ({ target }) => {
    const { type } = target.dataset;
    const { count } = this.state;
    this.setState({ count: type === "inc" ? count + 1 : count - 1 });
  };

  addMessage = () => {
    this.setState(({ messages, count }) => ({
       messages: [...messages, `новое сообщение ${count}`],
    }));
  };

  toggleVisible = () => {
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  };

    render() {

      console.log("I am from render");
      const { count, messages, isVisible } = this.state;

      return (
        <div>
          <h2>Hello {this.props.name}</h2>
          <button data-type="inc" onClick={this.onClick}>
            increment
          </button>
          {isVisible && <Counter count={count} />}
          <button data-type="dec" onClick={this.onClick}>
            decrement
          </button>
          <p>
            <button onClick={this.toggleVisible}>toggle visibility</button>
          </p>
          <button onClick={this.addMessage}>add message</button>
          <ul>
          {messages.map((item, index) => (
            <Message key={index} item={item} />
          ))}
        </ul>
        </div>
      );
    };

}
  
ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('hello-example')
);