namespace manga.Domain.Dtos;

public class MangaDTO
{
    public int Id { get; set; }
    public string Title { get; set; } = null!;
    public string Author { get; set; } = null!;
    public int PublicationYear { get; set; }

}