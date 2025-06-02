import React from "react";

export default function Expertise() {
  return (
    <section className="card">
      <h2 className="section-title">Areas of Expertise</h2>
      <ul style={{columns: 2, listStyle: "none", padding: 0}}>
        <li>Natural Language Processing</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Artificial Intelligence</li>
        <li>Computer Vision</li>
        <li>Debugging & Analysis</li>
        <li>Retrieval Augmented Generation</li>
        <li>Generative AI</li>
        <li>Backend Development</li>
      </ul>
    </section>
  );
}
