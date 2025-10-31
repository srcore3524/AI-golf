import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - in production, this would call your backend API
    const mockUser: User = {
      id: "1",
      name: email.split("@")[0],
      email: email,
    };

    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));

    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem("onboardingComplete");
    if (hasCompletedOnboarding) {
      navigate("/dashboard");
    } else {
      navigate("/onboarding");
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    // Mock signup - in production, this would call your backend API
    const mockUser: User = {
      id: "1",
      name: name,
      email: email,
    };

    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
    navigate("/onboarding");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("onboardingComplete");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
