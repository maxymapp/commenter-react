export const getInitials = (string) => {
  let names = string.split(" "),
    initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    //does not handle names having  3 and more name parts, e.g. middle name
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};
