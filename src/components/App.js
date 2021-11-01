import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from "./About.js"
import ArticleList from "./ArticleList.js"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Wes's Blog" />
      <About image="https://media-exp1.licdn.com/dms/image/C4D03AQEFFYA-yhsnnw/profile-displayphoto-shrink_200_200/0/1613156058165?e=1639008000&v=beta&t=EQ1DglKihY9nF2QqXr1LMZ83VClTNiQJtXeOUfIENEw" about="A blog about nothing" />
      <ArticleList />
    </div>
  );
}

export default App;