class Musica
{

	public Musica(Banda artista, string nome)
	{
		Artista = artista;
		Nome = nome;
	}
	public string Nome { get; }
	public Banda Artista { get; }
	public int Duracao { get; set; }
	public bool Disponivel { get; set; }
	 public Genero Genero { get; set; }

	public string DescricaoResumida => $"A música {Nome} pertence à banda {Artista}";
	


	// public void EscreveDisponivel(bool value)
	// {
	// 	disponivel = value;
	// }

	// public bool LerDisponivel()
	// {
	// 	return disponivel;
	// } subtituido pelo { get; set; }

	public void ExibirFichaTecnica()
	{
		Console.WriteLine($"Nome: {Nome}");
		Console.WriteLine($"Artista: {Artista.Nome}");
		Console.WriteLine($"Duração: {Duracao}");
		if (Disponivel)
		{
			Console.WriteLine("Diponível no plano.");
		}else
		{
			Console.WriteLine("Adquira o plano Plus");
		}
	}
}

