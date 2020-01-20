import { useState, useCallback } from "react";

const useUpdate = () => {
  const [isUpdate, setUpdate] = useState(false);

  const setUpdateTrue = useCallback(() => {
    setUpdate(true);
  }, []);

  const setUpdateFalse = useCallback(() => {
    setUpdate(false);
  }, []);

  return { setUpdateTrue, setUpdateFalse, isUpdate };
};

export default useUpdate;
