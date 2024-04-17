import CreateProfileCard from "./CreateProfileCard";
import ExploreJobs from "./ExploreJobs";
import Hero from "./Hero";
import LatestJobs from "./LatestJobs";

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <ExploreJobs />
      <LatestJobs />
      <CreateProfileCard />
    </>
  );
};

export default Home;
