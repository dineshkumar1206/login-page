import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setLoading(false);
      alert("Login Successful!");
    } catch (err) {
      setLoading(false);
      setError("Invalid email or password");
    }
  };

  return (
   <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

    {/* Grid Background   */}

    {/*   */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:24px_24px]" />

    {/* Glow Effect */}
    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,#ffffff15,transparent_70%)] blur-3xl animate-pulse" />

    {/* Login Card */}
    <form
      onSubmit={handleSubmit}
      className="relative z-10 w-[380px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]"
    >
      {/* Title */}
      <h2 className="text-3xl font-semibold text-center text-white tracking-wide mb-8">
        Welcome Back
      </h2>

      {/* Error */}
      {error && (
        <div className="mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Email */}
      <div className="mb-5">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Password */}
      <div className="mb-6 relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div
          className="absolute right-4 top-3.5 text-gray-400 hover:text-white cursor-pointer transition"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
      </div>

      {/* Login Button */}
      <button
        disabled={loading}
        className="w-full py-3 rounded-xl bg-white text-black font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-gray-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Signing In...
          </>
        ) : (
          "Login"
        )}
      </button>

      {/* Footer */}
          <p className="text-center text-sm text-gray-400 mt-6">
       Don't have an account?{" "}
       <Link
         to="/signup"
         className="text-white underline hover:text-gray-300 transition"
       >
         SignUp
       </Link>
     </p>
    </form>
  </div>
) }