import React from 'react';
import Traditionspage from '../src/Components/Traditionspage';
import PageLayout from '../src/Components/PageLayout';

const Traditions = () => (
  <PageLayout height="transitional">
    <Traditionspage />
  </PageLayout>
);

Traditions.getInitialProps = async () => ({
  namespacesRequired: ['traditionspage', 'appheader'],
});

export default Traditions;
