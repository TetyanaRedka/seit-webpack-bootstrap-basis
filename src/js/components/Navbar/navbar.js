import navbar from "./Navbar.hbs";
import refs from "../../references";
import logo from "../../../assets/K-CNS-logo.jpg";

export default function navbarElem() {
  refs.navbar && refs.navbar.insertAdjacentHTML("beforeend", navbar(logo));
}
