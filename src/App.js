import Navbar from "./components/Navbar";
import Headline from "./components/headline";
import "./app.scss"

function App() {
  return (
    <div className="App">
      <Navbar/>
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!"/>
        </section>
      
    </div>
  );
}

export default App;
