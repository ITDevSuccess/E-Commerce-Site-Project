﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Entity
{
    public class Clients : Entity
    {
        public virtual string FirstNameClient { get; set; }
        public virtual string LastNameClient { get; set; }
        public virtual DateTime BirthDayClient { get; set; }
        public virtual bool GenreClient { get; set; }
        public virtual IList<AddressClients> AddressClient { get; set; }
    }
}
