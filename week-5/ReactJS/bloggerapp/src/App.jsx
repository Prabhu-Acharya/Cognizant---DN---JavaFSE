import { useState } from "react";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";


function App() {

  const [page, setPage] = useState("book");


  // Element Variable
  let content;


  // if-else conditional rendering
  if(page === "book") {
    content = <BookDetails />;
  }
  else if(page === "blog") {
    content = <BlogDetails />;
  }
  else {
    content = <CourseDetails />;
  }


  return (

    <div>

      <h1>Blogger App</h1>


      <button onClick={() => setPage("book")}>
        Books
      </button>


      <button onClick={() => setPage("blog")}>
        Blogs
      </button>


      <button onClick={() => setPage("course")}>
        Courses
      </button>


      <hr />


      {content}


      {/* Ternary Rendering */}

      {
        page === "book"
        ?
        <p>Book Component Loaded</p>
        :
        <p>Other Component Loaded</p>
      }


      {/* Logical AND Rendering */}

      {
        page === "course" &&
        <p>Course Available</p>
      }


    </div>

  );

}

export default App;