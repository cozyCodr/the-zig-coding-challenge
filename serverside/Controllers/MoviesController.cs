using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using serverside.Models;

namespace serverside.Controllers
{

    [Route("api/")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        List<Root> _apiQueryResponse = new List<Root>();
        private readonly IMovieService _movieService;

        public MoviesController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        // GET api/popular
        [HttpGet("popular")]
        public async Task<List<Root>> GetPopularMovies()
        {
            return await _movieService.GetPopularMovies();
        }

        // GET api/movie/2
        [HttpGet("movie/{id}")]
        public async Task<List<Root>> GetMovieById(int id)
        {
            return new List<Root>();
        }

        // GET api/search
        [HttpGet("search")]
        public void Get([FromQuery(Name ="query")] string query)
        {
        }

       
    }
}
