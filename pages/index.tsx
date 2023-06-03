import React, { useEffect, useState } from 'react';
import VideoItem from '../components/VideoItem';

const HomePage = () => {
 const [videos, setVideos] = useState<any[]>([]);
 const [data, setData] = useState<any[]>([]);
 useEffect(() => {
  fetch('http://localhost:5000/api/videos')
    .then((response) => response.json())
    .then((data) => setVideos(data))
    .catch((error) => console.error('Error fetching videos:', error));


  fetch(`${window.location.origin}/api/data`)
    .then((response) => response.json())
    .then((a) => {
        setData(a)
        console.log(a);
    })
    .catch((error) => console.error('Error fetching data:', error));
    }, []);

 const videos1 = [
    {
      id: 1,
      name: '2016_10_31_15_46_01',
      url: '/video/2016_10_31_15_46_01.mp4',
      rating: 4,
      tags: ['Action', 'Adventure'],
    },
    {
      id: 2,
      name: '2016_10_31_16_53_43',
      url: '/video/2016_10_31_16_53_43.mp4',
      rating: 3,
      tags: ['Comedy'],
    },
        {
      id: 2,
      name: '2016_11_14_14_59_15',
      url: '/video/2016_11_14_14_59_15.mp4',
      rating: 3,
      tags: ['Comedy'],
    },
       {
      id: 2,
      name: 'Movie on 6-18-14 at 9.30 PM',
      url: '/video/Movie on 6-18-14 at 9.30 PM.mov',
      rating: 3,
      tags: ['Comedy'],
    },
       {
      id: 2,
      name: 'Movie on 7-13-14 at 5.59 AM',
      url: '/video/Movie on 7-13-14 at 5.59 AM.mov',
      rating: 3,
      tags: ['Comedy'],
    },{
      id: 2,
      name: 'Movie on 11-2-16 at 3.07 PM',
      url: '/video/Movie on 11-2-16 at 3.07 PM.mov',
      rating: 3,
      tags: ['Comedy'],
    },
    // Add more video objects here
  ];
  return (
    <div>
      <header>
        {/* Add header content */}
        jfaskljfkasjfksadklj
         <main>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {videos.map((video) => (
            <VideoItem key={video.id}  video={video} />
          ))}
        </div>
      </main>
      </header>
      <main>
        {/* Add video display area and player */}
      </main>
      <footer>
        {/* Add footer content */}
      </footer>
    </div>
  );
};

export default HomePage;
