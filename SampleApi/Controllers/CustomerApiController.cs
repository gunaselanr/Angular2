using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MVCSampleGrid.Business;
using MVCSampleGrid.Data;
// using SampleApi.Models;

namespace SampleApi.Controllers
{
    public class CustomerApiController : BaseApiController
    {
        private BL_Customer _objBlCustomers = new BL_Customer();
        public HttpResponseMessage GetCustomers()
        {
            var customers = _objBlCustomers.GetAll();
            var json_customers = ToJson(customers);
            return json_customers;
        }

        public HttpResponseMessage SaveCustomers([FromBody]Customer _customer)
        {
            _objBlCustomers.SaveCustomer(_customer);
            return GetCustomers();
        }

        public HttpResponseMessage Delete(int _customerId)
        {
            _objBlCustomers.DeleteCustomer(_customerId);
            return GetCustomers();
        }
    }
}
