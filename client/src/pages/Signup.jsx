import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post("https://login-page-xxvf.onrender.com/api/auth/register", {
        name,
        email,
        password,
      });

      setLoading(false);
      // alert("Account Created Successfully!");
      navigate('/')

    } catch (err) {
      console.log(err)
      setLoading(false);
      setError("Registration failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,#ffffff15,transparent_70%)] blur-3xl animate-pulse" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-[380px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]"
      >
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          Create Account
        </h2>

        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Name */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:bg-white/10 transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:bg-white/10 transition"
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
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:bg-white/10 transition"
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

        {/* Button */}
        <button
          disabled={loading}
          className="w-full cursor-pointer py-3 rounded-xl bg-white text-black font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-gray-200 active:scale-95 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Creating...
            </>
          ) : (
            "Sign Up"
          )}
        </button>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-white underline hover:text-gray-300 transition"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}