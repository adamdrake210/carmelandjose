import React from 'react';
import Travelpage from '../src/Components/Travelpage';
import PageLayout from '../src/Components/PageLayout';

const Errorpage = () => (
  <PageLayout>
    <h1>This is an error. Go back!</h1>
  </PageLayout>
);

Errorpage.getInitialProps = async () => ({
  namespacesRequired: ['appheader'],
});

export default Errorpage;
