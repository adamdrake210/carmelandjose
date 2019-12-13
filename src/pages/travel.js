import React from 'react';
import Travelpage from '../Components/Travelpage';
import PageLayout from '../Components/PageLayout';

const Travel = () => (
  <PageLayout>
    <Travelpage />
  </PageLayout>
);

Travel.getInitialProps = async () => ({
  namespacesRequired: ['travelpage', 'appheader'],
});

export default Travel;
