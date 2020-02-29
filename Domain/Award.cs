using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace turner_react.Domain
{
    public class Awards 
    {
        public bool AwardWon { get; set;}
        public int AwardYear { get; set;}
        public List<string> Participants { get; set;}
        public string Award { get; set;}
        public string AwardCompany { get; set;}
    }
}
