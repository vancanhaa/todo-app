export const setValidateRule = (form) => {
  const { title, creator, description } = form;

  return [
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
};
