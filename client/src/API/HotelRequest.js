import BaseUrl from "./BaseUrl";

export const GetHotelsByCityId = (id) => {
  return BaseUrl.get(`/api/Hotels/GetHotelsByCityId/${id}`);
};

export const GetHotelsByCountryId = (id) => {
  return BaseUrl.get(`/api/Hotels/GetHotelsByCountryId/${id}`);
};

export const GetHotelDetails = (id) => {
  return BaseUrl.get(`/api/Hotels/GetHotelDetails/${id}`);
};
