import React from 'react';
import Prebodapage from '../src/Components/Prebodapage';
import PageLayout from '../src/Components/PageLayout';

const Preboda = () => (
  <PageLayout>
    <Prebodapage />
  </PageLayout>
);

Preboda.getInitialProps = async () => ({
  namespacesRequired: ['prebodapage', 'appheader'],
});

export default Preboda;
