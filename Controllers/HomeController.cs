using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TPSeriesAjax.Models;

namespace TPSeriesAjax.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            BD MiBD = new BD();
            ViewBag.Series = MiBD.GetSeries();
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public List<Temporada> VerTemporadas(int IdSerie)
        {
            BD MiBD = new BD();
            return MiBD.GetTemporadas(IdSerie);
        }

        public List<Actor> VerActores(int IdSerie)
        {
            BD MiBD = new BD();
            return MiBD.GetActores(IdSerie);
        }
        
        public Serie VerInfo(int IdSerie)
        {
            BD MiBD = new BD();
            return MiBD.GetInfo(IdSerie);
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
