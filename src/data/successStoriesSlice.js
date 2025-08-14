import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: "success_stories_title",
  stories: [
    { id: 1, name: "story_1_name", description: "story_1_desc", image: "./assets/salim.jpg" },
    { id: 3, name: "story_3_name", description: "story_3_desc", image: "./assets/study.png" },
    { id: 4, name: "story_4_name", description: "story_4_desc", image: "./assets/labour.png" },
    { id: 5, name: "story_5_name", description: "story_5_desc", image: "https://mrida.co/cdn/shop/articles/Karigar_ki_kahaniya_copy_02.jpg?v=1722700296" }
  ]
};

const successStoriesSlice = createSlice({
  name: 'successStories',
  initialState,
  reducers: {}
});

export default successStoriesSlice.reducer;
