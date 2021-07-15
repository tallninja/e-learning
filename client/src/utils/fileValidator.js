checkFileSize = (file) => {
  if (file.size > 10000000) {
    this.setState({
      uploadErrorMessage: `File is too large ${(file.size / 1000000).toFixed(
        2
      )}MB Maximum allowed file size is 10MB`,
    });
    return false;
  } else {
    return true;
  }
};

checkFileType = (file) => {
  if (file.type !== "application/pdf") {
    this.setState({ uploadErrorMessage: "You can only upload PDF files" });
    return false;
  } else {
    return true;
  }
};

checkFileSelected = (file) => {
  if (!file) {
    this.setState({ uploadErrorMessage: "Please select a file" });
    return false;
  } else {
    return true;
  }
};

export default (file) => {
  if (checkFileSelected(file)) {
    if (checkFileType(file)) {
      if (checkFileSize(file)) {
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
