import NavBar from '../[comp] - NavBar/NavBar';

const Home = () => {
  return (
    <div>
      <div className="topbar">
        <NavBar currentTabNameString="home" />
      </div>
      <p>I am home</p>
    </div>
  );
};

export default Home;
