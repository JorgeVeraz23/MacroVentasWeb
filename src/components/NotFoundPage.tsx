import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';
import PageContainer from './PageContainner';

const NotFoundPage: React.FC = () => {
  return (
    <PageContainer>
      <Container textAlign="center" style={{ marginTop: '5rem' }}>
        <Header as="h2" icon>
          <Icon name="exclamation triangle" color="red" />
          Página no encontrada
          <Header.Subheader>Lo sentimos, la página que estás buscando no existe.</Header.Subheader>
        </Header>
      </Container>
    </PageContainer>
  );
};

export default NotFoundPage;
