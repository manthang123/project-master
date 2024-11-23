import React from 'react';

function SignupForm() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Johnson Doe"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="johnsondoe@nomail.com"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="**********"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button className="w-full bg-black text-white font-bold py-2 rounded-lg hover:bg-gray-800 transition duration-300">
            Get Started
          </button>

          <div className="mt-4 text-center text-gray-600">Or</div>

          <div className="flex flex-col space-y-2 mt-4">
            <button className="w-full flex items-center justify-center bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
                className="w-6 h-6 mr-2"
              />
              Sign up with Google
            </button>

            <button className="w-full flex items-center justify-center bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition">
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="Facebook"
                className="w-6 h-6 mr-2"
              />
              Sign up with Facebook
            </button>

            <button className="w-full flex items-center justify-center bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition">
              <img
                src="https://img.icons8.com/color/48/000000/mac-os.png"
                alt="Apple"
                className="w-6 h-6 mr-2"
              />
              Sign up with Apple
            </button>
          </div>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 font-bold">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
