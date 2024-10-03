
// TODO: https://react.dev/learn/tutorial-tic-tac-toe
function Test({currentCount = 9, setCount}) {
  const renderListItem = (item) => {
    switch(typeof item) {
      case 'string':
        return <li>{item}</li>;
      case 'number':
        return <li>Number: {item}</li>;
      case 'object':
        return Object.keys(item).map(key => <li>{key}: {item[key]}</li>);
    }
  }
  const newObject = {
    test: 123,
    foo: "bar",
    Hello: "world"
  }
  return (
    <div>
      Hello world!!!!@
      <ul>
      {['a','b','c',2, newObject].map(renderListItem)}
      </ul>
      <br />
      You have clicked the button {currentCount} times.
      <button onClick={() => setCount(0)}>Clear the Count</button>
      Woo Hoo
    </div>
  )
}

export default Test
