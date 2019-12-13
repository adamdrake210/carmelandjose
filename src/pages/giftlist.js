import React from 'react';
import Giftlistpage from '../Components/Giftlistpage';
import PageLayout from '../Components/PageLayout';

const Giftlist = () => (
  <PageLayout>
    <Giftlistpage />
  </PageLayout>
);

Giftlist.getInitialProps = async () => ({
  namespacesRequired: ['giftlistpage', 'appheader'],
});

export default Giftlist;
