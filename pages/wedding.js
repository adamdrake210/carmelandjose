import React from 'react';
import Weddingpage from '../src/Components/Weddingpage';
import PageLayout from '../src/Components/PageLayout';

const Wedding = () => (
  <PageLayout>
    <Weddingpage />
  </PageLayout>
);

Wedding.getInitialProps = async () => ({
  namespacesRequired: ['weddingpage', 'appheader'],
});

export default Wedding;
