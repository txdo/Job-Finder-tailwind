import CreateProfileCard from "./CreateProfileCard";
import ExploreJobs from "./ExploreJobs";
import Footer from "./Footer";
import Hero from "./Hero";
import LatestJobs from "./LatestJobs";

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <ExploreJobs />
      <LatestJobs />
      <CreateProfileCard />
      <Footer />
    </>
  );
};

export default Home;
