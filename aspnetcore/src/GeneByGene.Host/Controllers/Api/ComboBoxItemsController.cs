using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using GeneByGene.EfCore.Repositories;
using GeneByGene.Host.Dtos;
using GeneByGene.Samples;
using GeneByGene.Users;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GeneByGene.Host.Controllers.Api
{
    /// <summary>
    ///     Note: Change route for Service Proxy generate by using NSwag reason
    /// </summary>
    [Route("api/comboBoxItems")]
    public class ComboBoxItemsController : Controller
    {
        private readonly ILogger<ComboBoxItemsController> logger;
        private readonly IRepository<Status> statusRepository;
        private readonly IRepository<User> userRepository;

        public ComboBoxItemsController(
            IRepository<Status> statusRepository,
            IRepository<User> userRepository,
            ILogger<ComboBoxItemsController> logger)
        {
            this.statusRepository = statusRepository;
            this.userRepository = userRepository;
            this.logger = logger;
        }

        [HttpGet("GetAllStatus")]
        [EnableCors("CorsPolicy")]
        public Task<ListResultDto<ComboBoxItemDto>> GetAllStatus()
        {
            try
            {
                var results = statusRepository.GetAll().Select(x => new ComboBoxItemDto
                {
                    Value = x.Id.ToString(),
                    Text = x.Description
                }).ToList();

                return Task.FromResult(new ListResultDto<ComboBoxItemDto>(results));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get all statuses: {ex}");
            }
            return null;
        }

        [HttpGet("GetAllUsers")]
        [EnableCors("CorsPolicy")]
        public Task<ListResultDto<ComboBoxItemDto>> GetAllUsers()
        {
            try
            {
                var results = userRepository.GetAll().Select(x => new ComboBoxItemDto
                {
                    Value = x.Id.ToString(),
                    Text = x.FirstName + " " +x.LastName
                }).ToList();

                return Task.FromResult(new ListResultDto<ComboBoxItemDto>(results));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get all statuses: {ex}");
            }
            return null;
        }
    }
}