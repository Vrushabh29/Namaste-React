// const heading= React.createElement("h1",{ id:"heading", xyz:"1234"},"hello world React");


const parent =  React.createElement("div",{ id:"parent"}, [React.createElement("div",{ id:"child1"}, [React.createElement("h1",{ },"hello h1" ) , React.createElement("h2",{ },"hello h2" ) ]), React.createElement("div",{ id:"child2"}, [React.createElement("h1",{ },"hello h1" ) , React.createElement("h2",{ },"hello h2" ) ])] );


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)