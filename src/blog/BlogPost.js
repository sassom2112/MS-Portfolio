import React from 'react';
import { useParams } from 'react-router-dom';
import Post1 from './posts/post-1.mdx';  // Import each post manually
import Post2 from './posts/post-2.mdx';
import Post3 from './posts/post-3.mdx';

function BlogPost() {
  const { id } = useParams();

  // Map the id to the correct post component
  let PostComponent;
  if (id === 'post-1') {
    PostComponent = Post1;
  } else if (id === 'post-2') {
    PostComponent = Post2;
  } else if (id === 'post-3') {
    PostComponent = Post3;
  } else {
    return <div>Post not found</div>;  // Handle post not found case
  }

  return (
    <div className="blog-post">
      <PostComponent />  {/* Render the corresponding MDX component */}
    </div>
  );
}

export default BlogPost;
