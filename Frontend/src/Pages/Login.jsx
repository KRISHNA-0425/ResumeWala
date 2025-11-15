import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen mx-auto bg-gradient-to-b from-indigo-50 to-white">
        <form
          onSubmit={handleSubmit}
          className="sm:w-[420px] w-[90%] text-center border border-gray-300/60 rounded-2xl px-10 py-10 bg-white shadow-md"
        >
          <h1 className="text-gray-900 text-4xl mt-2 font-semibold">
            {state === "login" ? "Login" : "Sign up"}
          </h1>
          <p className="text-gray-500 text-sm mt-3 mb-6">
            {state === "login"
              ? "Please sign in to continue"
              : "Create your account to get started"}
          </p>

          {/* Name field (for register only) */}
          {state !== "login" && (
            <div className="flex items-center w-full bg-white border border-gray-300/80 h-14 rounded-full overflow-hidden pl-6 gap-3 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="border-none outline-none ring-0 text-gray-700 w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Email field */}
          <div className="flex items-center w-full bg-white border border-gray-300/80 h-14 rounded-full overflow-hidden pl-6 gap-3 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="border-none outline-none ring-0 text-gray-700 w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password field */}
          <div className="flex items-center w-full bg-white border border-gray-300/80 h-14 rounded-full overflow-hidden pl-6 gap-3 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-none outline-none ring-0 text-gray-700 w-full"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Forget password */}
          <div className="mt-4 text-left text-indigo-500">
            <button
              type="button"
              className="text-sm hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="mt-6 w-full h-12 rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition-all font-medium text-sm"
          >
            {state === "login" ? "Login" : "Sign up"}
          </button>

          {/* Toggle */}
          <p
            onClick={() =>
              setState((prev) => (prev === "login" ? "register" : "login"))
            }
            className="text-gray-500 text-sm mt-4 mb-6 cursor-pointer"
          >
            {state === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <span className="text-indigo-500 hover:underline">
              Click here
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
