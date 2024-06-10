import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Works } from '@/data/works';

interface ContextType {
  currentWorkHover: Works | null;
  setCurrentWorkHover: React.Dispatch<React.SetStateAction<Works | null>>;
}

const WorkContext = createContext<ContextType | undefined>(undefined);

export const WorkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentWorkHover, setCurrentWorkHover] = useState<Works | null>(null);

  return (
    <WorkContext.Provider value={{ currentWorkHover, setCurrentWorkHover }}>
      {children}
    </WorkContext.Provider>
  );
};

export const useWorkContext = (): ContextType => {
  const context = useContext(WorkContext);
  if (context === undefined) {
    throw new Error('useWorkContext must be used within a WorkProvider');
  }
  return context;
};
