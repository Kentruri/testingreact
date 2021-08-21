import Navbar from "./components/Navbar";
import Headline from "./components/headline";
import "./app.scss"

const tempArr = [{
   fName: 'Kevin',
   lName: 'Steven',
   email: 'kevinsteventrujillo@hotmail.com',
   age: 19,
   onlineStatus: true

}]

function App() {
  return (
    <div className="App">
      <Navbar/>
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!"  tempArr={tempArr}/>
        </section>
      
    </div>
  );
}

export default App;
