import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/contact">Contact</Link>
      <Header headerText="About Gatsby!" />
      <Header headerText="Different Header! Cool, huh!" />
      <p>Wow, such a cool framework. And so easy to use!</p>
      <img src="https:/source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
