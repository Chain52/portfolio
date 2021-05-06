import React from 'react';
import { Link } from 'react-router-dom';
import { Blog, Pagetitle } from '../../elements';

// TODO: Get blogs from DB
const blogs = [];

export default () => {
  const ListBlogItems = () => {
    if (blogs.length === 0) {
      return <p>No blogs available at this time.</p>;
    }
    return (
      <>
        {blogs.map((blogItem) => (
          <div className="col-md-4" key={blogItem.id}>
            <Blog blogData={blogItem} />
          </div>
        ))}
      </>
    );
  };

  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Latest Posts" />
        <div className="row blog-wrapper">
          <ListBlogItems />
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <Link to="/blogs" className="btn btn-default">
            Show all blogs
          </Link>
        </div>
      </div>
    </section>
  );
};
