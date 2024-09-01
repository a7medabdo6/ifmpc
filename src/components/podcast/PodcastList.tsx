import React from 'react';
import PodcastItem from './PodcastItem';
import {podcasts} from '../../data/podcast/index'


const PodcastList: React.FC = () => {
  return (
    <div>
      {podcasts.map((podcast, index) => (
        <PodcastItem
          key={index}
          title={podcast.title}
          date={podcast.date}
          description={podcast.description}
          duration={podcast.duration}
          playing={podcast.playing}
          currentTime={podcast.currentTime}
          totalTime={podcast.totalTime}
        />
      ))}
    </div>
  );
};

export default PodcastList;
