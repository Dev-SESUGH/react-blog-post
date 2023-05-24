import BLogList from "./BlogLIst";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BLogList blogs={data} tittle="All Blogs!" />}
    </div>
  );
};

export default Home;
