import React from 'react';
import Giftlistpage from '../src/Components/Giftlistpage';
import PageLayout from '../src/Components/PageLayout';

const Giftlist = () => (
  <PageLayout>
    <Giftlistpage />
  </PageLayout>
);

Giftlist.getInitialProps = async () => ({
  namespacesRequired: ['giftlistpage', 'appheader'],
});

export default Giftlist;
