﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using serverside.Models;

namespace serverside.Controllers
{

    [EnableCors("LocalHost")]
    [Route("api/")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        readonly IMovieService _movieService;

        public MoviesController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        // GET api/popular
        [HttpGet("popular")]
        public async Task<List<PopularMovies.Root>> GetPopularMovies()
        {
            return await _movieService.GetPopularMovies();
        }

        // GET api/movie/2
        [HttpGet("movie/{id}")]
        public async Task<List<MovieDetails.Root>> GetMovieById(int id)
        {
            return await _movieService.GetMovieById(id);
        }

        // GET api/search
        [HttpGet("search/")]
        public async Task<List<SearchResults.Root>> SearchMovie([FromQuery(Name ="query")] string query)
        {
            Console.WriteLine(query);
            return await _movieService.SearchMovie(query);
        }

       
    }
}
