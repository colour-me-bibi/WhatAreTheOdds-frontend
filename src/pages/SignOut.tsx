import useSignOut from "#/api/mutations/useSignOut";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut: React.FC = () => {
  const navigate = useNavigate();

  const signOut = useSignOut({
    onSuccess: () => navigate("/", { replace: true }),
    onError: (error) => alert(error),
  });

  useEffect(() => {
    signOut.mutate();
  }, []);

  return (
    <div className="container mt-3">
      <h1>Signing out...</h1>
    </div>
  );
};

export default SignOut;
