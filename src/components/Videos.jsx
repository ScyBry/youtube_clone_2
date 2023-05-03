import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from '../components';

function Videos({ videos }) {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}></VideoCard>}
          {item.id.channelId && <ChannelCard channelDetail={item}></ChannelCard>}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
