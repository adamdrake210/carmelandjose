import React from 'react';
import Prebodapage from '../Components/Prebodapage';
import PageLayout from '../Components/PageLayout';

const Preboda = () => (
  <PageLayout>
    <Prebodapage />
  </PageLayout>
);

Preboda.getInitialProps = async () => ({
  namespacesRequired: ['prebodapage', 'appheader'],
});

export default Preboda;
