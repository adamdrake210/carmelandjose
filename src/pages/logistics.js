import React from 'react';
import Logisticspage from '../Components/Logisticspage';
import PageLayout from '../Components/PageLayout';

const Logistics = () => (
  <PageLayout>
    <Logisticspage />
  </PageLayout>
);

Logistics.getInitialProps = async () => ({
  namespacesRequired: ['logisticspage', 'appheader'],
});

export default Logistics;
