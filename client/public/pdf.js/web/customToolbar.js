let sheet = (function () {
  let style = document.createElement("style");
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  return style.sheet;
})();
function editToolBar() {
  removeGrowRules();
  removeElement("openFile");
  removeElement("secondaryOpenFile");
  removeElement("print");
  removeElement("secondaryPrint");
  removeElement("secondaryDownload");
  removeElement("download");
}

function removeElement(elemID) {
  let element = document.getElementById(elemID);
  element.parentNode.removeChild(element);
}
function removeGrowRules() {
  addCSSRule(sheet, ".hiddenSmallView *", "display:block !important");
  addCSSRule(sheet, ".hiddenMediumView", "display:block !important");
  addCSSRule(sheet, ".hiddenLargeView", "display:block !important");
  addCSSRule(sheet, ".visibleSmallView", "display:block !important");
  addCSSRule(sheet, ".visibleMediumView", "display:block !important");
  addCSSRule(sheet, ".visibleLargeView", "display:block !important");
}
function addCSSRule(sheet, selector, rules, index) {
  if ("insertRule" in sheet) {
    sheet.insertRule(selector + "{" + rules + "}", index);
  } else if ("addRule" in sheet) {
    sheet.addRule(selector, rules, index);
  }
}
window.onload = editToolBar;
