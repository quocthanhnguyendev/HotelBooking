﻿namespace server.Models
{
    public class HotelsModel
    {
        public int hotel_id { get; set; }

        public int merchant_id { get; set; }

        public int country_id { get; set; }

        public int city_id { get; set; }

        public string? name { get; set; }

        public string? address { get; set; }

        public string? description { get; set; }

        public decimal rating { get; set; }

        public string? thumbnail { get; set; }

        public decimal? min_price { get; set; }

        public double? min_discount { get; set; }

        public decimal? min_price_discount { get; set; }

        public decimal distance_citycenter { get; set; }

        public int views { get; set; }

        public DateTime? CreatedAt { get; set; }
    }
}