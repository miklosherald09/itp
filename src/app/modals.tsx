import { ItemFormModal } from "./components/modals/add-item";
import { WhatIsItpvModal } from "./components/modals/what-is-itpv";
import "./globals.css";

export default function Modals() {
  return (
    <>
      <ItemFormModal />
      <WhatIsItpvModal />
    </>
  );
}
