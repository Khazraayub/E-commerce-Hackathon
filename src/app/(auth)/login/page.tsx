import Link from "next/link";
import "@fontsource/josefin-sans";
import "@fontsource/lato";
export default function Login() {
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen bg-white">
      {/* Header */}
      <div className="text-start pt-5 w-full h-[200px] pl-10 bg-[#F6F5FF] mb-8 ">
        <h1 className="text-3xl font-bold font-[josefin-sans]">My Account</h1>
        <p className="text-sm text-black font-lato">
          Home. &nbsp; Pages. &nbsp;<span className="text-[#FB2E86]"> Login </span>
        </p>
      </div>

      {/* Login Form */}
      <div className="flex justify-center items-center pb-10">
      <div className="bg-white shadow-lg  rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center font-[josefin-sans] mb-4">Login</h2>
        <p className="text-sm text-[#9096B2] font-[lato] text-center mb-6">
          Please login using account details below.
        </p>
        
        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-[lato] font-medium text-[#9096B2]">
            
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            placeholder="Email Address"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium font-[lato] text-[#9096B2]">
          
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            placeholder="Password"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-left mb-6">
          <Link href="/forgot-password" className="text-sm font-[lato] text-[#9096B2] hover:underline">
            Forgot your password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#FB2E86] font-lato text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
        >
          Sign In
        </button>

        {/* Create Account */}
        <p className="mt-4 text-center font-[lato] text-sm text-[#9096B2]">
          Don’t have an account?{" "}
          <Link href="/register" className="text-[#9096B2] font-[lato] font-medium hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
}
