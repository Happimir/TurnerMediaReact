using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace turner_react.Domain
{
    public class Participant
    {
        public bool IsKey { get; set; }
        public string RoleType { get; set; }
        public bool IsOnScreen { get; set; }
        public string ParticipantType { get; set; }
        public string Name { get; set; }
        public int ParticipantId { get; set; }
        public int SortOrder { get; set; }
    }
}
