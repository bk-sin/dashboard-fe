import { FC, ReactNode } from "react";
import { HERO_IMAGE_URL } from "@/lib/constants";

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="h-[100dvh] w-[100dvw] flex flex-col md:flex-row">
      <section className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md">{children}</div>
      </section>
      {HERO_IMAGE_URL && (
        <section className="relative hidden flex-1 p-4 md:block">
          <div
            className="animate-slide-right animate-delay-300 absolute inset-4 rounded-3xl bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
          />
        </section>
      )}
    </div>
  );
};
