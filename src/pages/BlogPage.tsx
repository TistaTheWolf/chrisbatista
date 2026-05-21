import { Box, Divider, Grid } from '@mui/material';
import { useState } from 'react';
import Markdown from 'react-markdown';

export const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const markdown = '# Hi, *Pluto*!';

  const blogPosts = [
    {
      title: 'My First Blog Post',
      date: '2024-01-01',
      summary: 'This is a summary of my first blog post.',
      content:
        'This is the full content of another blog post. askjdhfakjshdfjhaslkjdhfjkahsdkjf alslkjdhf asklhjfas',
      timeToRead: 5,
    },
    {
      title: 'Another Blog Post',
      date: '2024-02-15',
      summary: 'This is a summary of another blog post.',
      content:
        'Another blah blah blah blog post. askjdhfakjshdfjhaslkjdhfjkahsdkjf alslkjdhf asklhjfas',
      timeToRead: 5,
    },
  ];

  const handlePostClick = (index: number) => {
    setSelectedPost(index);
  };

  return (
    <Box id="blog-container" sx={{ display: 'flex' }}>
      <Grid id="blog-posts" container sx={{ display: 'flex', width: '100%' }}>
        <Grid
          size={{ xs: 4 }}
          sx={{ justifyContent: 'center', marginTop: '2rem' }}
        >
          {blogPosts.map((post, index) => (
            <Box
              key={index}
              sx={{ marginBottom: '1rem' }}
              onClick={() => handlePostClick(index)}
            >
              <h2>{post.title}</h2>
              <p>{post.date}</p>
              <p>{post.summary}</p>
              <Divider sx={{ margin: '1rem 0', borderColor: 'gray' }} />
            </Box>
          ))}
        </Grid>
        <Grid
          size={{ xs: 8 }}
          sx={{ justifyContent: 'center', marginTop: '2rem' }}
        >
          {selectedPost !== null && (
            <Box>
              <Grid
                container
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Grid size={{ xs: 6 }} sx={{ textAlign: 'left' }}>
                  <p>Time to read: {blogPosts[selectedPost].timeToRead} mins</p>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <p>{blogPosts[selectedPost].date}</p>
                </Grid>
              </Grid>
              <Divider sx={{ margin: '1rem 0', borderColor: 'gray' }} />
              <Grid
                container
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Grid size={{ xs: 12 }}>
                  <p>{blogPosts[selectedPost].content}</p>
                </Grid>
              </Grid>
            </Box>
          )}
          <Markdown>{markdown}</Markdown>
        </Grid>
      </Grid>
    </Box>
  );
};
