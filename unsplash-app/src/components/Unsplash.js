import axios from 'axios';

const API_KEY = 'pJT3NG3eym63bReVDUfWQkCmox7VGGYGEE07osJR6Wc';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${API_KEY}`
  }
});

export const searchPhotos = async (query) => {
  try {
    const response = await unsplash.get('/search/photos', {
      params: {
        query,
        orientation: 'landscape', // Указываем горизонтальную ориентацию
        w: 800 // Указываем ширину 800 пикселей (можете подстроить под свои требования)
      }
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getPhoto = async (id) => {
  try {
    const response = await unsplash.get(`/photos/${id}`, {
      params: {
        orientation: 'landscape', // Указываем горизонтальную ориентацию
        w: 800 // Указываем ширину 800 пикселей (можете подстроить под свои требования)
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
