import { useState } from "react";
import "./style.scss";
import Button from "../../components/button/Button";
import InputText from "../../components/input/InputText";

export default function AddNewForm({ handleSubmit, formClass }) {
  const [form, setForm] = useState({
    title: "",
    creator: "",
    description: "",
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

  const checkValidate = () =>
    validData.title && validData.creator && validData.description;

  return (
    <form onSubmit={handleSubmit} className={`formClass ${formClass}`}>
      {renderForm()}
      <div>
        <Button title={"Save"} type={"submit"} disabled={!checkValidate()} />
      </div>
    </form>
  );
}
