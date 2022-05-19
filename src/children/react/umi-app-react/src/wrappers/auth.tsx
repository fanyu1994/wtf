import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { Redirect } from 'umi';

function useAuth() {
  return {
    isLogin: true,
  };
}

export default (props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
