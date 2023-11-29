import Header from "./src/components/layout/Header";

export default function Home() {

  return (

    <div className="flex p-2 gap-2">

      <Header/>

      <div className="bg-red-500 w-screen h-auto rounded-lg overflow-y-scroll overflow-x-hidden p-5">

        conteudo
      </div> {/*Conteudo*/}

    </div>

  );
};
