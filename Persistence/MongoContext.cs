using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using turner_react.Domain;

namespace turner_react.Persistence
{
    public class MongoContext
    {
        private IMongoDatabase database { get; }
        private IMongoClient client { get; set; }

        public MongoContext(IConfiguration config)
        {
            var ctx = config.GetConnectionString("MongoConnectionString");
            client = new MongoClient(ctx);
            database = client.GetDatabase("dev-challenge");
        }

        //Leaving this, and the next method as generic T such that it is not tied to just one collection
        
        /// <summary>
        /// Returns an Queryable object from our mongo context which will allow us to leverage LINQ syntax instead
        /// of having to using mongo builders
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public IMongoQueryable<T> GetQueryableCollection<T>() where T : IMongoEntity
        {
            return database.GetCollection<T>(typeof(T).Name).AsQueryable<T>();
        }

        public IMongoCollection<T> GetMongoCollection<T>() where T : IMongoEntity
        {
            return database.GetCollection<T>(typeof(T).Name);
        }
    }
}
