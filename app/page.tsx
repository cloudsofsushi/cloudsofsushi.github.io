import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    'Sushmita, an ABAP Developer at BCH Electric Ltd B.Tech in IT from NIT Kurukshetra.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">Welcome नमस्ते !</Link>
            </h2>
            <p>
              “Innovation Distinguishes Between A Leader And A Follower.” -
              Steve Jobs.
            </p>
          </div>
        </header>
        <p>
          {' '}
          Welcome to my website. Please feel free to read more{' '}
          <Link href="/about">about me</Link>, or you can check out my{' '}
          <Link href="/resume">résumé</Link>,{' '}
          <Link href="/projects">projects</Link>, view{' '}
          <Link href="/stats">site statistics</Link>, or{' '}
          <Link href="/contact">contact</Link> me.
        </p>
        <p>
          {' '}
          Source code available{' '}
          <a href="https://github.com/cloudsofsushi/cloudsofsushi.github.io">
            here
          </a>
          .
        </p>
      </article>
    </PageWrapper>
  );
}
