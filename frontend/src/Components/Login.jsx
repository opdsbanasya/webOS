import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { LogIn, Mail, Lock } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", formData, {
        withCredentials: true
      });
      
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-screen h-screen relative overflow-hidden flex items-center justify-center p-4 font-google">
      {/* Organic Blob Background - Pixel launcher style */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-indigo-300/40 dark:from-blue-600/20 dark:to-indigo-600/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-gradient-to-br from-purple-300/40 to-pink-300/40 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '3s' }}></div>
      </div>

      {/* Glass-morphism Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-2xl bg-white/60 dark:bg-white/10 rounded-[2.5rem] p-10 shadow-2xl shadow-black/10 border border-white/80 dark:border-white/20">
          {/* Header with Icon */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-blue-500 to-indigo-600 mb-6 shadow-xl shadow-blue-500/30">
              <LogIn className="h-10 w-10 text-white" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl font-light text-slate-800 dark:text-white mb-3 tracking-tight">
              Welcome back
            </h1>
            <p className="text-slate-600 dark:text-slate-400 font-normal">
              Sign in to continue to WebOS
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-3xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/30 backdrop-blur-xl">
              <p className="text-sm text-red-700 dark:text-red-400 font-medium text-center">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2">
                  <Mail className="h-5 w-5 text-slate-400" strokeWidth={2} />
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-14 pr-5 py-4 rounded-3xl bg-white/60 dark:bg-white/10 border border-white/80 dark:border-white/20 text-slate-800 dark:text-white placeholder:text-slate-400 outline-none backdrop-blur-xl material-transition
                    focus:bg-white/80 dark:focus:bg-white/15 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-500/20"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2">
                  <Lock className="h-5 w-5 text-slate-400" strokeWidth={2} />
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-14 pr-5 py-4 rounded-3xl bg-white/60 dark:bg-white/10 border border-white/80 dark:border-white/20 text-slate-800 dark:text-white placeholder:text-slate-400 outline-none backdrop-blur-xl material-transition
                    focus:bg-white/80 dark:focus:bg-white/15 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-500/20"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-base shadow-xl shadow-blue-500/30 material-transition
                hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-slate-300 dark:bg-slate-700"></div>
            <span className="text-sm text-slate-500 dark:text-slate-400">or</span>
            <div className="flex-1 h-px bg-slate-300 dark:bg-slate-700"></div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center space-y-3">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Don't have an account?
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full backdrop-blur-xl bg-white/60 dark:bg-white/10 border-2 border-blue-500/30 text-blue-600 dark:text-blue-400 font-medium text-sm material-transition
                hover:bg-white/80 dark:hover:bg-white/20 hover:border-blue-500/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              Create account
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-500 font-normal">
            © 2025 WebOS · Google Pixel Design
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
