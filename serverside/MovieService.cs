using Newtonsoft.Json;
using serverside.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace serverside
{

    public interface IMovieService
    {
        Task<List<PopularMovies.Root>> GetPopularMovies();
        Task<List<PopularMovies.Root>> GetMovieById(int id);
        Task<List<PopularMovies.Root>> SearchMovie(string query);
    }


    public class MovieService : IMovieService
    {
        readonly string api_key = Environment.GetEnvironmentVariable("API_KEY");
        private HttpClient _httpClient;

        public MovieService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<Root>> GetPopularMovies()
        {
            var _apiQueryResponse = new List<Root>();

            var response = await _httpClient.GetAsync(string.Format("/3/trending/movie/day?api_key={0}", api_key));
            string responseContent = await response.Content.ReadAsStringAsync();
            Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(responseContent);
            _apiQueryResponse.Add(myDeserializedClass);

            return _apiQueryResponse;
        }

        Task<List<Root>> IMovieService.GetMovieById(int id)
        {
            var _apiQueryResponse = new List<Root>();
            throw new NotImplementedException();
        }

        Task<List<Root>> IMovieService.SearchMovie(string query)
        {
            throw new NotImplementedException();
        }
    }
}
