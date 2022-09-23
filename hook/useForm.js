import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [inputState, setinputState] = useState(initialForm);

  const onChangeForm = ({ target }) => {
    //Destructuramos el e.target
    const { name, value } = target;
    setinputState({
      ...inputState,
      [name]: value /* SERIA COMO UN TARGET.NAME */,
    });
  };

  const onResetForm = () => {
    setinputState(initialForm);
  };

  return {
    ...inputState,
    inputState,
    onChangeForm,
    onResetForm,
  };
};

/* DE PREFERENCIA USAR ESTE HOOK CUANDO SE TENGA MAS DE UN INPUT */
