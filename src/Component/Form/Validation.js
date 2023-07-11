export default function validation({ name, email, type, message }) {
  const validationObj = {};
  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (name.length <= 5) {
    validationObj.nameValid = "Name should be more than five chars";
  } else {
    validationObj.nameValid = true;
  }

  if (!emailRegex.test(email)) {
    validationObj.emailValid = "Invalid email format";
  } else {
    validationObj.emailValid = true;
  }

  if (type === "" || type === "nt") {
    validationObj.typeValid = "Select Type";
  } else {
    validationObj.typeValid = true;
  }

  if (message.length === 0) {
    validationObj.msgValid = "Cannot be empty";
  } else {
    validationObj.msgValid = true;
  }

  return {
    ...validationObj,
    disabled: () => Object.values(validationObj).every((e) => e === true),
  };
}
