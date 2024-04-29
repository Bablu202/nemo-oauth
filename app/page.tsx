import AllTrips from "@components/AllTrips";
import Footer from "@components/Footer";
import Highlights from "@components/Highlights";
import TravelForm from "@components/TravelForm";

function page() {
  return (
    <div>
      <AllTrips />
      {/* <Highlights /> */}
      <TravelForm />
      <Footer />
    </div>
  );
}

export default page;
