'use client'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion'
import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/styles';
import { textVariant } from '@/utils/motion';
import { useEffect, useState } from 'react';

const Experience = () => {
  const[data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const results = await fetch("/api").then(response => response.json());
      setData(results);
    })();
  }, []);
  return (
    <div className='bg-red-300'>
      <h1 className='text-white'>rahul</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <div>
          {data.map((event) => (
            <div key={event._id}>
              <h1 className='text-white'>degra</h1>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}



export default SectionWrapper(Experience,"experince")