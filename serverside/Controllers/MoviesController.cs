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
        HttpClientHandler _clientHandler = new HttpClientHandler();

        readonly string api_key = Environment.GetEnvironmentVariable("API_KEY");
        Movie _oMovie = new Movie();
        List<Movie> _oPopularMovies = new List<Movie>();
        List<Root> _oApiResponse = new List<Root>();

        public MoviesController()
        {
            _clientHandler.ServerCertificateCustomValidationCallback = (sender, cert, chain, sslPolicyErrors) => { return true; };
        }


        
        // GET api/popular
        [HttpGet("response")]
        public async Task<List<Root>> GetPopularMovies()
        {
            _oApiResponse = new List<Root>();

            using (var httpClient = new HttpClient(_clientHandler)) 
            { 
                using (var response=await httpClient.GetAsync(string.Format("https://api.themoviedb.org/3/trending/movie/day?api_key={0}", api_key)))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(apiResponse);
                    _oApiResponse.Add(myDeserializedClass);
                }
            }

            return _oApiResponse;
        }

        // GET api/movie/2
        [HttpGet("movie/{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // GET api/search
        [HttpGet("search")]
        public void Get([FromQuery(Name ="query")] string query)
        {
        }

       
    }
}
