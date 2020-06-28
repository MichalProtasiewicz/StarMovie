import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledHeading = styled(Heading)`
  margin-bottom: 60px;
`;

const ShopListPage = () => {
  const [t, i18n] = useTranslation('translation');
  return (
    <UserPageTemplate>
      <Suspense fallback="loading">
        <StyledHeading big>Ustawienia</StyledHeading>
        <Paragraph>Język:</Paragraph>
        <button onClick={() => i18n.changeLanguage('pl')}>pl</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
        <h1>{t('welcome.title', { framework: 'React' })}</h1>
      </Suspense>
    </UserPageTemplate>
  );
};

export default ShopListPage;
