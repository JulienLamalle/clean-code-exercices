const create = ({ singular = "", plural = "" } = {}) =>
  Object.freeze({
    toString(number = 1) {
      if (number === 1) {
        return singular;
      }
      return plural;
    },
  });

export const Animal = {
  create,
  Rabbit: create({ singular: "lapin", plural: "lapins" }),
  Toad: create({ singular: "crapaud", plural: "crapauds" }),
  Bird: create({ singular: "oiseau", plural: "oiseaux" }),
};
