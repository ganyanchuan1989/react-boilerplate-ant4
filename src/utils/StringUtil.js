
export function isEmpty(str) {
  if (str == null || str == '')
    return true;
  if (str && str.trim() == '')
    return true;
  return false;
}
