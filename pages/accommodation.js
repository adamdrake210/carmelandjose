import React from 'react';
import Accommodationpage from '../src/Components/Accommodationpage';
import PageLayout from '../src/Components/PageLayout';

const Accommodation = () => (
  <PageLayout height="transitional">
    <Accommodationpage />
  </PageLayout>
);

Accommodation.getInitialProps = async () => ({
  namespacesRequired: ['accommodationpage', 'appheader'],
});

export default Accommodation;
