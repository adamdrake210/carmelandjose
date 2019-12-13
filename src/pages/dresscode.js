import React from 'react';
import Dresscodepage from '../Components/Dresscodepage';
import PageLayout from '../Components/PageLayout';

const Dresscode = () => (
  <PageLayout>
    <Dresscodepage />
  </PageLayout>
);

Dresscode.getInitialProps = async () => ({
  namespacesRequired: ['dresscodepage', 'appheader'],
});

export default Dresscode;
