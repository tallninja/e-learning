const checkFileSize = (scpoe, file) => {
  if (file.size > 10000000) {
    scpoe.setState({
      uploadErrorMessage: `File is too large ${(file.size / 1000000).toFixed(
        2
      )}MB Maximum allowed file size is 10MB`,
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

export default (scope, file) => {
  if (checkFileSelected(scope, file)) {
    if (checkFileType(scope, file)) {
      if (checkFileSize(scope, file)) {
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
