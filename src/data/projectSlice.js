import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: "project_title",
  project: [
    {
      id: 1,
      name: "project_legal_help",
      description: "project_legal_help_desc",
      image: "https://www.hrw.org/sites/default/files/styles/16x9_large/public/multimedia_images_2015/india0814_coverimage.jpg?itok=uWo9ZHca"
    },
    {
      id: 2,
      name: "project_rights_awareness",
      description: "project_rights_awareness_desc",
      image: "https://images.pexels.com/photos/860577/pexels-photo-860577.jpeg?cs=srgb&dl=pexels-jodaarba-860577.jpg&fm=jpg"
    },
    {
      id: 3,
      name: "project_emergency_support",
      description: "project_emergency_support_desc",
      image: "https://st3.depositphotos.com/3279155/16919/i/450/depositphotos_169192510-stock-photo-children-in-semien-mountains-ethiopia.jpg"
    }
  ]
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {}
});

export default projectSlice.reducer;
