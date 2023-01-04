import { render, screen as screenTest } from '@testing-library/react';

import { LandingPage } from './landingPage';

test('renders the body', () => {
  render(<LandingPage />);
  const linkElement = screenTest.getByText(/Board page/i);
  expect(linkElement).toBeInTheDocument();
});
