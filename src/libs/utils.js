export function isSmallScreen() {
  let width = document.body.clientWidth;
  if (width < 1200) {
    return true
  }else{
    return false;
  }
}
