const checkFileSize = (scpoe, file, contentType) => {
  let maxFileSize = 1000000;
  if (contentType === "document") {
    maxFileSize = maxFileSize * 10;
  } else if (contentType === "image") {
    maxFileSize = maxFileSize * 2;
  } else if (contentType === "video") {
    maxFileSize = maxFileSize * 1000;
  }

  if (file.size > maxFileSize) {
    scpoe.setState({
      uploadErrorMessage: `File is too large ${(file.size / 1000000).toFixed(
        2
      )}MB Maximum allowed file size is ${maxFileSize / 1000000}MB`,
    });
    return false;
  } else {
    return true;
  }
};

const checkFileType = (scope, file) => {
  if (file.type !== "application/pdf") {
    scope.setState({ uploadErrorMessage: "You can only upload PDF files" });
    return false;
  } else {
    return true;
  }
};

const checkFileSelected = (scope, file) => {
  if (!file) {
    scope.setState({ uploadErrorMessage: "Please select a file" });
    return false;
  } else {
    return true;
  }
};

const fileValidator = (scope, file, contentType) => {
  if (checkFileSelected(scope, file)) {
    if (checkFileType(scope, file)) {
      if (checkFileSize(scope, file, contentType)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export default fileValidator;
