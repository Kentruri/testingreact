import Navbar from "./components/Navbar";
import Headline from "./components/headline";
import SharedButton from './components/button'
import ListItem from './components/listItem'
import { connect } from 'react-redux'
import { fetchPosts } from "./actions";
import "./app.scss"
import { Component } from "react";

const tempArr = [{
  fName: 'Kevin',
  lName: 'Steven',
  email: 'kevinsteventrujillo@hotmail.com',
  age: 19,
  onlineStatus: true

}]

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this)
  }

  fetch() {
    this.props.fetchPosts()
  }
  render() {

    const { posts } = this.props;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App">
        <Navbar />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
          <SharedButton {...configButton} />
          {posts.length > 0 &&
            <div>
              {posts.map((posts, index) => {
                 const {title,body} = posts;
                 const configListItem = {
                  title,
                  desc: body 
                 }
                return (
                 

                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>}
        </section>

      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}


export default connect(mapStateToProps, { fetchPosts })(App);
