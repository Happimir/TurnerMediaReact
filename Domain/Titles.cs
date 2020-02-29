using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace turner_react.Domain
{
    public class Titles : IMongoEntity
    {
        public List<Awards> Awards { get; set; }
        public List<string> Genres { get; set; }
        public List<OtherName> OtherNames { get; set; }
        public List<Participant> Participants { get; set; }
        public int ReleaseYear { get; set; }
        public List<Storyline> Storylines { get; set; }
        public int TitleId { get; set; }
        public string TitleName { get; set; }
        public string TitleNameSortable { get; set; }
        public string _id { get; set; }
        public List<string> Keywords { get; set; }
        public List<string> KeyGenres { get; set; }
    }
}
