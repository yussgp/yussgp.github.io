namespace mangas.Domain.Entities;

public class Manga
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string Author { get; set; }
    public DateTime PublictionDate { get ; set; }
}