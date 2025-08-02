import React from "react";
import { useSession } from "next-auth/react";

export const WelcomeMessage: React.FC = () => {
  const { data: session } = useSession();
  const firstName = session?.user?.firstName;
  return (
    <div className="w-full py-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        {firstName ? `¡Bienvenido, ${firstName}!` : "¡Bienvenido al dashboard!"}
      </h2>
      <p className="text-gray-500 dark:text-gray-300 mt-2">
        Nos alegra tenerte de vuelta.
      </p>
    </div>
  );
};

export default WelcomeMessage;
