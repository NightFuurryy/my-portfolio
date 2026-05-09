import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-float-slow"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl text-foreground/80 mb-8">
          Lost in the digital darkness...
        </p>
        <p className="text-lg text-foreground/70 mb-8 max-w-md">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-dark font-semibold rounded-lg transition-all duration-300 hover:shadow-glow-cyan-lg hover:scale-105 active:scale-95"
        >
          <ArrowLeft size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
