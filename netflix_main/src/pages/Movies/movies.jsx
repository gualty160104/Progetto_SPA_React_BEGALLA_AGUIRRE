const Movies = () => {
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
      <Button variant="contained">Vedi tutti i film</Button>
    </div>
  </section>
};

export default Movies;
