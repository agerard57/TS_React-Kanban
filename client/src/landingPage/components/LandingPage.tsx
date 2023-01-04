/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { useLandingPage } from '../hooks';

export const LandingPage: FC = () => {
  const { t } = useTranslation('LandingPage');

  useLandingPage();

  const lists = [
    {
      title: 'BoardTitle 1',
      items: [
        {
          title: 'item1',
          description: 'item1Description'
        },
        {
          title: 'item2',
          description: 'item2Description'
        }
      ]
    },
    {
      title: 'BoardTitle 2',
      items: [
        {
          title: 'item3',
          description: 'item3Description'
        },
        {
          title: 'item4',
          description: 'item4Description'
        }
      ]
    }
  ];

  return (
    <>
      <Container
        css={css`
          padding: 5vw 1vw;
        `}
      >
        <h1>{t('title')}</h1>
        <Container
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          {/* Lists are row. in them, title and their items */}
          {lists.map((list) => (
            <Col
              css={css`
                padding: 1vw;
              `}
            >
              <h2>{t(list.title)}</h2>
              <hr />
              {list.items.map((item) => (
                <Row
                  css={css`
                    padding: 1vw;
                  `}
                >
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.description)}</p>
                </Row>
              ))}
            </Col>
          ))}
        </Container>
      </Container>
    </>
  );
};
