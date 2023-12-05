import InfoCard from "./InfoCard.hbs";
import data from "../../../../data/data.json";
import importPictures from "../../servise/importPictures";

export default function infoCard(listEl) {
  let count = 0;
  const cards = data.infoCards.filter((el) => {
    if (el.parent === listEl) {
      el.url = importPictures(el.url);
      count++;
      count%2 ? el.right = true : el.left = true
      return el;
    }
  });

  return InfoCard(cards);
}
