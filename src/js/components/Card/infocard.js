import InfoCard from "./InfoCard.hbs";
import data from "../../../../data/data.json";

export default function infoCard(listEl) {
  const card = data.infoCards.filter((el) => el.parent === listEl);

  const qqq1 = InfoCard(card);

  return qqq1;

}
