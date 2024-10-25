'use client';
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/lib/queryClient";
import React from "react";

const CustomQueryClientProvider = ({ 
  children 
}: Readonly<{ 
  children: React.ReactNode; 
}>) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default CustomQueryClientProvider;