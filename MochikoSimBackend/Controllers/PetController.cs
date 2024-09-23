// Controllers/PetController.cs
using Microsoft.AspNetCore.Mvc;
using MochikoSimBackend.Models;

namespace MochikoSimBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetController : ControllerBase
    {
        private static Pet Mochiko = new Pet
        {
            Name = "Mochiko",
            Hunger = 50,
            Happiness = 50,
            Health = 50
        };

        [HttpGet]
        public ActionResult<Pet> GetPetStatus()
        {
            return Mochiko;
        }

        [HttpPost("feed")]
        public ActionResult Feed()
        {
            Mochiko.Hunger += 10;
            if (Mochiko.Hunger > 100) Mochiko.Hunger = 100;
            return Ok(Mochiko);
        }

        [HttpPost("play")]
        public ActionResult Play()
        {
            Mochiko.Happiness += 10;
            if (Mochiko.Happiness > 100) Mochiko.Happiness = 100;
            return Ok(Mochiko);
        }

        [HttpPost("heal")]
        public ActionResult Heal()
        {
            Mochiko.Health += 10;
            if (Mochiko.Health > 100) Mochiko.Health = 100;
            return Ok(Mochiko);
        }
    }
}
