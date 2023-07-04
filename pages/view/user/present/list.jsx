import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResponsiveCardDinamicStyle from './ResponsiveCardDinamicStyle.jsx';
import { BeatLoader } from 'react-spinners';
import Loading from '../../../components/Loading';
import Header from '../../../components/Header.js'

const CourseCard = () => {
  const [presents, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/present/list');
        setCourses(response.data);
        setLoading(false);
        console.log('api response', response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loading isLoading={loading} />
        
      ) : (
        presents.map((present) => (
          <ResponsiveCardDinamicStyle
            key={present.id}
            presentId={present.id}
            phoneNumber={present.phone_number}
            presentName={present.present}
            presentDonator={present.name}
            acepted={present.acepted}
           
          />
        ))
      )}
    </>
  );
};

export default CourseCard;
