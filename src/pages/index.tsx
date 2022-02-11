import BottleContainer from "@components/BottleContainer";
import Header from "@components/Header";
import LeavesContainer from "@components/LeavesContainer";
import TextContainer from "@components/TextContainer";

export default function Home() {
  return (
    <div>
      <Header />;
      <main>
        <TextContainer/>
        <BottleContainer/>
        <LeavesContainer/>
      </main>
    </div>


  );
}
