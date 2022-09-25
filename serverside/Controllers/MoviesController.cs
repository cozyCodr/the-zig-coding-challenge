using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace serverside.Controllers
{
    [Route("api/")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        // GET api/popular
        [HttpGet("popular")]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "popular1", "popular2" };
        }

        // GET api/movie/2
        [HttpGet("movie/{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // GET api/search
        [HttpGet("search")]
        public void Post([FromQuery(Name ="query")] string query)
        {
        }

       
    }
}
