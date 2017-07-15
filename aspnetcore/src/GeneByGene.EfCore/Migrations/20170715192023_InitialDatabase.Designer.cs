using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using GeneByGene.EfCore;

namespace GeneByGene.Migrations
{
    [DbContext(typeof(GeneByGeneDbContext))]
    [Migration("20170715192023_InitialDatabase")]
    partial class InitialDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("GeneByGene.Samples.Sample", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Barcode")
                        .HasMaxLength(20);

                    b.Property<DateTime>("CreateAt");

                    b.Property<int>("CreateBy");

                    b.Property<int>("StatusId");

                    b.HasKey("Id");

                    b.HasIndex("CreateBy");

                    b.HasIndex("StatusId");

                    b.ToTable("Samples");
                });

            modelBuilder.Entity("GeneByGene.Samples.Status", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description")
                        .HasMaxLength(20);

                    b.HasKey("Id");

                    b.ToTable("Statuses");
                });

            modelBuilder.Entity("GeneByGene.Users.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FirstName")
                        .HasMaxLength(30);

                    b.Property<string>("LastName")
                        .HasMaxLength(30);

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("GeneByGene.Samples.Sample", b =>
                {
                    b.HasOne("GeneByGene.Users.User", "CreatorUser")
                        .WithMany("Samples")
                        .HasForeignKey("CreateBy")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GeneByGene.Samples.Status", "Status")
                        .WithMany()
                        .HasForeignKey("StatusId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
