import Header from "./src/components/layout/Header";
import Relogio from "./src/components/Pages/Relogio";

export default function Home() {

  return (

    <div className="relative flex h-full">

      <div className="overflow-x-hidden">

        <Relogio/>
        
      </div> {/*Conteudo*/}

    </div>

  );
};
