import React from 'react';
import { useSelector } from 'react-redux';
import Slider from './Slider';

const SuccessStories = () => {
  // Destructure 'stories' from the Redux state
  const { stories } = useSelector(state => state.successStories);
  const title = "Success Stories from the Laborers We Support";

  return (
    <div>
      <Slider data={stories} title={title} /> {/* Pass stories array to Slider */}
    </div>
  );
};

export default SuccessStories;
