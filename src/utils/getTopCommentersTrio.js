export const getTopCommentersTrio = (arr) => {
  let dict = {};
  for (let i = 0; i < arr.length; i++) {
    let cn = arr[i].name;

    if (cn in dict) {
      dict[cn]++;
    } else {
      dict[cn] = 1;
    }
  }

  let sortable = [];
  for (var person in dict) {
    sortable.push([person, dict[person]]);
  }
  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  return sortable.slice(0, 3);
};
