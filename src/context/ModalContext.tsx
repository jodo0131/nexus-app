import React, { createContext, ReactNode, useContext, useState } from 'react';
import CreateClientModal from 'features/Modals/CreateClientModal/CreateClientModal';
import EditClientModal from 'features/Modals/EditClientModal/EditClientModal';

interface ModalContextType {
  isCreateClientModalOpen: boolean;
  isEditClientModalOpen: boolean;
  openCreateClientModal: () => void;
  closeCreateClientModal: () => void;
  openEditClientModal: () => void;
  closeEditClientModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isCreateClientModalOpen, setCreateClientModalOpen] = useState(false);
  const [isEditClientModalOpen, setEditClientModalOpen] = useState(false);

  const modalActions = {
    openCreateClientModal: () => setCreateClientModalOpen(true),
    closeCreateClientModal: () => setCreateClientModalOpen(false),
    openEditClientModal: () => setEditClientModalOpen(true),
    closeEditClientModal: () => setEditClientModalOpen(false),
  };

  return (
    <ModalContext.Provider
      value={{
        isCreateClientModalOpen,
        isEditClientModalOpen,
        ...modalActions,
      }}
    >
      {children}

      {isCreateClientModalOpen && (
        <CreateClientModal
          open={isCreateClientModalOpen}
          toggleModal={modalActions.closeCreateClientModal}
        />
      )}

      {isEditClientModalOpen && (
        <EditClientModal
          open={isEditClientModalOpen}
          toggleModal={modalActions.closeEditClientModal}
        />
      )}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};
