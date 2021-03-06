// 2021.08.17 - TUE:

const JSX = <h1>Hello JSX!</h1>;

// 2021.07.30 - FRI:

// Render React on the Server with RenderToString:

class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div/>
    }
  };
  
  // Change code below this line
  
  ReactDOMServer.renderToString(<App />);

// Use Array.filter() to Dynamically Filter an Array:

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            username: 'Jeff',
            online: true
          },
          {
            username: 'Alan',
            online: false
          },
          {
            username: 'Mary',
            online: true
          },
          {
            username: 'Jim',
            online: false
          },
          {
            username: 'Sara',
            online: true
          },
          {
            username: 'Laura',
            online: true
          }
        ]
      };
    }
    render() {
      const usersOnline = this.state.users.filter(user => user.online); // Change this line
      const renderOnline = usersOnline.map(user => {
        return <li key={user.username}>{user.username}</li>
      }); // Change this line
  
      console.log("this.state.users", this.state.users.filter(user => user.online));
      console.log("usersOnline:", usersOnline); 
  
      return (
        <div>
          <h1>Current Online Users:</h1>
          <ul>{renderOnline}</ul>
        </div>
      );
    }
  }

// Give Sibling Elements a Unique Key Attribute:

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
  
  function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map(item => {
      return <li key={item}>{item}</li>
    }); // Change this line
    console.log("renderFrameworks:", renderFrameworks);
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
  };

// Use Array.map() to Dynamically Render Elements:

const textAreaStyles = {
    width: 235,
    margin: 5
  };
  
  class MyToDoList extends React.Component {
    constructor(props) {
      super(props);
      // Change code below this line
      this.state = {
        userInput: '',
        toDoList: []
      }
      // Change code above this line
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
      const itemsArray = this.state.userInput.split(',');
      this.setState({
        toDoList: itemsArray
      });
    }
    handleChange(e) {
      this.setState({
        userInput: e.target.value
      });
    }
    render() {
      const items = this.state.toDoList.map(item => {
        return <li>{item}</li> 
        }); // Change this line
      return (
        <div>
          <textarea
            onChange={this.handleChange}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder='Separate Items With Commas'
          />
          <br />
          <button onClick={this.handleSubmit}>Create List</button>
          <h1>My "To Do" List:</h1>
          <ul>{items}</ul>
        </div>
      );
    }
  }

// Change Inline CSS Conditionally Based on Component State:

class GateKeeper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ input: event.target.value })
    }
    render() {
      let inputStyle = {
        border: '1px solid black'
      };
      // Change code below this line
  
      console.log("this.state.input.length:", this.state.input.length);
  
      if (this.state.input.length > 15) {
        inputStyle.border = '3px solid red'
      }
  
      console.log("inputStyle.border:", inputStyle.border);
  
      // Change code above this line
      return (
        <div>
          <h3>Don't Type Too Much:</h3>
          <input
            type="text"
            style={inputStyle}
            value={this.state.input}
            onChange={this.handleChange} />
        </div>
      );
    }
  };

// Render Conditionally from Props:

class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      {/* Change code below this line */}
      console.log("fiftyFifty:", this.props.fiftyFifty);
      
      return (
        <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>
      )
  
      {/* Change code above this line */}
    }
  }
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(prevState => {
        // Complete the return statement:
        return {
          counter: this.state.counter + 1
        }
      });
    }
    render() {
      const expression = Math.random() >= 0.5; // Change this line
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          {/* Change code below this line */}
          <Results fiftyFifty={expression} />
          {/* Change code above this line */}
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  }

// Use a Ternary Expression for Conditional Rendering:

const inputStyle = {
    width: 235,
    margin: 5
  };
  
  class CheckUserAge extends React.Component {
    constructor(props) {
      super(props);
      // Change code below this line
      this.state = {
        input: '',
        userAge: ''
      }
      // Change code above this line
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }
    submit() {
      this.setState(state => ({
        userAge: state.input
      }));
    }
    render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type='number'
            value={this.state.input}
            onChange={this.handleChange}
          />
          <br />
          {/* Change code below this line */}
          {this.state.userAge === '' ? buttonOne : this.state.userAge < 18 ? buttonThree : buttonTwo }
          {/* Change code above this line */}
        </div>
      );
    }
  }

// Use && for a More Concise Conditional:

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState(state => ({
        display: !state.display
      }));
    }
    render() {
      // Change code below this line
  
      const display = this.state.display && <h1>Displayed!</h1>;
  
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
          {display}
         </div>
      );
    }
  };

// Render with an If-Else Condition:

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState((state) => ({
        display: !state.display
      }));
    }
    render() {
      // Change code below this line
      if (this.state.display) {
        return (
          <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
            <h1>Displayed!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
          </div>
        );
      }
      
    }
  };


