using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using GeneByGene.Domain.Dtos;
using GeneByGene.EfCore.Repositories;
using GeneByGene.Host.Dtos;
using GeneByGene.Samples;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using Microsoft.Extensions.Logging;

namespace GeneByGene.Host.Controllers.Api
{
    /// <summary>
    ///     Note: Change route for Service Proxy generate by using NSwag reason
    /// </summary>
    [Route("api/samples")]
    public class SamplesController : Controller
    {
        private readonly ILogger<SamplesController> logger;
        private readonly IRepository<Sample> sampleRepository;

        public SamplesController(IRepository<Sample> sampleRepository,
            ILogger<SamplesController> logger)
        {
            this.sampleRepository = sampleRepository;
            this.logger = logger;
        }

        [HttpGet("GetAll")]
        [EnableCors("CorsPolicy")]
        public Task<ListResultDto<SampleDto>> GetAll()
        {
            try
            {
                var results = CreateQuery().ToList();
                return Task.FromResult(new ListResultDto<SampleDto>(
                    Mapper.Map<List<SampleDto>>(results)
                ));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get all samples: {ex}");
            }
            return null;
        }

        [HttpGet("GetByStatus")]
        [EnableCors("CorsPolicy")]
        public Task<ListResultDto<SampleDto>> GetByStatus(int statusId)
        {
            try
            {
                var results = CreateQuery()
                    .Where(x => x.StatusId == statusId)
                    .ToList();

                return Task.FromResult(new ListResultDto<SampleDto>(
                    Mapper.Map<List<SampleDto>>(results)
                ));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get samples by status: {ex}");
            }
            return null;
        }

        [HttpGet("GetByUserName")]
        [EnableCors("CorsPolicy")]
        public Task<ListResultDto<SampleDto>> GetByUserName(string userName = "")
        {
            try
            {
                var results = CreateQuery()
                    .Where(x => string.IsNullOrEmpty(userName) || 
                                x.CreatorUser.FirstName.ToLower().Contains(userName.ToLower()) ||
                                x.CreatorUser.LastName.ToLower().Contains(userName.ToLower())
                                
                    ).ToList();

                return Task.FromResult(new ListResultDto<SampleDto>(
                    Mapper.Map<List<SampleDto>>(results)
                ));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get samples by user name: {ex}");
            }
            return null;
        }

        [HttpPost("CreateSample")]
        [EnableCors("CorsPolicy")]
        public async Task<SampleDto> CreateSample([FromBody] CreateSampleInput input)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var existsSample = await sampleRepository.GetAll()
                        .FirstOrDefaultAsync(x => x.Barcode == input.Barcode);

                    if (existsSample != null)
                    {
                        throw new Exception("This sample exists");
                    }

                    var sample = Mapper.Map<Sample>(input);
                    await sampleRepository.InsertAsync(sample);
                    await sampleRepository.SaveChangeAsync();
                    return Mapper.Map<SampleDto>(sample);
                }
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to save the sample: {ex}");
            }

            return null;
        }

        private IIncludableQueryable<Sample, Status> CreateQuery()
        {
            return sampleRepository.GetAll()
                .Include(x => x.CreatorUser)
                .Include(x => x.Status);
        }
    }
}