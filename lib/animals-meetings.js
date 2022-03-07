import { Color } from "./color";
import { AnimalsGroup } from "./animal-group";
import { Animal } from "./animal";

const action = ({ number, metGroup }) => {
  if (number === 1) {
    return `Rencontre 1 autre ${metGroup}`;
  }
  return `Rencontrent 1 autre ${metGroup}`;
};

const conclusion = (group) => {
  const newGroup = group.addAnimal();

  if (newGroup.count === 8) {
    return `8 doigts avec mes mains, pour compter les ${newGroup}.`;
  }
  return `${newGroup.count} ${newGroup} sont devenus copains.`;
};

const create = ({
  number = 1,
  color = Color.White,
  animal = Animal.create(),
  movement = "sautant sur le chemin",
} = {}) => {
  const group = AnimalsGroup.create({ number, color, animal });
  const metGroup = AnimalsGroup.create({ number: 1, color, animal });
  const theAction = action({ number, metGroup });
  const theConclusion = conclusion(group);

  return Object.freeze({
    toString() {
      return `${number} ${group} ${movement}
${theAction}
${theConclusion}
`;
    },
  });
};

const of = (number) => {
  switch (number) {
    case 2:
      return create({ number, color: Color.Grey, animal: Animal.Rabbit });
    case 3:
      return create({ number, color: Color.Green, animal: Animal.Toad });
    case 4:
      return create({ number, color: Color.Brown, animal: Animal.Rabbit });
    case 6:
      return create({ number, color: Color.White, animal: Animal.Bird, movement: "volant au dessus du chemin" });
    default:
      return create({ number, color: Color.White, animal: Animal.Rabbit });
  }
};

export const AnimalsMeeting = {
  of,
};
