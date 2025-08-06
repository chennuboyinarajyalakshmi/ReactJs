import { useContext } from "react";
import { AuthContext } from "../../context";

function ProfilePage() {
  const { user, handleLogOut } = useContext(AuthContext);

  if (!user) {
    return <p>Loading user info...</p>; // or <Navigate to="/login" />
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded-md bg-white text-center">
      <h3 className="text-xl font-bold mb-2">{user.displayName || "Welcome!"}</h3>
      <p className="mb-4">{user.email}</p>
      <button
        onClick={handleLogOut}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Log Out
      </button>
    </div>
  );
}

export default ProfilePage;
