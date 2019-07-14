import React from 'react';
import Travelpage from '../src/Components/Travelpage';
import PageLayout from '../src/Components/PageLayout';

const Travel = () => (
  <PageLayout>
    <Travelpage />
  </PageLayout>
);

Travel.getInitialProps = async () => ({
  namespacesRequired: ['travelpage', 'appheader'],
});

export default Travel;
