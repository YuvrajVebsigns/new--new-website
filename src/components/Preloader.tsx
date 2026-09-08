'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setProgress((currentProgress) => Math.min(currentProgress + 7, 92));
    }, 140);

    const handleWindowLoad = () => {
      setProgress(100);

      setTimeout(() => {
        setIsLoaded(true);
      }, 500);

      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    };

    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
      return () => {
        window.clearInterval(progressTimer);
        window.removeEventListener('load', handleWindowLoad);
      };
    }

    return () => window.clearInterval(progressTimer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`tj-preloader ${isLoaded ? 'is-loaded' : 'is-loading'}`}
      style={{
        display: isVisible ? 'block' : 'none',
      }}
    >
      <div className="tj-preloader-inner">
        <div className="tj-preloader-content-wrapper">
          <div className="tj-preloader-mark" aria-hidden="true">
            <div className="tj-preloader-ring"></div>
            <div className="tj-preloader-mark-core">V</div>
          </div>

          <div className="tj-preloader-copy">
            <div className="tj-preloader-kicker">VishwasAI</div>
            <div className="tj-preloader-text">Preparing your experience</div>
            <div className="tj-preloader-status" aria-live="polite">
              <span className="tj-preloader-signal" aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </span>
              <span>{progress < 100 ? 'Connecting to the studio' : 'Ready to explore'}</span>
              <span className="tj-preloader-progress-value">{progress}%</span>
            </div>
            <div className="tj-preloader-progress" aria-hidden="true">
              <span style={{ width: `${progress}%` }}></span>
            </div>
          </div>
        </div>
      </div>
      <div className="tj-preloader-overlay"></div>
    </div>
  );
}
