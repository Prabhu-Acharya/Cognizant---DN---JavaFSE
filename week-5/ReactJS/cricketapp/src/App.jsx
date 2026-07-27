import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App() {

  // Change this to false to see the IndianPlayers component
  //const flag = true;
  const flag = false;

  if (flag) {
    return (
      <div>
        <ListofPlayers />
      </div>
    );
  } else {
    return (
      <div>
        <IndianPlayers />
      </div>
    );
  }

}

export default App;