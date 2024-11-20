"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      setError("Failed to sign in with GitHub. Please try again.");
      console.error("Error during sign-in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      setError("Failed to sign out. Please try again.");
      console.error("Error during sign-out:", error);
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/week-9/shopping-list");
    }
  }, [user, router]);

  return (
    <div>
      <h1>Welcome to the Shopping List App!</h1>

      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut}>Log Out</button>
          <button onClick={() => router.push("/week-9/shopping-list")}>
            Go to Shopping List
          </button>
        </div>
      ) : (
        <div>
          <p>Please sign in to access the app.</p>
          {error && <p>{error}</p>}
          <button onClick={handleSignIn}>Sign in with GitHub</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
