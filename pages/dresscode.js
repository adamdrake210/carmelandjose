import React from 'react';
import Dresscodepage from '../src/Components/Dresscodepage';
import PageLayout from '../src/Components/PageLayout';

const Dresscode = () => (
  <PageLayout>
    <Dresscodepage />
  </PageLayout>
);

Dresscode.getInitialProps = async () => ({
  namespacesRequired: ['dresscodepage', 'appheader'],
});

export default Dresscode;
