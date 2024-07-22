import NavBar from '../[comp] - NavBar/NavBar';
import banner from '../assets_images/pexels-matthew-montrone-230847-1179229.jpg';

const Home = () => {
  return (
    <div>
      <div className="topbar">
        <NavBar currentTabNameString="home" />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
        <h1>Our mission: engage our generation against global warming.</h1>
      </div>
      <div
        style={{
          height: '350px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          marginBottom: '20px',
          marginTop: '40px',
        }}
      ></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr 1fr' }}>
        <div></div>
        <div>
          <p>
            Since its inception in 2009, BRAND has been a trailblazer in Fair
            Fashion, ensuring no compromise between our Creative Direction and
            our Mission.
          </p>
          <p>
            The reality is clear: in the modern age, everyone needs clothing,
            yet each piece we produce impacts our planet. While we will continue
            to wear clothes, it is essential that we do so more thoughtfully and
            sustainably.
          </p>
          <p>
            As a mission-driven company and a PARENTCOMPANY member, BRAND
            dedicates itself to combating climate change by outfitting those who
            reside in both urban and natural settings.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
