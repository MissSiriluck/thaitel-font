import Footer from "../component/Footer";
import Header from "../component/Header";
import SearhchingBar from "../component/SearchingBar";
import BtnPicRecommand from "../component/BtnPicRecommand";

function Homepage() {
  return (
    <>
      <div className='container_head_search'>
        <Header />
        <SearhchingBar />
      </div>
      <BtnPicRecommand />
      <Footer />
    </>
  );
}

export default Homepage;
