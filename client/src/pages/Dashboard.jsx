import { useLocation, Navigate } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center w-[420px] shadow-lg">
        <h1 className="text-3xl font-semibold text-white mb-4">
          Welcome to Dashboard 👋
        </h1>

        <p className="text-lg text-gray-300">
          Hello, <span className="text-white font-medium">{user.name}</span>
        </p>

        {/* <p className="text-sm text-gray-400 mt-3">
          Email: {user.email}
        </p> */}
      </div>
    </div>
  );
}