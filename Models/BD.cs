using System;
using System.Data.SqlClient;
using Dapper;
using System.Linq;
using System.Collections.Generic;

namespace TPSeriesAjax.Models
{
    public class BD
    {
        private string _connectionString = @"Server=localhost; DataBase=BDSeries;Trusted_Connection=True;";

        public List<Temporada> GetTemporadas(int IdSerie)
        {
            List<Temporada> ListaTemporadas = null;
            string SQL = "SELECT * FROM Temporadas WHERE IdSerie=@pIdSerie"; 
            using(SqlConnection db = new SqlConnection(_connectionString))
            {
                ListaTemporadas = db.Query<Temporada>(SQL, new {pIdSerie = IdSerie} ).ToList(); 
            } 
            return ListaTemporadas;
        }

        public List<Actor> GetActores(int IdSerie)
        {
            List<Actor> ListaActores = null;
            string SQL = "SELECT * FROM Actores WHERE IdSerie=@pIdSerie"; 
            using(SqlConnection db = new SqlConnection(_connectionString))
            {
                ListaActores = db.Query<Actor>(SQL, new {pIdSerie = IdSerie} ).ToList(); 
            } 
            return ListaActores;
        }

        public List<Serie> GetSeries()
        {
            List<Serie> ListaSeries = null;
            string SQL = "SELECT * FROM Series"; 
            using(SqlConnection db = new SqlConnection(_connectionString))
            {
                ListaSeries = db.Query<Serie>(SQL).ToList(); 
            } 
            return ListaSeries;
        }

        public Serie GetInfo(int IdSerie)
        {
            Serie LaSerie = null;
            string SQL = "SELECT * FROM Series WHERE IdSerie=@pIdSerie"; 
            using(SqlConnection db = new SqlConnection(_connectionString))
            {
                LaSerie = db.QueryFirstOrDefault<Serie>(SQL, new {pIdSerie = IdSerie} ); 
            } 
            return LaSerie;
        }
    }
}