import Headers from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";


function Home() {
  return (
    <div>
      <Headers/>
      <div>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
