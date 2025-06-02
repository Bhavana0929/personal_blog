import React from 'react';

export default function About() {
  return (
    <section className='card'>
      <div style={{display: 'flex', alignItems: 'center', gap: '24px'}}>
        <img src={require('../assets/images/profile.jpg')} alt="Profile" style={{width: '120px', borderRadius: '50%', border: '3px solid #3f51b5'}} />
        <div>
          <h2 className='section-title'>About</h2>
          <p>
            Highly adaptable and motivated software developer with 6 years of experience in Artificial Intelligence and Software Engineering. 
            I specialize in designing and delivering innovative AI solutions that drive business value. 
            My expertise spans NLP, deep learning, computer vision, and scalable backend systems. 
            I excel at collaborating with teams to overcome technical challenges and deliver impactful results.
          </p>
        </div>
      </div>
    </section>
  );
}
