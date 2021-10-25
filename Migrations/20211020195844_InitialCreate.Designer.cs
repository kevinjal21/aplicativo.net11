﻿// <auto-generated />
using System;
using Aplicativo.net.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Aplicativo.net.Migrations
{
    [DbContext(typeof(AplicativoContext))]
    [Migration("20211020195844_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Aplicativo.net.Models.Documento", b =>
                {
                    b.Property<int>("Codocumento")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Codstramite")
                        .HasColumnType("int");

                    b.Property<int?>("DocumentoCodocumento")
                        .HasColumnType("int");

                    b.Property<string>("Fechacreacion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombredoc")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Observacion")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Codocumento");

                    b.HasIndex("DocumentoCodocumento");

                    b.ToTable("Documentos");
                });

            modelBuilder.Entity("Aplicativo.net.Models.Stramite", b =>
                {
                    b.Property<int>("Codstramite")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Codtramite")
                        .HasColumnType("int");

                    b.Property<int>("Codusuario")
                        .HasColumnType("int");

                    b.Property<string>("Fecha")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Codstramite");

                    b.ToTable("Stramites");
                });

            modelBuilder.Entity("Aplicativo.net.Models.Tramite", b =>
                {
                    b.Property<int>("Codtramite")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Costo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Descripcion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Duracion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Modalidad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Url")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Codtramite");

                    b.ToTable("Tramites");
                });

            modelBuilder.Entity("Aplicativo.net.Models.Usuario", b =>
                {
                    b.Property<int>("Codusuario")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Apellidos")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Celular")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Clave")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Correo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombres")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rol")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TipoId")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Codusuario");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("Aplicativo.net.Models.Documento", b =>
                {
                    b.HasOne("Aplicativo.net.Models.Documento", null)
                        .WithMany("Documentos")
                        .HasForeignKey("DocumentoCodocumento");
                });

            modelBuilder.Entity("Aplicativo.net.Models.Documento", b =>
                {
                    b.Navigation("Documentos");
                });
#pragma warning restore 612, 618
        }
    }
}
