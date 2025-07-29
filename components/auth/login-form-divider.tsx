import React from "react";

export function LoginFormDivider() {
  return (
    <div className="animate-element animate-delay-700 relative flex items-center justify-center">
      <span className="w-full border-t border-border"></span>
      <span className="px-4 text-sm text-muted-foreground bg-background absolute">
        Or continue with
      </span>
    </div>
  );
}