// Use Advanced JavaScript in React Render Method:

const inputStyle = {
    width: 235,
    margin: 5
  };
  
  class MagicEightBall extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        randomIndex: ''
      };
      this.ask = this.ask.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    ask() {
      if (this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }
    handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
    render() {
      const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];
      const answer = possibleAnswers[this.state.randomIndex]; // Change this line
      console.log("answer:", answer);
      return (
        <div>
          <input
            type='text'
            value={this.state.userInput}
            onChange={this.handleChange}
            style={inputStyle}
          />
          <br />
          <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
          <br />
          <h3>Answer:</h3>
          <p>
            {/* Change code below this line */}
            {answer}
            {/* Change code above this line */}
          </p>
        </div>
      );
    }
  }

// const, functional stateless component, JavaScript style class components

// Add Inline Styles in React:

const styles = {
    color: "purple",
    fontSize: 40,
    border: "2px solid purple"
  }
  
  // Change code above this line
  class Colorful extends React.Component {
    render() {
      // Change code below this line
      return (
        <div style={styles}>Style Me!</div>
      );
      // Change code above this line
    }
  };

// Introducing Inline Styles:

class Colorful extends React.Component {
    render() {
      return (
        <div style={{color: "red", fontSize: 72}}>Big Red</div>
      );
    }
  };

// Optimize Re-Renders with shouldComponentUpdate:

class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
      // Change code below this line
  
      // console.log("nextProps:", nextProps);
      // console.log("nextState:", nextState);
      // console.log("this.props.value:", this.props.value);
  
      if (nextProps.value % 2 == 0) {
        return true;
      } else {
        return false;
      }
  
      // Change code above this line
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>;
    }
  }
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState(state => ({
        value: state.value + 1
      }));
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value} />
        </div>
      );
    }
  }

// Add Event Listeners:

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Change code below this line
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
    }
    // Change code above this line
    handleEnter() {
      this.setState((state) => ({
        message: state.message + 'You pressed the enter key! '
      }));
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };

//

// Use the LifCycle Method componentDidMount:

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          {/* Change code below this line */}
          <h1>Active Users: {this.state.activeUsers} </h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }

//

// Use the LifeCycle Method componentWillMount:

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // Change code below this line
  
      // Change code above this line
    }
    render() {
      return <div />
    }
  };

//

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // Change code below this line
      console.log("Hello there!")
      // Change code above this line
    }
    render() {
      return <div />
    }
  };

//

class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
          { /* Change code below this line */ }
  
          { /* Change code above this line */ }
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };

//

class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
          { /* Change code below this line */ }
          <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
          <RenderInput input={this.state.inputValue} />
          { /* Change code above this line */ }
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };

//

class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>
           {/* Change code below this line */}
           <Navbar />
           {/* Change code above this line */}
         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        {/* Change code below this line */}
        <h1>Hello, my name is: </h1>
        {/* Change code above this line */}
      </div>
      );
    }
  };

//

class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>
           {/* Change code below this line */}
           <Navbar name={this.state.name} />
           {/* Change code above this line */}
         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        {/* Change code below this line */}
        <h1>Hello, my name is: {this.props.name}</h1>
        {/* Change code above this line */}
      </div>
      );
    }
  };

// 2021.07.29 - THU:

class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      // Change code below this line
  
      // Change code above this line
    }
    // Change code below this line
  
    // Change code above this line
    render() {
      return (
        <div>
          { /* Change code below this line */}
  
          { /* Change code above this line */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };  

//

class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      // Change code below this line
      this.handleChange = this.handleChange.bind(this);
      // Change code above this line
    }
    // Change code below this line
  
    handleChange = event => {
      this.setState({ input: event.target.value });
    }
  
    // Change code above this line
    render() {
      return (
        <div>
          { /* Change code below this line */}
          <input onChange={this.handleChange} value={this.state.input} />
          { /* Change code above this line */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };  

//

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      // Change code below this line
      
      // Change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {/* Change code below this line */}
            
            {/* Change code above this line */}
            <button type='submit'>Submit!</button>
          </form>
          {/* Change code below this line */}
  
          {/* Change code above this line */}
        </div>
      );
    }
  }

//

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange = event => { 
      this.setState({
        input: event.target.value
      });
    }
  
    handleSubmit(event) {
      // Change code below this line
      event.preventDefault();
      this.setState({ submit : this.state.input });
      // Change code above this line
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {/* Change code below this line */}
            <input value={this.state.input} onChange={this.handleChange} />
            {/* Change code above this line */}
            <button type='submit'>Submit!</button>
          </form>
          {/* Change code below this line */}
          <h1>{this.state.submit}</h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }