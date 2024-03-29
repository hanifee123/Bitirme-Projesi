import HavaDurumu from "../components/HavaDurumu";
import HomeCarousel from "../components/HomeCarousel";

function Home({ data }) {
  return (
    <>
      <HomeCarousel data={data} />

      <div>
        <h3 className="container bg-light border rounded text-center text-pink p-3 mt-3">
           Hava Durumu
        </h3 >
        <HavaDurumu />
      </div>
    </>
  );
}

export default Home;

