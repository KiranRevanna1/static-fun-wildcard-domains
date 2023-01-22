import { useEffect, useState } from "react";

export default function Spinner({ delay }) {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSpinner(true), delay);
    return () => clearInterval(timeout);
  }, []);

  if (showSpinner) {
    return (
      <div className="balls">
        <div />
        <div />
        <div />
        <style jsx>{`
          .balls {
            width: 4em;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
          }

          .balls div {
            width: 0.8em;
            height: 0.8em;
            border-radius: 50%;
            background-color: #fc2f70;
          }

          .balls div:nth-of-type(1) {
            transform: translateX(-100%);
            animation: left-swing 0.5s ease-in alternate infinite;
          }

          .balls div:nth-of-type(3) {
            transform: translateX(-95%);
            animation: right-swing 0.5s ease-out alternate infinite;
          }

          @keyframes left-swing {
            50%,
            100% {
              transform: translateX(95%);
            }
          }

          @keyframes right-swing {
            50% {
              transform: translateX(-95%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    );
  } else {
    return null;
  }
}
