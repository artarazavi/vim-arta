import React, { useEffect, useState } from 'react';
import ExperienceItem from './ExperienceItem';
import PageLayout from '../Layout/PageLayout';
import yaml from 'js-yaml'; // Import the js-yaml library

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Fetch the YAML file from the public directory
    const fetchData = async () => {
      try {
        const response = await fetch('/experience/experience.yaml'); // Correct path for the public folder
        const text = await response.text();
        const data = yaml.load(text); // Parse the YAML content
        setExperiences(data.experiences); // Set the parsed experiences
      } catch (error) {
        console.error('Error loading YAML file:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageLayout>
      {experiences.map((experience, index) => (
        <div key={index}>
          <ExperienceItem
            name={experience.name}
            location={experience.location}
            date={experience.date}
            role={experience.role}
          />
          <br />
        </div>
      ))}
    </PageLayout>
  );
};

export default Experience;
