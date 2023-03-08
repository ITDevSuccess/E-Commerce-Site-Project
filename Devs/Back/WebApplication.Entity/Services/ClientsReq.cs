﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Entity.Services
{
    public class ClientsReq
    {
        public string FirstNameClient { get; set; }
        public string LastNameClient { get; set; }
        public DateTime BirthDayClient { get; set; }
        public bool GenreClient { get; set; }
        public AddressClientsReq AddressClient {get; set;}
    }
}
