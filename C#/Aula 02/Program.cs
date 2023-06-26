// Banda queen = new Banda("Queen");

// Album albumDoQueen= new Album("A night at the opera");

// Musica musica1 = new Musica(queen, "Love of my live")
// {
// 	Duracao = 213,
// 	Disponivel = true,
// };

// Musica musica2 = new Musica(queen, "Bohemian Rhapsody")
// {
// 	Duracao = 354,
// 	Disponivel = false,
// };

// albumDoQueen.AdicionarMusica(musica1);
// albumDoQueen.AdicionarMusica(musica2);
// queen.AdicionarAlbum(albumDoQueen);
// musica1.ExibirFichaTecnica();
// musica2.ExibirFichaTecnica();
// albumDoQueen.ExibirMusicasDoAlbum();
// queen.ExibirDiscografia();

Episodio ep1 = new(1, "Técnicas de facilitação", 45);
ep1.AdicionarConvidados("Maria");
ep1.AdicionarConvidados("Marcelo");
Console.WriteLine(ep1.Resumo);

Episodio ep2 = new(2, "Técnicas de aprendizado", 45);
ep2.AdicionarConvidados("Fernando");
ep2.AdicionarConvidados("Marcos");
ep2.AdicionarConvidados("Flávia");
Console.WriteLine(ep2.Resumo);

Podcast podcast = new("Podcast especial", "Daniel");
podcast.AdicionarEpisodio(ep1);
podcast.AdicionarEpisodio(ep2);
podcast.ExibirDetalhes();

