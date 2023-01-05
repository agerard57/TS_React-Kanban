import { FC, ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  isAllowed: boolean;
  redirectPath?: string;
  children: ReactNode;
};

export const ProtectedRoute: FC<Props> = ({ isAllowed, redirectPath = '/home', children }) => {
  const hasChildren = children ? <>{children}</> : <Outlet />;

  return isAllowed ? hasChildren : <Navigate to={redirectPath} replace />;
};