import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const loginAsAdmin = (isAdminStatus) => {
    setIsAdmin(isAdminStatus);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, loginAsAdmin }}>
      {children}
    </AdminContext.Provider>
  );

};

