import React from 'react';
import Weddingpage from '../Components/Weddingpage';
import PageLayout from '../Components/PageLayout';

const Wedding = () => (
  <PageLayout>
    <Weddingpage />
  </PageLayout>
);

Wedding.getInitialProps = async () => ({
  namespacesRequired: ['weddingpage', 'appheader'],
});

export default Wedding;
