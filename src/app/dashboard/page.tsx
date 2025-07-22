import { ItemFormModal } from "./modal/add-item";
import Divider from "./divider";
import TopMenu from "./menu";
import Items from "./items";

export default function Page() {
  // const { data: session } = useSession();

  return (
    <>
      <Divider />
      <TopMenu />
      <Items />
      {/* <Items /> */}
      <ItemFormModal />
    </>
  );
  // return (
  //   <>
  //     <button onClick={() => signIn("google")}>Sign in with Google</button>
  //   </>
  // );
}
