// projectSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: "How We Help Laborers",
  project: [
    {
      id: 1,
      name: "Legal Help for Laborers",
      description: "We assist laborers facing issues such as unfair wages, workplace exploitation, and lack of contracts. Our legal team provides them with the guidance they need.",
      image: "https://www.hrw.org/sites/default/files/styles/16x9_large/public/multimedia_images_2015/india0814_coverimage.jpg?itok=uWo9ZHca"
    },
    {
      id: 2,
      name: "Workplace Rights Awareness",
      description: "Many laborers are unaware of their rights. We educate them about fair wages, safe working conditions, and their legal protections.",
      image: "https://images.pexels.com/photos/860577/pexels-photo-860577.jpeg?cs=srgb&dl=pexels-jodaarba-860577.jpg&fm=jpg"
    },
    {
      id: 3,
      name: "Emergency Support for Laborers",
      description: "In times of personal or workplace crises, Karigar Foundation steps in with emergency support to ensure laborers and their families receive the help they need.",
      image: "https://st3.depositphotos.com/3279155/16919/i/450/depositphotos_169192510-stock-photo-children-in-semien-mountains-ethiopia.jpg"
    },
  ]
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
});

export default projectSlice.reducer;