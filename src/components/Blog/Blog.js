import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import PageLayout from '../Layout/PageLayout';

const BlogContainer = styled.div`
  padding: 20px;
  font-family: 'Roboto Mono', monospace;
  line-height: 1.5;
  color: #FFD7AF;

  h1, h2, h3 {
    color: #4EB6BC;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: #CC3E74; 
  }
`;

const Blog = () => {
  const { blogId } = useParams(); // Get blog id from URL
  const [content, setContent] = useState('');

  useEffect(() => {
    if (blogId) {
      loadMarkdownContent(`${blogId}.md`); 
    }
  }, [blogId]);

  const loadMarkdownContent = async (file) => {
    const response = await fetch(`/markdown/${file}`);
    const text = await response.text();
    setContent(text);
  };

  return (
    <PageLayout>
      <BlogContainer>
        <ReactMarkdown>{content}</ReactMarkdown>
      </BlogContainer>
    </PageLayout>
  );
};

export default Blog;
