using System.Linq;
using AutoMapper;
using DatingApp.API.DTOs;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User,UserForListDto>().ForMember(desc => desc.PhotoUrl, opt => opt.MapFrom(c => c.Photos.FirstOrDefault(a => a.IsMain).Url))
            .ForMember(desc => desc.Age , opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));

            CreateMap<User,UserForDetailedDto>().ForMember(a => a.PhotoUrl , c => c.MapFrom(b => 
            b.Photos.FirstOrDefault(d => d.IsMain).Url)).ForMember(desc => desc.Age , opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));

            CreateMap<Photo, PhotosForDetailDto>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<Photo, photoForReturnDto>();
            CreateMap<PhotoForCreationDto, Photo>();
        }
    }
}