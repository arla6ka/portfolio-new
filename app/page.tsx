// app/page.tsx
'use client'
import React from 'react';
import Portfolio from './components/Portfolio';
import Comments from './components/Comments';

export default function Home() {
  return (
    <main>
      <Portfolio />
      <Comments />
    </main>
  );
}
