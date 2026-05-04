import { useState } from "react";
import useToast from "../hooks/useToast";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: Add registration logic and API connection
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      showToast('Account created successfully!', 'success');
    } catch (error) {
      console.error('Registration failed:', error);
      showToast('Registration failed. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
        </div>
        {/* TODO: Add authentication logic and API connection */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <input id="name" name="name" type="text" required className="input-base" placeholder="Full Name" />
            </div>
            <div>
              <input id="email-address" name="email" type="email" required className="input-base" placeholder="Email address" />
            </div>
            <div>
              <input id="password" name="password" type="password" required className="input-base" placeholder="Password" />
            </div>
          </div>
          <div>
            <button type="submit" disabled={loading} className="btn-primary btn-primary-lg btn-full">
              <span className={`btn-text ${loading ? 'hidden' : ''}`}>Register</span>
              <span className={`btn-loader ${loading ? '' : 'hidden'}`}>Loading...</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
