import React from 'react';
import Travelpage from '../src/Components/Travelpage';
import PageLayout from '../src/Components/PageLayout';

const Travel = () => (
  <PageLayout height="transitional">
    <Travelpage />

    {/* <div className="row">
        <Link href="https://github.com/zeit/next.js#getting-started">
          <a className="card">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next on Github and in their examples</p>
          </a>
        </Link>
        <Link href="https://open.segment.com/create-next-app">
          <a className="card">
            <h3>Examples &rarr;</h3>
            <p>
              Find other example boilerplates on the{' '}
              <code>create-next-app</code> site
            </p>
          </a>
        </Link>
        <Link href="https://github.com/segmentio/create-next-app">
          <a className="card">
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it</p>
          </a>
        </Link>
      </div> */}
  </PageLayout>
);

Travel.getInitialProps = async () => ({
  namespacesRequired: ['travelpage', 'appheader'],
});

export default Travel;
