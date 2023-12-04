import infoBlock from "./InfoBlock.hbs";
import data from "../../../../data/data.json";

import refs from "../../references";
import infoCard from "../../components/Card/infocard";

export default function infoBlockList() {
  const list = Array.from(new Set(data.infoCards.map((el) => el.parent)));
  list.forEach((blockname) => {
    const cards = infoCard(blockname);
    refs.infoBlock.insertAdjacentHTML(
      "beforeend",
      infoBlock({ blockname, cards })
    );
  });
}
