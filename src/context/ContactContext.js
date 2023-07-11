import { createContext, useContext, useState } from "react";

const ContactContext = createContext(null);
export function ContactProvider({ children }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  return (
    <ContactContext.Provider value={{ userData, setUserData }}>
      {children}
    </ContactContext.Provider>
  );
}
export const useFormData = () => useContext(ContactContext);
