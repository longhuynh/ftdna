﻿using AutoMapper;
using GeneByGene.EfCore;
using GeneByGene.EfCore.Repositories;
using GeneByGene.EfCore.Seed;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Swashbuckle.AspNetCore.Swagger;

namespace GeneByGene.Host
{
    public class Startup
    {
        private readonly IHostingEnvironment env;
        private readonly IConfigurationRoot config;

        public Startup(IHostingEnvironment env)
        {
            this.env = env;

            var builder = new ConfigurationBuilder()
                .SetBasePath(this.env.ContentRootPath)
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();

            config = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton(config);

            // services.AddDbContext<GeneByGeneDbContext>();

            //services.AddTransient<DbContext, GeneByGeneDbContext>();
            //services.AddTransient(typeof(GeneByGeneDbContext));

            services.AddDbContext<GeneByGeneDbContext>(options =>
                options.UseSqlServer(config.GetConnectionString("Default"))
            );

            services.AddScoped(typeof(IRepository<>), typeof(EfRepositoryBase<>));
            services.AddScoped(typeof(IRepository<,>), typeof(EfRepositoryBaseOfTEntityAndTPrimaryKey<,>));

            services.AddTransient<GeneByGeneDbContextSeedData>();

            services.AddLogging();

            services.AddMvc(config =>
            {
                if (env.IsProduction())
                {
                    config.Filters.Add(new RequireHttpsAttribute());
                }
            })
                .AddJsonOptions(
                    config =>
                    {
                        config.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                    });

            //Swagger - Enable this line and the related lines in Configure method to enable swagger UI
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new Info { Title = "Gene by Gene API", Version = "v1" });
                options.DocInclusionPredicate((docName, description) => true);
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
            IHostingEnvironment env,
            GeneByGeneDbContextSeedData seeder,
            ILoggerFactory factory)
        {
            Mapper.Initialize(config =>
            {
                //config.CreateMap<TripViewModel, Trip>().ReverseMap();
                //config.CreateMap<StopViewModel, Stop>().ReverseMap();
            });

            if (env.IsEnvironment("Development"))
            {
                app.UseDeveloperExceptionPage();
                factory.AddDebug(LogLevel.Information);
            }
            else
            {
                factory.AddDebug(LogLevel.Error);
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    "default",
                    "{controller=Home}/{action=Index}/{id?}");
            });

            // Enable middleware to serve generated Swagger as a JSON endpoint
            app.UseSwagger();

            // Enable middleware to serve swagger-ui assets (HTML, JS, CSS etc.)
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "Gene by Gene API v1");
                options.DocExpansion("none");
            }); //URL: /swagger

            seeder.EnsureSeedData().Wait();
        }
    }
}