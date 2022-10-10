using System;
using Xunit;
using serverside.Controllers;
using serverside;
using System.Net.Http;

namespace Controllers.Tests
{
    public class MoviesControllerTests
    {
        /* Tests not working yet  */
        [Fact]
        public void Test1()
        {
            /* Arrange */
            var _httpClient = new HttpClient();
            var service = new MovieService(_httpClient);
            var controller = new MoviesController(service);

            /* Act */
            var _results = controller.GetPopularMovies();
            var actual = _results.Result.Count;
            int expected = 5;

            /* Assert */
            Assert.Equal(expected, actual);
        }
    }
}
