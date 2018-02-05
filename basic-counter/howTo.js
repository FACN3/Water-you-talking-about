class App extends React.Component {
  constructor(props) {
    this.state = {
      count: 0
    };
  }

  onClick(e) {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onClick.bind(this)}>Count Up!!</button>
      </div>
    );
  }
}

App.render(<App />, document.getElementById('app-container'));
