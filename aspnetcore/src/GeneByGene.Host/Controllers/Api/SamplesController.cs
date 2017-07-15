using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using GeneByGene.EfCore.Repositories;
using GeneByGene.Samples;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GeneByGene.Host.Controllers.Api
{
    [Route("api/samples")]
    public class SamplesController : Controller
    {
        private ILogger<SamplesController> logger;
        private readonly IRepository<Status> sampleRepository;

        public SamplesController(IRepository<Status> sampleRepository, 
            ILogger<SamplesController> logger)
        {
            this.sampleRepository = sampleRepository;
            this.logger = logger;
        }

        [HttpGet("")]
        public JsonResult Get()
        {
            var items = sampleRepository.GetAll().ToList();
            return Json(Ok(items));
        }
    }
}