import { createContext, useContext, useState } from 'react';

const ParticipantsContext = createContext();

function useParticipants() {
  const context = useContext(ParticipantsContext);
  if (!context) {
    throw new Error("Ocorreu um erro, por favor entre em contato com nikolau");
  }
  return context;
}

const ParticipantsProvider = (props) => {
  const [participants, setParticipants] = useState([]);

  return <ParticipantsContext.Provider {...props} value={{ participants, setParticipants }} />;
};

export { ParticipantsProvider, useParticipants };