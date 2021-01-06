import React from 'react';
import Header from '../components/header';

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby!" />
      <Header headerText="Different Header! Cool, huh!" />
      <p>Wow, such a cool framework. And so easy to use!</p>
    </div>
  );
}
