using System.Text.Json;
using ScreenSound_04.Modelos;
using ScreenSound_04.Filtros;
using (HttpClient client = new HttpClient())
{
	try 
	{
		string resposta = await client.GetStringAsync("https://guilhermeonrails.github.io/api-csharp-songs/songs.json");
		var musicas = JsonSerializer.Deserialize<List<Musica>>(resposta);

		LinqFilter.FiltrarMusicasEmCSharp(musicas);
		//LinqFilter.FiltrarTodosOsGenerosMusicais(musicas);
		//LinqOrder.ExibirListaDeArtistasOrdenados(musicas);
		//LinqFilter.FiltrarArtistasPorGeneroMusical(musicas, "pop");
		//LinqFilter.FiltrarMusicasDeUmArtista(musicas, "U2");

		// var musicasPreferidasDaDuda = new MusicasPreferidas("Duda");
		// musicasPreferidasDaDuda.AdicionarMusicasFavoritas(musicas[1]);
		// musicasPreferidasDaDuda.AdicionarMusicasFavoritas(musicas[377]);
		// musicasPreferidasDaDuda.AdicionarMusicasFavoritas(musicas[4]);
		// musicasPreferidasDaDuda.AdicionarMusicasFavoritas(musicas[6]);
		// musicasPreferidasDaDuda.AdicionarMusicasFavoritas(musicas[1467]);

		// musicasPreferidasDaDuda.ExibirMusicasFavoritas();
		// musicasPreferidasDaDuda.GerarArquivoJson();
	}
	catch (Exception ex)
	{
		Console.WriteLine($"Temos um problema: {ex.Message}");
	}
}