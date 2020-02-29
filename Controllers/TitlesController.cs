using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using turner_react.Domain;
using turner_react.Persistence;

namespace turner_react.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TitlesController : ControllerBase
    {
        private MongoContext context;

        public TitlesController(MongoContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Titles> GetAllTitles()
        {
            return context.GetQueryableCollection<Titles>().ToList();
        }


        [HttpGet]
        [Route("[action]/{id}")]
        public Titles GetTitle(string id)
        {
            var title = context.GetQueryableCollection<Titles>().FirstOrDefault(x => x._id == id);
            return title;
        }
    }
}