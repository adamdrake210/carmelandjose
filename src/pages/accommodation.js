import React from 'react';
import Accommodationpage from '../Components/Accommodationpage';
import PageLayout from '../Components/PageLayout';

const Accommodation = () => (
  <PageLayout>
    <Accommodationpage />
  </PageLayout>
);

Accommodation.getInitialProps = async () => ({
  namespacesRequired: ['accommodationpage', 'appheader'],
});

export default Accommodation;
