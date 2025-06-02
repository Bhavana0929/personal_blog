import React from 'react';

export default function Projects() {
  return (
    <section className='card'>
      <h2 className='section-title'>Signature Projects</h2>
      <ul>
        <li>
          <img src={require('../assets/images/project1.jpg')} alt="Neural Networks from Scratch" style={{width: '100%', borderRadius: '8px', marginBottom: '8px'}} />
          <strong>Neural Networks from Scratch (NumPy):</strong>
          <span style={{marginLeft: '8px'}}><img src="https://img.shields.io/badge/Python-3670A0?style=flat&logo=python&logoColor=ffdd54" alt="Python badge" /></span>
          <br />
          Built DNN, CNN, RNN, LSTM from scratch, implementing forward/backpropagation, gradient descent, and optimizers. Achieved 96.4% accuracy on handwritten digit recognition.
        </li>
        <li>
          <img src={require('../assets/images/project2.jpg')} alt="Detectron2 Object Detection" style={{width: '100%', borderRadius: '8px', marginBottom: '8px'}} />
          <strong>Detectron2 Object Detection Model:</strong>
          <span style={{marginLeft: '8px'}}><img src="https://img.shields.io/badge/Detectron2-blue?style=flat" alt="Detectron2 badge" /></span>
          <br />
          Developed an amenity detection model for property images using Detectron2, delivering optimized bounding box detection and high accuracy.
        </li>
        <li>
          <img src={require('../assets/images/project3.jpg')} alt="Document Q&A RAG" style={{width: '100%', borderRadius: '8px', marginBottom: '8px'}} />
          <strong>Document Q&A RAG System (LangChain & Bedrock):</strong>
          <span style={{marginLeft: '8px'}}><img src="https://img.shields.io/badge/LangChain-00bfae?style=flat" alt="LangChain badge" /></span>
          <br />
          Created a scalable RAG system for semantic search and AI-driven Q&A across large document collections, improving enterprise information access.
        </li>
      </ul>
      <div style={{marginTop: '24px'}}>
        <a href="https://github.com/bhavana0929" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/followers/bhavana0929?label=Follow&style=social" alt="GitHub followers" />
        </a>
      </div>
    </section>
  );
}
