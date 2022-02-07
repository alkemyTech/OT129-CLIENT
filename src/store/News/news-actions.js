import { newsActions } from "../../features/News/news-slice";

import { getNews } from "../../Services/NewsService";
//action creator thunk

export const fetchNewsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
        const response = await getNews()

        if (!response.ok) {
            throw new Error('Could not fetch news data')
        }

        const data = await response.json();

        return data;
    }

    try {
        const newsData =  await fetchData();
        dispatch(newsActions.showList({
            newsList: newsData.items || [],
        }));
    } catch (error) {
        //error handling
    }
    
  };
 
};