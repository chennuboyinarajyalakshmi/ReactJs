import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import CommonForm from "../../components/common-form";
import { AuthContext } from "../../context";
import { registerFormControls } from "../../config";
function RegisterPage() {
  const {
    registerFormData,
    setRegisterFormData,
    registerWithFirebase,
    user,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleRegisterFormSubmit(event) {
    event.preventDefault();
    setLoading(true);

    registerWithFirebase()
      .then((result) => {
        console.log(result);

        return updateProfile(result.user, {
          displayName: registerFormData.name,
        });
      })
      .then(() => {
        setLoading(false);
        navigate("/profile");
      })
      .catch((error) => {
        console.error("Registration error:", error);
        setLoading(false);
      });
  }

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user]);

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className="px-6 py-5">
        <h3 className="text-lg font-bold">Welcome!</h3>
        <p className="mb-4">Register Page</p>
        <CommonForm
          formControls={registerFormControls}
          formData={registerFormData}
          setFormData={setRegisterFormData}
          onSubmit={handleRegisterFormSubmit}
          buttonText={"Register"}
        />
      </div>
    </div>
  );
}

export default RegisterPage;
