import React, { useEffect, useState } from 'react';
import EducationItem from './EducationItem';
import PageLayout from '../Layout/PageLayout';
import yaml from 'js-yaml'; // Import the js-yaml library

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    // Fetch the YAML file from the public directory
    const fetchData = async () => {
      try {
        const response = await fetch('/education/education.yaml'); // Correct path for the public folder
        const text = await response.text();
        const data = yaml.load(text); // Parse the YAML content
        setEducationData(data.education); // Set the parsed education data
      } catch (error) {
        console.error('Error loading YAML file:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageLayout>
      {educationData.map((edu, index) => (
        <div key={index}>
          <EducationItem
            school={edu.school}
            degree={edu.degree}
            date={edu.date}
            location={edu.location}
          />
          <br />
        </div>
      ))}
    </PageLayout>
  );
};

export default Education;
