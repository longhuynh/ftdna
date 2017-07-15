using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using GeneByGene.EfCore.Repositories;
using GeneByGene.Host.Dtos;
using GeneByGene.Samples;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using Microsoft.Extensions.Logging;

namespace GeneByGene.Host.Controllers.Api
{
    [Route("api/samples")]
    public class SamplesController : Controller
    {
        private ILogger<SamplesController> logger;
        private readonly IRepository<Sample> sampleRepository;

        public SamplesController(IRepository<Sample> sampleRepository,
            ILogger<SamplesController> logger)
        {
            this.sampleRepository = sampleRepository;
            this.logger = logger;
        }

        [HttpGet("")]
        public JsonResult Get()
        {
            try
            {
                var results = CreateQuery().ToList();
                return Json(Ok(Mapper.Map<List<SampleDto>>(results)));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get all samples: {ex}");
                return Json(BadRequest("Error occurred"));
            }
        }

        [HttpGet("status/{statusId}")]
        public JsonResult Get(int statusId)
        {
            try
            {
                var results = CreateQuery()
                    .Where(x => x.StatusId == statusId)
                    .ToList();

                return Json(Ok(Mapper.Map<List<SampleDto>>(results)));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get all samples: {ex}");
                return Json(BadRequest("Error occurred"));
            }
        }

        [HttpGet("user/{userName}")]
        public JsonResult Get(string userName)
        {
            try
            {
                var results = CreateQuery()
                    .Where(x => x.CreatorUser.FirstName.ToLower().Contains(userName.ToLower()) ||
                                x.CreatorUser.LastName.ToLower().Contains(userName.ToLower())
                    )
                    .ToList();

                return Json(Ok(Mapper.Map<List<SampleDto>>(results)));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get all samples: {ex}");
                return Json(BadRequest("Error occurred"));
            }
        }

        private IIncludableQueryable<Sample, Status> CreateQuery()
        {
            return sampleRepository.GetAll()
                .Include(x => x.CreatorUser)
                .Include(x => x.Status);
        }

        [HttpPost("")]
        public async Task<JsonResult> Post(CreateSampleInput input)
        {
            if (ModelState.IsValid)
            {
                var existsSample = await sampleRepository.GetAll()
                    .FirstOrDefaultAsync(x => x.Barcode == input.Barcode);

                if (existsSample != null)
                {
                    return Json(BadRequest("This sample exists"));
                }

                var sample = Mapper.Map<Sample>(input);
                await sampleRepository.InsertAsync(sample);
                await sampleRepository.SaveChangeAsync();
                return Json(Ok());
            }

            return Json(BadRequest("Failed to save the sample"));
        }
    }
}