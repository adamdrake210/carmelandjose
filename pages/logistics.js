import React from 'react';
import Logisticspage from '../src/Components/Logisticspage';
import PageLayout from '../src/Components/PageLayout';

const Logistics = () => (
  <PageLayout height="transitional">
    <Logisticspage />
  </PageLayout>
);

Logistics.getInitialProps = async () => ({
  namespacesRequired: ['logisticspage', 'appheader'],
});

export default Logistics;
