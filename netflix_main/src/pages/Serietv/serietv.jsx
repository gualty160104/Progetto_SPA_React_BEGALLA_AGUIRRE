import React from "react";
import { Card } from "../../components/Card/card";
import { CardContent } from "../../components/CardContent/cardcontent";

const Serietv = () => {
  return (
    <section className="w-screen text-center mt-20 px-4 bg-black">
      <h2 className="text-5xl font-semibold mb-10 text-red-600">Le serie TV in evidenza</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
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
    </section>
  );
};

export default Serietv;
