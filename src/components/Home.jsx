import React from 'react';
import Women from '../images/women.jpeg';
import Toma from '../images/tomato.jpeg';
import Teach from '../images/teach.jpeg';
import Impact from '../images/impact.jpeg';

const Home = () => (
  <div className="home">
    <section className="hero">
      <h1>Empowering Farmers, Strengthening Communities</h1>
      <p>Transforming Agriculture with Sustainable Solutions for a Nourished and Hunger-Free Future.</p>
      
    </section>

    <section className="stats">
      <div>
        <img className="s-img" src={Women} alt="women"/>
        <h2>50,000+</h2>
        <p>Lives impacted</p>
      </div>
      <div>
        <img className="s-img" src={Toma} alt="women"/>
        <h2>45%</h2>
        <p>Increase in productivity</p>
      </div>
      <div>
        <img className="s-img" src={Teach} alt="women"/>
        <h2>85%</h2>
        <p>Women and persons with disabilities</p>
      </div>
      <div>
        <img className="s-img" src={Impact} alt="women"/>  
        <h2>20,000+</h2>
        <p>Trained in sustainable practices</p>
      </div>
    </section>

    <section className="vision">
      <p>
      We envision a world where sustainable agriculture nourishes people and the planet, paving the way for resilient and thriving communities.
      </p>
    </section>
  </div>
);

export default Home;
