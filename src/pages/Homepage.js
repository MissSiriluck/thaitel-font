import Footer from "../component/Footer";
import Header from "../component/Header";
import SearhchingBar from "../component/SearchingBar";

function Homepage() {
  return (
    <>
      <div className='container_head_search'>
        <Header />
        <SearhchingBar />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
