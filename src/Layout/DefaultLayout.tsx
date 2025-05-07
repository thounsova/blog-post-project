import React, { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
  className?: string;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  className = "",
}) => {
  return <main className={`min-h-screen w-full ${className}`}>{children}</main>;
};

export default DefaultLayout;
