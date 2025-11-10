import { Card } from "../../components/Card/card";
import { CardContent } from "../../components/CardContent/cardcontent";
import { Button } from "../../components/Button/button";
import background from "../../assets/background.jpg";

export default function HomePage() {
  return (
    <div className=" w-screen flex flex-col gap-20 bg-black">

      {/* Sezione Hero */}
      <div className="w-screen flex items-center justify-center bg-gray-200">
        <section className="flex flex-col items-center justify-center w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
          <h1 className="text-9xl font-bold text-white text-center"> NETFLIX </h1>
          <p className="text-xl text-white mt-2 text-center">Film, serie TV e tanto altro, senza limiti</p>
        </section>
      </div>


      {/* Film in evidenza */}
      <section className="w-screen text-center mt-16 px-4">
        <h2 className="text-5xl font-semibold mb-10 text-red-600">I film in evidenza</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i} className="rounded-2xl shadow-md overflow-hidden w-72">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold">Titolo Film {i}</h3>
                  <p className="text-sm text-gray-600 text-left">Sottotitolo Film {i}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button>Vedi tutti i film</Button>
        </div>
      </section>

      {/* Serie TV in evidenza */}
      <section className="w-screen text-center mt-16 px-4">
        <h2 className="text-5xl font-semibold mb-10 text-red-600">Le serie TV in evidenza</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i} className="rounded-2xl shadow-md overflow-hidden w-72">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold">Titolo Film {i}</h3>
                  <p className="text-sm text-gray-600">Sottotitolo Film {i}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button >Vedi tutte le serie TV</Button>
        </div>
      </section>
    </div>
  );
}
