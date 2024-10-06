import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: "Success Stories from the Laborers We Support",
  stories: [
    {
      id: 1,
      name: "Salim's Journey to Fair Wages",
      description: "Salim was underpaid and mistreated at his construction job. With our legal help, he secured fair wages and now enjoys better working conditions.",
      image: "https://mrida.co/cdn/shop/articles/Karigar_ki_kahaniya_copy_02.jpg?v=1722700296",
    },
    {
      id: 2,
      name: "Amina's Health Recovery",
      description: "After suffering a serious injury, Amina struggled to continue working. Karigar Foundation helped her access healthcare and secure financial support.",
      image: "https://images.pexels.com/photos/1527515/pexels-photo-1527515.jpeg",
    },
    {
      id: 3,
      name: "Raju's New Career Path",
      description: "Raju, a factory worker, lost his job due to health issues. We helped him upskill, opening doors to better job opportunities and a more stable future.",
      image: "https://ngofeed.com/wp-content/uploads/2024/04/NGO-in-Consumer-Protection.jpg",
    },
    {
      id: 4,
      name: "Kamla's Story of Empowerment",
      description: "Kamla, a domestic worker, faced discrimination and low pay. Our advocacy and support helped her gain confidence, access training, and secure a better job.",
      image: "https://images.pexels.com/photos/1527515/pexels-photo-1527515.jpeg",
    },
    {
      id: 5,
      name: "Suresh's Journey to Recovery",
      description: "Suresh, a construction laborer, was injured on the job. We provided medical care, rehabilitation support, and financial assistance for his family.",
      image: "https://mrida.co/cdn/shop/articles/Karigar_ki_kahaniya_copy_02.jpg?v=1722700296",
    }
  ]
};

const successStoriesSlice = createSlice({
  name: 'successStories',
  initialState,
  reducers: {},
});

export default successStoriesSlice.reducer;