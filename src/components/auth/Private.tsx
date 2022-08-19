import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLogin: boolean;
  component: React.ComponentType<ProfileProps>;
};
export const Private = ({ isLogin, component: Component }: PrivateProps) => {
  if (isLogin) {
    return <Component name="dai linh" />;
  } else {
    return <Login />;
  }
};
