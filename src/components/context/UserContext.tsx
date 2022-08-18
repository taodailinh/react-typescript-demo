import { useState, createContext } from "react";
export type AuthUser = {
  name: string;
  email: string;
};

type UserContextPrivderProps = {
  children: React.ReactNode;
};

type UserContextProvider = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
export const UserContext = createContext({} as UserContextProvider);

export const UserContextProvider = ({ children }: UserContextPrivderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
