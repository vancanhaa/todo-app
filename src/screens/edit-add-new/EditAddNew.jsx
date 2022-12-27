import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import Button from "../../components/button/Button";
import InputText from "../../components/input/InputText";
import RadioCheckboxButton from "../../components/radio-checkbox-button/RadioCheckboxButton";
import { LIST_TO_DO_KEY, ROUTER, STATUS } from "../../constants";
import { localStorageUlti } from "../../functions/localStorage";
import { setValidateRule } from "../../functions/validation";

const radioList = [
  {
    title: STATUS.NEW,
    value: STATUS.NEW,
  },
  {
    title: STATUS.DOING,
    value: STATUS.DOING,
  },
  {
    title: STATUS.DONE,
    value: STATUS.DONE,
  },
];

const { get, set } = localStorageUlti(LIST_TO_DO_KEY, []);

export default function EditAddNew({ isEditTask }) {
  const [form, setForm] = useState({
    title: "",
    creator: "",
    description: "",
    status: STATUS.NEW,
  });

  const [validData, setValidData] = useState({
    title: false,
    creator: false,
    description: true,
  });

  const formField = setValidateRule(form);
  const navigate = useNavigate();
  const { idTask } = useParams();

  useEffect(() => {
    if (isEditTask) {
      setDefaultValue();
    }
  }, []);

  useEffect(() => {
    const { creator, title, description } = form;
    setValidData({
      title: formField[0].regExPattern.test(title),
      creator: formField[1].regExPattern.test(creator),
      description: formField[2].regExPattern.test(description),
    });
  }, [form]);

  const setDefaultValue = (e) => {
    e && e.preventDefault();
    setForm(get()[idTask]);
  };

  const handleChangeForm = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      status: STATUS.NEW,
    };
    set([data, ...get()]);
    navigate(ROUTER.ALL);
  };

  const handleChangeTask = (e, isDelete) => {
    e.preventDefault();
    const todoItemsLocalStorage = get();
    if (!isDelete) {
      todoItemsLocalStorage.splice(idTask, 1, form);
    } else {
      todoItemsLocalStorage.splice(idTask, 1);
    }
    set([...todoItemsLocalStorage]);
    navigate(ROUTER.ALL);
  };

  function renderForm() {
    return formField.map((item, index) => {
      return (
        <InputText
          key={`${item.name}_${index}`}
          {...item}
          onChange={handleChangeForm}
          error={!item.value || validData[item.name] ? "" : item.messageError}
        />
      );
    });
  }

  const checkValidate = () =>
    validData.title && validData.creator && validData.description;

  function renderRadioButton() {
    return radioList.map((item, index) => (
      <RadioCheckboxButton
        key={`${item.value}_${index}`}
        title={item.title}
        type="radio"
        name={"status"}
        handleOnChange={handleChangeForm}
        value={item.value}
        isChecked={form.status === item.value}
      />
    ));
  }

  return (
    <form className={`formClass`}>
      {renderForm()}
      {isEditTask ? (
        <>
          <div className="radios-block">{renderRadioButton()}</div>
          <div className="buttons-block">
            <Button
              title={"Save"}
              disabled={!checkValidate()}
              onClick={handleChangeTask}
            />
            <Button title={"Reset"} onClick={setDefaultValue} />
            <Button
              title={"Delete"}
              onClick={(e) => handleChangeTask(e, true)}
            />
          </div>
        </>
      ) : (
        <Button
          title={"Save"}
          type={"submit"}
          disabled={!checkValidate()}
          onClick={handleSubmit}
        />
      )}
    </form>
  );
}
