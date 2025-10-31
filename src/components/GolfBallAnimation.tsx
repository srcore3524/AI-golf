import { useEffect, useState } from "react";

interface GolfBall {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const GolfBallAnimation = () => {
  const [balls, setBalls] = useState<GolfBall[]>([]);

  useEffect(() => {
    // Create 5 golf balls with random positions and timings
    const newBalls: GolfBall[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10, // 10-90% across screen
      y: Math.random() * 60 + 20, // 20-80% down screen
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2, // 3-5 seconds
    }));
    setBalls(newBalls);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {balls.map((ball) => (
        <div
          key={ball.id}
          className="absolute animate-golf-ball-bounce"
          style={{
            left: `${ball.x}%`,
            top: `${ball.y}%`,
            animationDelay: `${ball.delay}s`,
            animationDuration: `${ball.duration}s`,
          }}
        >
          {/* Golf ball with dimples effect */}
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            {/* Main ball */}
            <div className="w-full h-full bg-white rounded-full shadow-2xl relative overflow-hidden">
              {/* Shine effect */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-white/80 rounded-full blur-sm" />

              {/* Dimples pattern */}
              <div className="absolute inset-0 opacity-20">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gray-400 rounded-full"
                    style={{
                      top: `${(i % 3) * 30 + 10}%`,
                      left: `${Math.floor(i / 3) * 25 + 10}%`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Shadow */}
            <div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full blur-sm"
              style={{
                animation: 'golf-shadow 3s ease-in-out infinite',
                animationDelay: `${ball.delay}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GolfBallAnimation;
