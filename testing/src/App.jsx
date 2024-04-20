function Button(props){
  // console.log(props.name);
  return (
    <>
    <h1>Button {props.name}</h1>
    </>
  );
}

function Button2(props){
  // console.log(props.title)
  return (
    <>
    <button>Click Me 2</button>
    <Button name={props.title}/>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <h1>Component</h1>
      <h1>Props</h1>
      <Button2 title="Gold"/>
    </>
  );
}

export default App;
