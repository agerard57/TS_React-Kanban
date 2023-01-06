/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Button, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { LanguageCode, useLanguage } from '../../language';
import { ReactComponent as EnglishFlag } from '../assets/EnglishFlag.svg';
import { ReactComponent as FrenchFlag } from '../assets/FrenchFlag.svg';

export const Navbar: FC = () => {
  const { t } = useTranslation('Core');
  const { language, change } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageChange = (newLanguage: LanguageCode) => () => {
    change(newLanguage);
  };

  const handleNavigate = (path: string) => () => {
    navigate(path);
  };

  return (
    <BootstrapNavbar
      css={css`
        background-color: #ffffff0d;
        padding: 0.5rem 1rem;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(1rem);
      `}
    >
      <div
        css={css`
          padding: 0 1rem;

          > * {
            margin: 0 0.2rem;
            cursor: pointer;
            border-radius: 5px;
          }
        `}
      >
        <EnglishFlag
          onClick={handleLanguageChange('en')}
          css={css`
            opacity: ${language === 'en' ? 1 : 0.3};
          `}
        />
        <FrenchFlag
          onClick={handleLanguageChange('fr')}
          css={css`
            opacity: ${language === 'fr' ? 1 : 0.3};
          `}
        />
      </div>
      <BootstrapNavbar.Brand
        onClick={handleNavigate('/')}
        css={css`
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          cursor: pointer;
          transition: transform 0.2s ease-in-out;

          &:hover {
            transform: translateX(-50%) scale(1.1);
          }
        `}
      >
        {t('navbar.title')}
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle />
      <BootstrapNavbar.Collapse
        className="justify-content-end"
        css={css`
          > * {
            padding-left: 1rem;
            padding-right: 1rem;
            font-family: 'Baloo2';
          }
        `}
      >
        <Button
          variant="outline-light"
          onClick={handleNavigate('/login')}
          css={css`
            margin: 0 0.5rem;
          `}
        >
          {t('navbar.login')}
        </Button>
        <Button variant="outline-light" onClick={handleNavigate('/register')}>
          {t('navbar.register')}
        </Button>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};
