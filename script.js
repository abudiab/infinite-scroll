import ACCESS_KEY from "./config.js";

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [
  {
    id: "VIRnYgXnsvE",
    created_at: "2021-02-22T11:23:27-05:00",
    updated_at: "2021-03-16T14:22:29-04:00",
    promoted_at: "2021-02-23T04:35:40-05:00",
    width: 3779,
    height: 5669,
    color: "#c0c0c0",
    blur_hash: "LTIhHb~qkCslH?tRj?MwIBjXkAoM",
    description: null,
    alt_description:
      "white and blue floral ceramic mug on white ceramic saucer",
    urls: {
      raw:
        "https://images.unsplash.com/photo-1614011004050-337eed0331d3?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1",
      full:
        "https://images.unsplash.com/photo-1614011004050-337eed0331d3?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=85",
      regular:
        "https://images.unsplash.com/photo-1614011004050-337eed0331d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1614011004050-337eed0331d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1614011004050-337eed0331d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=200",
    },
    links: {
      self: "https://api.unsplash.com/photos/VIRnYgXnsvE",
      html: "https://unsplash.com/photos/VIRnYgXnsvE",
      download: "https://unsplash.com/photos/VIRnYgXnsvE/download",
      download_location:
        "https://api.unsplash.com/photos/VIRnYgXnsvE/download?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE",
    },
    categories: [],
    likes: 52,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: "seE4fA8Y__E",
      updated_at: "2021-03-16T14:55:27-04:00",
      username: "natinati",
      name: "Melnychuk Nataliya",
      first_name: "Melnychuk",
      last_name: "Nataliya",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: "Ischia, NA, Italy ",
      links: {
        self: "https://api.unsplash.com/users/natinati",
        html: "https://unsplash.com/@natinati",
        photos: "https://api.unsplash.com/users/natinati/photos",
        likes: "https://api.unsplash.com/users/natinati/likes",
        portfolio: "https://api.unsplash.com/users/natinati/portfolio",
        following: "https://api.unsplash.com/users/natinati/following",
        followers: "https://api.unsplash.com/users/natinati/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1594918935171-007d2093336dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        medium:
          "https://images.unsplash.com/profile-1594918935171-007d2093336dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        large:
          "https://images.unsplash.com/profile-1594918935171-007d2093336dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
      },
      instagram_username: "instagram.com/natischia",
      total_collections: 0,
      total_likes: 356,
      total_photos: 447,
      accepted_tos: true,
      for_hire: true,
    },
    exif: {
      make: "Canon",
      model: "Canon EOS 2000D",
      exposure_time: "1/3200",
      aperture: "1.8",
      focal_length: "50.0",
      iso: 100,
    },
    location: {
      title: "Forio, Forio, Italia",
      name: "Forio, Forio, Italia",
      city: "Forio",
      country: "Italia",
      position: {
        latitude: 40.7373941,
        longitude: 13.8592074,
      },
    },
    views: 134598,
    downloads: 1522,
  },
  {
    id: "hrK7QVvOpH8",
    created_at: "2021-02-25T06:26:35-05:00",
    updated_at: "2021-03-15T18:44:16-04:00",
    promoted_at: "2021-02-26T13:43:46-05:00",
    width: 3072,
    height: 4608,
    color: "#264040",
    blur_hash: "LMChKDKiGFtQF_aenijF1z#mr?ni",
    description: null,
    alt_description: "woman in red and white plaid scarf",
    urls: {
      raw:
        "https://images.unsplash.com/photo-1614251056798-0a63eda2bb25?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1",
      full:
        "https://images.unsplash.com/photo-1614251056798-0a63eda2bb25?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=85",
      regular:
        "https://images.unsplash.com/photo-1614251056798-0a63eda2bb25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1614251056798-0a63eda2bb25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1614251056798-0a63eda2bb25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=200",
    },
    links: {
      self: "https://api.unsplash.com/photos/hrK7QVvOpH8",
      html: "https://unsplash.com/photos/hrK7QVvOpH8",
      download: "https://unsplash.com/photos/hrK7QVvOpH8/download",
      download_location:
        "https://api.unsplash.com/photos/hrK7QVvOpH8/download?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE",
    },
    categories: [],
    likes: 111,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: "GNgoDNsN7w8",
      updated_at: "2021-03-16T15:03:13-04:00",
      username: "sergidolcet",
      name: "Sergi Dolcet Escrig",
      first_name: "Sergi",
      last_name: "Dolcet Escrig",
      twitter_username: null,
      portfolio_url: null,
      bio:
        "Art director & Photographer from Barcelona. \r\nI am available to travel. If you want to use my photo, please put me on the credits.   Or contact via Instagram for commercial work, or anything else. Thaaaanks!  Instagram: @sergidolcet",
      location: "Barcelona",
      links: {
        self: "https://api.unsplash.com/users/sergidolcet",
        html: "https://unsplash.com/@sergidolcet",
        photos: "https://api.unsplash.com/users/sergidolcet/photos",
        likes: "https://api.unsplash.com/users/sergidolcet/likes",
        portfolio: "https://api.unsplash.com/users/sergidolcet/portfolio",
        following: "https://api.unsplash.com/users/sergidolcet/following",
        followers: "https://api.unsplash.com/users/sergidolcet/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1613473660387-d0d0bb87f060image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        medium:
          "https://images.unsplash.com/profile-1613473660387-d0d0bb87f060image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        large:
          "https://images.unsplash.com/profile-1613473660387-d0d0bb87f060image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
      },
      instagram_username: "sergidolcet",
      total_collections: 4,
      total_likes: 22,
      total_photos: 86,
      accepted_tos: true,
      for_hire: true,
    },
    exif: {
      make: "NIKON CORPORATION",
      model: "NIKON D3100",
      exposure_time: "1/250",
      aperture: "4.2",
      focal_length: "30.0",
      iso: 100,
    },
    location: {
      title: "Barcelona, España",
      name: "Barcelona, España",
      city: "Barcelona",
      country: "España",
      position: {
        latitude: 41.385064,
        longitude: 2.173404,
      },
    },
    views: 608332,
    downloads: 2136,
  },
  {
    id: "Tq-CkO-ZBDc",
    created_at: "2021-02-25T08:18:47-05:00",
    updated_at: "2021-03-16T03:21:00-04:00",
    promoted_at: "2021-02-27T04:05:44-05:00",
    width: 6000,
    height: 4000,
    color: "#262626",
    blur_hash: "L884i6-;4n00RjM{%Mt7%MRjIUof",
    description: null,
    alt_description: "woman in white shirt covering face with both hands",
    urls: {
      raw:
        "https://images.unsplash.com/photo-1614259103706-35ea48fe1f39?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1",
      full:
        "https://images.unsplash.com/photo-1614259103706-35ea48fe1f39?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=85",
      regular:
        "https://images.unsplash.com/photo-1614259103706-35ea48fe1f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1614259103706-35ea48fe1f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1614259103706-35ea48fe1f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=200",
    },
    links: {
      self: "https://api.unsplash.com/photos/Tq-CkO-ZBDc",
      html: "https://unsplash.com/photos/Tq-CkO-ZBDc",
      download: "https://unsplash.com/photos/Tq-CkO-ZBDc/download",
      download_location:
        "https://api.unsplash.com/photos/Tq-CkO-ZBDc/download?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE",
    },
    categories: [],
    likes: 56,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: "9Su5o7dulqo",
      updated_at: "2021-03-16T03:17:17-04:00",
      username: "kvtedavies",
      name: "Kate Davies",
      first_name: "Kate",
      last_name: "Davies",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: "London, UK",
      links: {
        self: "https://api.unsplash.com/users/kvtedavies",
        html: "https://unsplash.com/@kvtedavies",
        photos: "https://api.unsplash.com/users/kvtedavies/photos",
        likes: "https://api.unsplash.com/users/kvtedavies/likes",
        portfolio: "https://api.unsplash.com/users/kvtedavies/portfolio",
        following: "https://api.unsplash.com/users/kvtedavies/following",
        followers: "https://api.unsplash.com/users/kvtedavies/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1614257699824-e8b427dd57afimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        medium:
          "https://images.unsplash.com/profile-1614257699824-e8b427dd57afimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        large:
          "https://images.unsplash.com/profile-1614257699824-e8b427dd57afimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
      },
      instagram_username: "kvtedavies",
      total_collections: 0,
      total_likes: 0,
      total_photos: 9,
      accepted_tos: true,
      for_hire: true,
    },
    exif: {
      make: "SONY",
      model: "ILCE-7C",
      exposure_time: "1/160",
      aperture: "4.0",
      focal_length: "35.0",
      iso: 250,
    },
    location: {
      title: "London, UK",
      name: "London, UK",
      city: "London",
      country: "United Kingdom",
      position: {
        latitude: 51.507351,
        longitude: -0.127758,
      },
    },
    views: 135797,
    downloads: 2036,
  },
  {
    id: "k_2FL39M-L4",
    created_at: "2021-02-26T16:54:24-05:00",
    updated_at: "2021-03-15T20:31:37-04:00",
    promoted_at: "2021-02-27T03:55:59-05:00",
    width: 6240,
    height: 4160,
    color: "#a6a6a6",
    blur_hash: "LfGcut$%a}of0#a#n%a|bHNbaeay",
    description: "Hai",
    alt_description: "brown and white fish on water",
    urls: {
      raw:
        "https://images.unsplash.com/photo-1614376198578-83409958ce76?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1",
      full:
        "https://images.unsplash.com/photo-1614376198578-83409958ce76?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=85",
      regular:
        "https://images.unsplash.com/photo-1614376198578-83409958ce76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1614376198578-83409958ce76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1614376198578-83409958ce76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=200",
    },
    links: {
      self: "https://api.unsplash.com/photos/k_2FL39M-L4",
      html: "https://unsplash.com/photos/k_2FL39M-L4",
      download: "https://unsplash.com/photos/k_2FL39M-L4/download",
      download_location:
        "https://api.unsplash.com/photos/k_2FL39M-L4/download?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE",
    },
    categories: [],
    likes: 14,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: "pM4uJmLrktc",
      updated_at: "2021-03-16T05:35:11-04:00",
      username: "mariolagr",
      name: "MARIOLA GROBELSKA",
      first_name: "MARIOLA",
      last_name: "GROBELSKA",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: "https://api.unsplash.com/users/mariolagr",
        html: "https://unsplash.com/@mariolagr",
        photos: "https://api.unsplash.com/users/mariolagr/photos",
        likes: "https://api.unsplash.com/users/mariolagr/likes",
        portfolio: "https://api.unsplash.com/users/mariolagr/portfolio",
        following: "https://api.unsplash.com/users/mariolagr/following",
        followers: "https://api.unsplash.com/users/mariolagr/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        medium:
          "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        large:
          "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
      },
      instagram_username: null,
      total_collections: 17,
      total_likes: 94,
      total_photos: 413,
      accepted_tos: true,
      for_hire: false,
    },
    exif: {
      make: "Canon",
      model: "Canon EOS 6D Mark II",
      exposure_time: "1/640",
      aperture: "9.0",
      focal_length: "100.0",
      iso: 100,
    },
    location: {
      title: null,
      name: null,
      city: null,
      country: null,
      position: {
        latitude: null,
        longitude: null,
      },
    },
    views: 113715,
    downloads: 1924,
  },
  {
    id: "tOZEgSQtsWA",
    created_at: "2021-03-01T07:29:22-05:00",
    updated_at: "2021-03-16T03:21:05-04:00",
    promoted_at: "2021-03-04T04:54:22-05:00",
    width: 3744,
    height: 5616,
    color: "#f3f3f3",
    blur_hash: "LZK-Xe4;u5xa~T-;ogWYek-VxaS6",
    description: null,
    alt_description: null,
    urls: {
      raw:
        "https://images.unsplash.com/photo-1614599092342-f9e59e1e8e2c?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1",
      full:
        "https://images.unsplash.com/photo-1614599092342-f9e59e1e8e2c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=85",
      regular:
        "https://images.unsplash.com/photo-1614599092342-f9e59e1e8e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1614599092342-f9e59e1e8e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1614599092342-f9e59e1e8e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=200",
    },
    links: {
      self: "https://api.unsplash.com/photos/tOZEgSQtsWA",
      html: "https://unsplash.com/photos/tOZEgSQtsWA",
      download: "https://unsplash.com/photos/tOZEgSQtsWA/download",
      download_location:
        "https://api.unsplash.com/photos/tOZEgSQtsWA/download?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE",
    },
    categories: [],
    likes: 78,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: "4gIhB9fG1jE",
      updated_at: "2021-03-16T08:00:23-04:00",
      username: "elenapopova",
      name: "elena popova",
      first_name: "elena",
      last_name: "popova",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: "France",
      links: {
        self: "https://api.unsplash.com/users/elenapopova",
        html: "https://unsplash.com/@elenapopova",
        photos: "https://api.unsplash.com/users/elenapopova/photos",
        likes: "https://api.unsplash.com/users/elenapopova/likes",
        portfolio: "https://api.unsplash.com/users/elenapopova/portfolio",
        following: "https://api.unsplash.com/users/elenapopova/following",
        followers: "https://api.unsplash.com/users/elenapopova/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-fb-1587641848-66ef5eb0597f.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        medium:
          "https://images.unsplash.com/profile-fb-1587641848-66ef5eb0597f.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        large:
          "https://images.unsplash.com/profile-fb-1587641848-66ef5eb0597f.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 0,
      total_photos: 24,
      accepted_tos: true,
      for_hire: true,
    },
    exif: {
      make: null,
      model: null,
      exposure_time: null,
      aperture: null,
      focal_length: null,
      iso: null,
    },
    location: {
      title: null,
      name: null,
      city: null,
      country: null,
      position: {
        latitude: null,
        longitude: null,
      },
    },
    views: 122586,
    downloads: 1397,
  },
  {
    id: "dqigq9U987A",
    created_at: "2021-03-02T23:45:53-05:00",
    updated_at: "2021-03-15T15:30:49-04:00",
    promoted_at: "2021-03-05T04:10:45-05:00",
    width: 3971,
    height: 5956,
    color: "#404040",
    blur_hash: "L8Eo[Gt7%LM|~pxuIUay00RjD*WB",
    description: "Alone at midnight ",
    alt_description: "people walking on sidewalk during daytime",
    urls: {
      raw:
        "https://images.unsplash.com/photo-1614746741384-a30f6a11e403?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1",
      full:
        "https://images.unsplash.com/photo-1614746741384-a30f6a11e403?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=85",
      regular:
        "https://images.unsplash.com/photo-1614746741384-a30f6a11e403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1614746741384-a30f6a11e403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1614746741384-a30f6a11e403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=200",
    },
    links: {
      self: "https://api.unsplash.com/photos/dqigq9U987A",
      html: "https://unsplash.com/photos/dqigq9U987A",
      download: "https://unsplash.com/photos/dqigq9U987A/download",
      download_location:
        "https://api.unsplash.com/photos/dqigq9U987A/download?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE",
    },
    categories: [],
    likes: 23,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: "BbhCFdorP-k",
      updated_at: "2021-03-16T14:50:49-04:00",
      username: "matsefcik",
      name: "Matej Sefcik",
      first_name: "Matej",
      last_name: "Sefcik",
      twitter_username: "matsefcik",
      portfolio_url: "https://matsefcik.darkroom.tech",
      bio:
        "21 years old / photographer & filmmaker / born in Slovakia, living in New Jersey / photo prints available at the link in my bio 📸",
      location: "New Jersey, USA",
      links: {
        self: "https://api.unsplash.com/users/matsefcik",
        html: "https://unsplash.com/@matsefcik",
        photos: "https://api.unsplash.com/users/matsefcik/photos",
        likes: "https://api.unsplash.com/users/matsefcik/likes",
        portfolio: "https://api.unsplash.com/users/matsefcik/portfolio",
        following: "https://api.unsplash.com/users/matsefcik/following",
        followers: "https://api.unsplash.com/users/matsefcik/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1611432770642-0fb5649a4c15image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        medium:
          "https://images.unsplash.com/profile-1611432770642-0fb5649a4c15image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        large:
          "https://images.unsplash.com/profile-1611432770642-0fb5649a4c15image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
      },
      instagram_username: "matsefcik",
      total_collections: 0,
      total_likes: 354,
      total_photos: 78,
      accepted_tos: true,
      for_hire: true,
    },
    exif: {
      make: "SONY",
      model: "ILCE-7M3",
      exposure_time: "1/400",
      aperture: "2.8",
      focal_length: "28.0",
      iso: 12800,
    },
    location: {
      title: "World Trade Center Oculus, New York, United States",
      name: "World Trade Center Oculus, New York, United States",
      city: "New York",
      country: "United States",
      position: {
        latitude: 40.711532388177,
        longitude: -74.011458826717,
      },
    },
    views: 107350,
    downloads: 758,
  },
  {
    id: "HJVD3qT7BGQ",
    created_at: "2021-03-06T09:35:25-05:00",
    updated_at: "2021-03-15T22:34:41-04:00",
    promoted_at: "2021-03-07T04:54:46-05:00",
    width: 4160,
    height: 5969,
    color: "#c0c0c0",
    blur_hash: "LAL4.~4m.8tR_4ofD$RjtmbbV@oJ",
    description: null,
    alt_description: "white plastic bottle on brown and gray marble table",
    urls: {
      raw:
        "https://images.unsplash.com/photo-1615041273837-dad39809ce6f?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1",
      full:
        "https://images.unsplash.com/photo-1615041273837-dad39809ce6f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=85",
      regular:
        "https://images.unsplash.com/photo-1615041273837-dad39809ce6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1615041273837-dad39809ce6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1615041273837-dad39809ce6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=200",
    },
    links: {
      self: "https://api.unsplash.com/photos/HJVD3qT7BGQ",
      html: "https://unsplash.com/photos/HJVD3qT7BGQ",
      download: "https://unsplash.com/photos/HJVD3qT7BGQ/download",
      download_location:
        "https://api.unsplash.com/photos/HJVD3qT7BGQ/download?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE",
    },
    categories: [],
    likes: 21,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: "zIj9LggVSug",
      updated_at: "2021-03-16T07:50:27-04:00",
      username: "imdauphong",
      name: "Trình Minh Thư",
      first_name: "Trình",
      last_name: "Minh Thư",
      twitter_username: null,
      portfolio_url: "https://www.behance.net/imdauphong",
      bio: "minimalist / coffee - addict / i'm a cat-person",
      location: "Ho Chi Minh City, Vietnam ",
      links: {
        self: "https://api.unsplash.com/users/imdauphong",
        html: "https://unsplash.com/@imdauphong",
        photos: "https://api.unsplash.com/users/imdauphong/photos",
        likes: "https://api.unsplash.com/users/imdauphong/likes",
        portfolio: "https://api.unsplash.com/users/imdauphong/portfolio",
        following: "https://api.unsplash.com/users/imdauphong/following",
        followers: "https://api.unsplash.com/users/imdauphong/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1590377909814-7810c380e70cimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        medium:
          "https://images.unsplash.com/profile-1590377909814-7810c380e70cimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        large:
          "https://images.unsplash.com/profile-1590377909814-7810c380e70cimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
      },
      instagram_username: "imdauphong",
      total_collections: 0,
      total_likes: 4,
      total_photos: 157,
      accepted_tos: true,
      for_hire: true,
    },
    exif: {
      make: null,
      model: null,
      exposure_time: null,
      aperture: null,
      focal_length: null,
      iso: null,
    },
    location: {
      title: null,
      name: null,
      city: null,
      country: null,
      position: {
        latitude: null,
        longitude: null,
      },
    },
    views: 94910,
    downloads: 751,
  },
  {
    id: "k5AkdNUyYQQ",
    created_at: "2021-03-08T10:53:34-05:00",
    updated_at: "2021-03-16T11:26:21-04:00",
    promoted_at: "2021-03-09T04:04:03-05:00",
    width: 8000,
    height: 6000,
    color: "#262626",
    blur_hash: "LkF$z}4TR-Dix]M{s:kCxuRjjZkC",
    description: null,
    alt_description: "black bird flying over brown wooden door",
    urls: {
      raw:
        "https://images.unsplash.com/photo-1615218785857-deb598d98e4b?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1",
      full:
        "https://images.unsplash.com/photo-1615218785857-deb598d98e4b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=85",
      regular:
        "https://images.unsplash.com/photo-1615218785857-deb598d98e4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1615218785857-deb598d98e4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1615218785857-deb598d98e4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=200",
    },
    links: {
      self: "https://api.unsplash.com/photos/k5AkdNUyYQQ",
      html: "https://unsplash.com/photos/k5AkdNUyYQQ",
      download: "https://unsplash.com/photos/k5AkdNUyYQQ/download",
      download_location:
        "https://api.unsplash.com/photos/k5AkdNUyYQQ/download?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE",
    },
    categories: [],
    likes: 27,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: "7KW10WCmV5c",
      updated_at: "2021-03-15T18:24:49-04:00",
      username: "balazsbusznyak",
      name: "Balazs Busznyak",
      first_name: "Balazs",
      last_name: "Busznyak",
      twitter_username: null,
      portfolio_url: "http://www.seven-roads.com",
      bio:
        "Life's too short to stay inside. I am on a mission to inspire those around me to chase happiness and adventure by sharing pictures through my perspective behind a lens. Follow my instagram for more @balazsbusznyak",
      location: "Massachusetts",
      links: {
        self: "https://api.unsplash.com/users/balazsbusznyak",
        html: "https://unsplash.com/@balazsbusznyak",
        photos: "https://api.unsplash.com/users/balazsbusznyak/photos",
        likes: "https://api.unsplash.com/users/balazsbusznyak/likes",
        portfolio: "https://api.unsplash.com/users/balazsbusznyak/portfolio",
        following: "https://api.unsplash.com/users/balazsbusznyak/following",
        followers: "https://api.unsplash.com/users/balazsbusznyak/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1554140605765-e8548d17ceff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        medium:
          "https://images.unsplash.com/profile-1554140605765-e8548d17ceff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        large:
          "https://images.unsplash.com/profile-1554140605765-e8548d17ceff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
      },
      instagram_username: "balazsbusznyak",
      total_collections: 0,
      total_likes: 38,
      total_photos: 120,
      accepted_tos: true,
      for_hire: true,
    },
    exif: {
      make: "DJI",
      model: "FC3170",
      exposure_time: "1/200",
      aperture: "2.8",
      focal_length: "4.5",
      iso: 100,
    },
    location: {
      title: null,
      name: null,
      city: null,
      country: null,
      position: {
        latitude: null,
        longitude: null,
      },
    },
    views: 104036,
    downloads: 500,
  },
  {
    id: "Vf7Y6XrcjoU",
    created_at: "2021-03-09T22:36:11-05:00",
    updated_at: "2021-03-15T17:20:43-04:00",
    promoted_at: "2021-03-10T04:59:51-05:00",
    width: 5893,
    height: 3929,
    color: "#262626",
    blur_hash: "LRBpRmR-0Kr=_3kC9FM|yDs:R5Ip",
    description: null,
    alt_description: "man in black jacket standing on sidewalk during daytime",
    urls: {
      raw:
        "https://images.unsplash.com/photo-1615346340977-cf7f5a8f3059?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1",
      full:
        "https://images.unsplash.com/photo-1615346340977-cf7f5a8f3059?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=85",
      regular:
        "https://images.unsplash.com/photo-1615346340977-cf7f5a8f3059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1615346340977-cf7f5a8f3059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1615346340977-cf7f5a8f3059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=200",
    },
    links: {
      self: "https://api.unsplash.com/photos/Vf7Y6XrcjoU",
      html: "https://unsplash.com/photos/Vf7Y6XrcjoU",
      download: "https://unsplash.com/photos/Vf7Y6XrcjoU/download",
      download_location:
        "https://api.unsplash.com/photos/Vf7Y6XrcjoU/download?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE",
    },
    categories: [],
    likes: 108,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: "lZdf0WLQDTM",
      updated_at: "2021-03-16T14:35:46-04:00",
      username: "thevantagepoint718",
      name: "Lerone Pieters",
      first_name: "Lerone",
      last_name: "Pieters",
      twitter_username: null,
      portfolio_url: "https://www.instagram.com/the.vantage.point/",
      bio: "Finding my way.",
      location: "Brooklyn, New York",
      links: {
        self: "https://api.unsplash.com/users/thevantagepoint718",
        html: "https://unsplash.com/@thevantagepoint718",
        photos: "https://api.unsplash.com/users/thevantagepoint718/photos",
        likes: "https://api.unsplash.com/users/thevantagepoint718/likes",
        portfolio:
          "https://api.unsplash.com/users/thevantagepoint718/portfolio",
        following:
          "https://api.unsplash.com/users/thevantagepoint718/following",
        followers:
          "https://api.unsplash.com/users/thevantagepoint718/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1548270728190-4a29bbb0fa81?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        medium:
          "https://images.unsplash.com/profile-1548270728190-4a29bbb0fa81?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        large:
          "https://images.unsplash.com/profile-1548270728190-4a29bbb0fa81?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
      },
      instagram_username: "the.vantage.point",
      total_collections: 0,
      total_likes: 2,
      total_photos: 373,
      accepted_tos: true,
      for_hire: true,
    },
    exif: {
      make: "SONY",
      model: "ILCE-7M3",
      exposure_time: "1/2500",
      aperture: "1.2",
      focal_length: "35.0",
      iso: 100,
    },
    location: {
      title: "Chinatown, Manhattan, New York, NY, USA",
      name: "Chinatown, Manhattan, New York, NY, USA",
      city: "New York",
      country: "United States",
      position: {
        latitude: 40.715751,
        longitude: -73.997031,
      },
    },
    views: 1366673,
    downloads: 4026,
  },
  {
    id: "uKZL7YRTqxk",
    created_at: "2021-03-14T06:32:01-04:00",
    updated_at: "2021-03-16T00:26:01-04:00",
    promoted_at: "2021-03-14T11:22:32-04:00",
    width: 3747,
    height: 5621,
    color: "#262626",
    blur_hash: "LLC6Z8xu0LWB-nofE2xuM{WBxu-p",
    description: "Wooden beehive at Central Park ",
    alt_description:
      "woman in black jacket and black pants walking on sidewalk during daytime",
    urls: {
      raw:
        "https://images.unsplash.com/photo-1615717899136-315597f11a2f?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1",
      full:
        "https://images.unsplash.com/photo-1615717899136-315597f11a2f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=85",
      regular:
        "https://images.unsplash.com/photo-1615717899136-315597f11a2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1615717899136-315597f11a2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1615717899136-315597f11a2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE&ixlib=rb-1.2.1&q=80&w=200",
    },
    links: {
      self: "https://api.unsplash.com/photos/uKZL7YRTqxk",
      html: "https://unsplash.com/photos/uKZL7YRTqxk",
      download: "https://unsplash.com/photos/uKZL7YRTqxk/download",
      download_location:
        "https://api.unsplash.com/photos/uKZL7YRTqxk/download?ixid=MnwyMTUzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5MjE2MjE",
    },
    categories: [],
    likes: 64,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: "6qMnJbPQOFQ",
      updated_at: "2021-03-16T15:05:49-04:00",
      username: "ivntsa",
      name: "Ivan Tsaregorodtsev",
      first_name: "Ivan",
      last_name: "Tsaregorodtsev",
      twitter_username: null,
      portfolio_url: null,
      bio:
        "Hobbyists street photographer. Trying to capture seemingly ordinary moments and document the extraordinary life around us. ",
      location: null,
      links: {
        self: "https://api.unsplash.com/users/ivntsa",
        html: "https://unsplash.com/@ivntsa",
        photos: "https://api.unsplash.com/users/ivntsa/photos",
        likes: "https://api.unsplash.com/users/ivntsa/likes",
        portfolio: "https://api.unsplash.com/users/ivntsa/portfolio",
        following: "https://api.unsplash.com/users/ivntsa/following",
        followers: "https://api.unsplash.com/users/ivntsa/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1615252969904-1bb1b55ea9a6image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        medium:
          "https://images.unsplash.com/profile-1615252969904-1bb1b55ea9a6image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        large:
          "https://images.unsplash.com/profile-1615252969904-1bb1b55ea9a6image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
      },
      instagram_username: "ivntsa",
      total_collections: 0,
      total_likes: 22,
      total_photos: 16,
      accepted_tos: true,
      for_hire: false,
    },
    exif: {
      make: "FUJIFILM",
      model: "X-E3",
      exposure_time: "1/1000",
      aperture: "4.5",
      focal_length: "35.0",
      iso: 200,
    },
    location: {
      title: "Central Park Mall, Chippendale, Australia",
      name: "Central Park Mall, Chippendale, Australia",
      city: "Chippendale",
      country: "Australia",
      position: {
        latitude: -33.884498181015,
        longitude: 151.200397610664,
      },
    },
    views: 671614,
    downloads: 855,
  },
];
console.log(photosArray);
// Unsplash API
const count = 10;
const apiKey = ACCESS_KEY;

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function to set Attributes on DOM elements
const setAttributes = (element, attributes) => {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

// Create elements for links and photos, Add it to the DOM
const displayPhotos = () => {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // Create <img> for photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

// Get photos from Unsplash API
const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    photosArray = data;
    // console.log(photosArray);
    displayPhotos();
  } catch (err) {
    // Catch error here
    console.log;
  }
};

// Check to see if scrolling near the bottom of the page, Load more photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    console.log("load more");
    // getPhotos();
    displayPhotos();
  }
});

// On load
// getPhotos();
displayPhotos();
