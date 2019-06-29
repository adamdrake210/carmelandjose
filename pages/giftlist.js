import React from 'react';
import Giftlistpage from '../src/Components/Giftlistpage';
import PageLayout from '../src/Components/PageLayout';

const Giftlist = () => (
  <PageLayout height="transitional">
    <Giftlistpage />
  </PageLayout>
);

Giftlist.getInitialProps = async () => ({
  namespacesRequired: ['giftlistpage', 'appheader'],
});

export default Giftlist;
