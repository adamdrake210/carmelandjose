import React from 'react';
import Dresscodepage from '../src/Components/Dresscodepage';
import PageLayout from '../src/Components/PageLayout';

const Dresscode = () => (
  <PageLayout height="transitional">
    <Dresscodepage />
  </PageLayout>
);

Dresscode.getInitialProps = async () => ({
  namespacesRequired: ['dresscodepage', 'appheader'],
});

export default Dresscode;
