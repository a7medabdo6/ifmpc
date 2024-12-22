// // services/api.js
// import api from "./axiosConfig";

// // Fetch categories
// export const fetchCategories = async () => {
//   try {
//     const response = await api.get("/categories/");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };

// export const fetchHome = async () => {
//   try {
//     const response = await api.get("/home/");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };

// // export const fetchSearch = async (query) => {
// //   try {
// //     const response = await api.get(`/search/?query=${query}/`);
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error fetching categories:", error);
// //     throw error;
// //   }
// // };

// export const fetchSearch = async (query) => {
//   try {
//     const response = await api.get(`/search/`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };

// export const fetchEvents = async () => {
//   try {
//     const response = await api.get("/events/");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };
// export const fetchTrainingLast = async () => {
//   try {
//     const response = await api.get("/trainings/last/");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };
// export const fetchMostRecentProjects = async () => {
//   try {
//     const response = await api.get("/projects/?sort=-id/");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };
// export const fetchMostPobulartProjects = async () => {
//   try {
//     const response = await api.get("/projects/?sort=-popularity_count/");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };
// export const fetchMostRecentPublications = async () => {
//   try {
//     const response = await api.get("/publications/?sort=-id/");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };
// export const fetchMostPobulartPublications = async () => {
//   try {
//     const response = await api.get("/publications/?sort=-popularity_count/");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };
// // Fetch contacts
// export const fetchContacts = async () => {
//   try {
//     const response = await api.get("/contacts/");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching contacts:", error);
//     throw error;
//   }
// };

// export const createContactUs = async (data) => {
//   const response = await api.post("/contacts/", data);
//   return response.data;
// };

// export const createSubscribe = async (data) => {
//   const response = await api.post("/contacts/subscribe/", data);
//   return response.data;
// };

// export const fetchOurPartners = async () => {
//   const response = await api.get("/settings/our-partners/");
//   return response.data;
// };
// // Fetch projects
// export const fetchProjects = async () => {
//   try {
//     const response = await api.get("/projects/");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//     throw error;
//   }
// };

// // Fetch project by ID
// export const fetchProjectById = async (id) => {
//   try {
//     const response = await api.get(`/projects/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching project with ID ${id}:`, error);
//     throw error;
//   }
// };

// // Fetch publications
// export const fetchPublications = async () => {
//   try {
//     const response = await api.get("/publications/");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching publications:", error);
//     throw error;
//   }
// };

// // Fetch publication by ID
// export const fetchPublicationById = async (id) => {
//   try {
//     const response = await api.get(`/publications/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching publication with ID ${id}:`, error);
//     throw error;
//   }
// };

// export const fetchProjectsById = async (id) => {
//   try {
//     const response = await api.get(`/projects/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching publication with ID ${id}:`, error);
//     throw error;
//   }
// };

const baseUrl = process.env.NEXT_PUBLIC_DOMAIN_BASEURL;

// Fetch categories
export const fetchCategories = async (lng) => {
  const apiUrl = `${baseUrl}/categories/`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const fetchQuestions = async (lng) => {
  const apiUrl = `${baseUrl}/contacts/questions/`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};
export const FetchHomeData = async (lng) => {
  const apiUrl = `${baseUrl}/home/`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      // next: {
      //   revalidate: 20,
      // },

      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // setTimeout(() => {
    //   return data;
    // }, 1000);
    return data;
  } catch (error) {
    //throw new Error(error);
  }
};
export const fetchHome = async (lng) => {
  const apiUrl = `${baseUrl}/home/`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data, "8888888888888");

    return data;
  } catch (error) {
    console.error("Error fetching home:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const fetchSearch = async (
  searchQuery,
  categoriesProjects = [],
  categoriesPublications = [],
  lng
) => {
  // Construct the categories query string
  const categoriesProjectsParam = categoriesProjects.join(",");
  const categoriesPublicationsParam = categoriesPublications.join(",");

  // Construct the full API URL
  const apiUrl = `${baseUrl}/search/?query=${searchQuery}&categories_projects=${categoriesProjectsParam}&categories_publications=${categoriesPublicationsParam}`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};
// export const fetchSearch = async (query, lng) => {
//   const apiUrl = `${baseUrl}/search/?query=${query}`;
//   try {
//     const response = await fetch(apiUrl, {
//       method: "GET",
//       cache: "no-store",
//       headers: {
//         "Accept-Language": lng,
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching search results:", error.message);
//     return {
//       props: {
//         data: {},
//       },
//     };
//   }
// };

export const fetchEvents = async (lng) => {
  const apiUrl = `${baseUrl}/events/`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const fetchTrainingLast = async (lng) => {
  const apiUrl = `${baseUrl}/trainings/`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching last trainings:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const fetchMostRecentProjects = async (lng, offset = 0, limit = 5) => {
  const apiUrl = `${baseUrl}/projects/?sort=-id&limit=${limit}&offset=${offset}`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching most recent projects:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const fetchMostPopularProjects = async (lng, offset = 0, limit = 5) => {
  const apiUrl = `${baseUrl}/projects/?sort=-popularity_count&limit=${limit}&offset=${offset}`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching most popular projects:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const fetchMostRecentPublications = async (
  lng,
  offset = 0,
  limit = 5
) => {
  const apiUrl = `${baseUrl}/publications/?sort=-id&limit=${limit}&offset=${offset}`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching most recent publications:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const fetchMostPopularPublications = async (
  lng,
  offset = 0,
  limit = 5
) => {
  const apiUrl = `${baseUrl}/publications/?sort=-popularity_count&limit=${limit}&offset=${offset}`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching most popular publications:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const fetchContacts = async (lng) => {
  const apiUrl = `${baseUrl}/contacts/`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};
export const fetchContactUs = async (lng) => {
  const apiUrl = `${baseUrl}/settings/contact-us-pages/`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const createContactUs = async (data, lng) => {
  const apiUrl = `${baseUrl}/contacts/`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lng,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error creating contact:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const createSubscribe = async (data, lng) => {
  const apiUrl = `${baseUrl}/contacts/subscribe/`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lng,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error creating subscription:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const fetchOurPartners = async (lng) => {
  const apiUrl = `${baseUrl}/settings/our-partners/`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching our partners:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const fetchProjects = async (lng) => {
  const apiUrl = `${baseUrl}/projects/`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const fetchProjectById = async (id, lng) => {
  const apiUrl = `${baseUrl}/projects/${id}/`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching project by ID:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};

export const fetchPublicationById = async (id, lng) => {
  const apiUrl = `${baseUrl}/publications/${id}/`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching publications by ID:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};


export const fetchServices = async (lng) => {
  const apiUrl = `${baseUrl}/services/primary/`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": lng,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data, "8888888888888");

    return data;
  } catch (error) {
    console.error("Error fetching home:", error.message);
    return {
      props: {
        data: {},
      },
    };
  }
};