import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from '../components';
import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function ChannelDetail() {
  const { id } = useParams();

  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id="${id}`).then((data) =>
      setChannelDetail(data?.items[0]),
    );
    fetchFromAPI(`search?channelId=${id}&part="snippet&order=date`).then((data) =>
      setVideos(data?.items[0]),
    );
  }, [id]);

  return <Box>ChannelDetail</Box>;
}
