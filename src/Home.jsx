import { useState, useEffect } from "react";
import BLogList from "./BlogLIst";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setisPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(" http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data), setisPending(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 300);
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BLogList blogs={blogs} tittle="All Blogs!" />}
    </div>
  );
};

export default Home;
