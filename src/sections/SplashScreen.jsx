import { useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        src="/namevideo.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default SplashScreen;