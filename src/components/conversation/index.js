import React from 'react';
import { Box, Stack } from '@mui/material';
import Footer from '../Chat/Footer';
import Header from '../Chat/Header';
import Message from '../Chat/Message';

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header */}
      <Header />

      {/* Msg */}
      <Box width={"100%"} sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}>
        <Message />
      </Box>
      
      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
}

export default Conversation;
