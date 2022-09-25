using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace serverside.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public Boolean Adult { get; set; }
        public string BackdropPath { get; set; }
        public string Title { get; set; }
        public string OriginalLanguage { get; set; }
        public string OriginalTitle { get; set; }
        public string Overview { get; set; }
        public string PosterPath { get; set; }
        public string MediaType { get; set; }
        public List<int> GenreIds { get; set; }
        public int Popularity { get; set; }
        public DateTime ReleaseDate { get; set; }
        public Boolean Video { get; set; }
        public int VoteAverage { get; set; }
        public int VoteCount { get; set; }


    }
}
