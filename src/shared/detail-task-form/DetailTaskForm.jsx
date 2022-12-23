import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import InputText from "../../components/input/InputText";
import RadioCheckboxButton from "../../components/radio-checkbox-button/RadioCheckboxButton";
import { STATUS } from "../../constants";
import "./style.scss";

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

export default function DetailTaskForm({
  formClass,
  currentTask,
  handleChangeTask,
}) {
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

  const { title, creator, description } = form;
  const formField = [
    {
      label: "Title",
      placeholder: "Type title",
      name: "title",
      value: title,
      regExPattern: /^.{6,18}$/,
      messageError: "Please type title, it has length from 6 to 18",
    },
    {
      label: "Creator",
      placeholder: "Name of Creator",
      name: "creator",
      value: creator,
      regExPattern: /^.{2,12}$/,
      messageError: "Please type Name if Creator, it has length from 2 to 12",
    },
    {
      label: "Description",
      placeholder: "Description Details",
      name: "description",
      value: description,
      regExPattern: /^.{5,150}$/,
      messageError: "Please type Description, it has length from 5 to 150",
    },
  ];

  const handleChangeForm = (e, item) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    if (value) {
      setValidData({
        ...validData,
        [name]: item.regExPattern.test(value),
      });
    }
  };

  const checkValidate = () => {
    return validData.title && validData.creator && validData.description;
  };

  const setDefaultValue = (e) => {
    e && e.preventDefault();
    setForm(currentTask);
    setValidData({
      title: formField[0].regExPattern.test(currentTask.title),
      creator: formField[1].regExPattern.test(currentTask.creator),
      description: formField[2].regExPattern.test(currentTask.description),
    });
  };

  useEffect(() => {
    setDefaultValue();
  }, []);

  function renderForm() {
    return formField.map((item, index) => {
      return (
        <InputText
          key={`${index}_${item.name}`}
          {...item}
          onChange={(e) => handleChangeForm(e, item)}
          error={!item.value || validData[item.name] ? "" : item.messageError}
        />
      );
    });
  }

  function renderRadioButton() {
    return radioList.map((item, index) => {
      return <RadioCheckboxButton
        key={`${item.value}_${index}`}
        title={item.title}
        type="radio"
        name={"status"}
        value={item.value}
        isChecked={form.status === item.value}
        handleOnChange={(e) => handleChangeForm(e)}
      />;
    });
  }

  return (
    <form
      className={`formClass detail-form ${formClass}`}
      onSubmit={(e) => handleChangeTask(e, form)}
    >
      {renderForm()}
      <div className="radios-block">
      {renderRadioButton()}
      </div>
      
      <div className="buttons-block">
        <Button title={"Save"} disabled={!checkValidate()} />
        <Button title={"Reset"} onClick={setDefaultValue} />
        <Button title={"Delete"} onClick={handleChangeTask} />
      </div>
    </form>
  );
}
