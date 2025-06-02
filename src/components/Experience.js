import React from "react";

export default function Experience() {
  return (
    <section className="card">
      <h2 className="section-title">Work Experience</h2>
      <div>
        <h3 style={{color: "#f50057"}}>Amazon, Dallas, USA <span style={{color:"#b0b0b0"}}>Dec 2022 – May 2025</span></h3>
        <ul>
          <li>Enhanced internal Q&A NLP capabilities, improving text embedding/classification for user queries and documentation.</li>
          <li>Integrated LLMs with vector-based retrieval for accurate, context-aware answer generation.</li>
          <li>Designed prompt strategies to improve output relevance and reduce hallucinations.</li>
          <li>Achieved 22% improvement in answer accuracy and 15% latency reduction via model fine-tuning and retrieval optimization.</li>
        </ul>
      </div>
      <div>
        <h3 style={{color: "#f50057"}}>Tata Consultancy Services, Hyderabad, India <span style={{color:"#b0b0b0"}}>Nov 2020 – Sep 2022</span></h3>
        <ul>
          <li>Created/maintained software for network node management, ensuring high system uptime.</li>
          <li>Implemented real-time monitoring and alerting for node health and connectivity.</li>
          <li>Developed automated upgrade application, streamlining software upgrades and reducing errors.</li>
        </ul>
      </div>
      <div>
        <h3 style={{color: "#f50057"}}>Agentz, Chennai, India <span style={{color:"#b0b0b0"}}>Aug 2019 – Nov 2020</span></h3>
        <ul>
          <li>Researched and developed advanced NLP models for text classification and Q&A.</li>
          <li>Trained models using Python, TensorFlow, and distributed computing on GPUs.</li>
          <li>Leveraged CNNs, LSTMs, and Transformers for user review analysis and insights.</li>
        </ul>
      </div>
    </section>
  );
}
