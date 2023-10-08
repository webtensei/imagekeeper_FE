'use client';
import Portal from "../Portal";
import {useMount} from "../../hooks/useMount";
import {Layout} from "./Layout";

export const Modal = ({ opened, onClose, children }) => {
  const { mounted } = useMount({ opened });

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <Layout onClose={onClose} opened={opened}>
        {children}
      </Layout>
    </Portal>
  );
};
