const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white">FixNearby</h2>
          <p className="mt-3 text-sm text-gray-400">
            Connecting you with trusted local service providers quickly and easily.
          </p>
          <div className="mt-4 text-sm text-gray-400 space-y-1">
            <div className="font-semibold text-gray-200">Trust-first marketplace</div>
            <div>Vetted pros • Secure booking • Clear pricing</div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/#how-it-works" className="hover:text-blue-400">How it works</a></li>
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <li><a href="/register" className="hover:text-blue-400">Join as a Pro</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-medium mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
          </ul>
          <div className="mt-5">
            <h3 className="text-white font-medium mb-3">Contact</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <div><span className="text-gray-300 font-semibold">Email:</span> support@fixnearby.com</div>
              <div><span className="text-gray-300 font-semibold">Phone:</span> +1 (000) 000-0000</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} FixNearby. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-blue-400">Help</a>
          <a href="#" className="hover:text-blue-400">Privacy</a>
          <a href="#" className="hover:text-blue-400">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;