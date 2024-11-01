import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

export default function Skills() {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    { id: '1', title: 'Front-End Development & UI Design', subtitle: 'React.js, HTML, CSS, JavaScript, Bootstrap' },
    { id: '2', title: 'Back-End Development & API Integration', subtitle: 'C#, .NET, RESTful APIs, GraphQL' },
    { id: '3', title: 'Data Science & Machine Learning Applications', subtitle: 'Python, R, Jupyter Notebook, Streamlit' },
    { id: '4', title: 'Database Management', subtitle: 'MySQL, OracleDB, SQL Server' }
  ];

  return (
    <div className="skills-container" id="skills">
      <div className="skills-title">Skill-Set</div>

      <div className="stair-container">
        {items.map(item => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            className="step"
          >
            <motion.p >{item.title}</motion.p>
            
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div 
              className="overlay" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 0.3 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedId(null)} 
            />

            <motion.div 
              layoutId={selectedId} 
              className="expanded-step" 
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1 }}
            >
              <motion.h5>{items.find(item => item.id === selectedId).subtitle}</motion.h5>
              <motion.h2>{items.find(item => item.id === selectedId).title}</motion.h2>
              <motion.button onClick={() => setSelectedId(null)} className="close-button">Close</motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className='tap'>Tap to open a card</div>
    </div>
  );
}
