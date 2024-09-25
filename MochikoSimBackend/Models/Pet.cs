// Models/Pet.cs
namespace MochikoSimBackend.Models
{
    public class Pet
    {
        public required string Name { get; set; }  // Enforces initialization of 'Name'
        public int Hunger { get; set; }
        public int Happiness { get; set; }
        public int Health { get; set; }
    }
}
