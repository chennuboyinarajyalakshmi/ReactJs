import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CommonForm from "../../components/common-form";
import { AuthContext } from "../../context";
import { loginFormControls } from "../../config";

function LoginPage() {
  const {
    loginFormData,
    setLoginFormData,
    loginWithFireBase,
    setLoading,
    loading,
    user,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLoginFormSubmit(event) {
    event.preventDefault(); // ✅ fixed typo

    setLoading(true);

    loginWithFireBase()
      .then((result) => {
        console.log(result);
        if (result) {
          navigate("/profile");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        setLoading(false);
      });
  }

  if (loading) {
    return <h1>Loading!! Please Wait...</h1>
  }

  if (user) {
    navigate("/profile");
    return null; // avoid duplicate rendering
  }

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className="px-6 py-5">
        <h3>Welcome Back</h3>
        <p>Login Page</p>
        <CommonForm
          formControls={loginFormControls}
          formData={loginFormData}
          setFormData={setLoginFormData}
          onSubmit={handleLoginFormSubmit}
          buttonText={"Login"}
        />
      </div>
    </div>
  );
}

export default LoginPage;
