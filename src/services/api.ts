const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  dueDate?: string;
  weeksPregnant?: string;
  previousPregnancies?: string;
  medicalConditions?: string;
  currentMedications?: string;
  additionalNotes?: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
}

interface GeneralEnquiryData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface ContactEnquiryData {
  name: string;
  email: string;
  phone: string;
  dueDate?: string;
  reason: string;
  message: string;
}

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: {
    id: number;
    name: string;
    bio: string;
    avatar?: string;
  };
  category: {
    id: number;
    name: string;
    slug: string;
    description: string;
  };
  tags: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  published_date: string;
  reading_time: number;
  is_featured: boolean;
  views_count: number;
  created_at?: string;
  updated_at?: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

interface Tag {
  id: number;
  name: string;
  slug: string;
}

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const api = {
  // Health check
  healthCheck: async () => {
    const response = await fetch(`${API_BASE_URL}/health/`);
    return response.json();
  },

  // Submit booking
  submitBooking: async (data: BookingData) => {
    const response = await fetch(`${API_BASE_URL}/bookings/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        service_type: data.serviceType,
        preferred_date: data.preferredDate,
        preferred_time: data.preferredTime,
        due_date: data.dueDate || null,
        weeks_pregnant: data.weeksPregnant !== "" ? parseInt(data.weeksPregnant) : null,
        previous_pregnancies: data.previousPregnancies || '',
        medical_conditions: data.medicalConditions || '',
        current_medications: data.currentMedications || '',
        additional_notes: data.additionalNotes || '',
        emergency_contact_name: data.emergencyContactName,
        emergency_contact_phone: data.emergencyContactPhone,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit booking');
    }

    return response.json();
  },

  // Submit general enquiry
  submitGeneralEnquiry: async (data: GeneralEnquiryData) => {
    const response = await fetch(`${API_BASE_URL}/general-enquiries/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit enquiry');
    }

    return response.json();
  },

  // Submit contact enquiry
  submitContactEnquiry: async (data: ContactEnquiryData) => {
    const response = await fetch(`${API_BASE_URL}/contact-enquiries/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        due_date: data.dueDate || null,
        reason: data.reason,
        message: data.message,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit contact form');
    }

    return response.json();
  },

  // ========== BLOG API ENDPOINTS ==========

  // Get all blog posts with pagination and filters
  getBlogPosts: async (params?: {
    page?: number;
    page_size?: number;
    search?: string;
    ordering?: string;
  }): Promise<PaginatedResponse<BlogPost>> => {
    const queryParams = new URLSearchParams();
    
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.page_size) queryParams.append('page_size', params.page_size.toString());
    if (params?.search) queryParams.append('search', params.search);
    if (params?.ordering) queryParams.append('ordering', params.ordering);

    const response = await fetch(`${API_BASE_URL}/blog/posts/?${queryParams.toString()}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    return response.json();
  },

  // Get a single blog post by slug
  getBlogPost: async (slug: string): Promise<BlogPost> => {
    const response = await fetch(`${API_BASE_URL}/blog/posts/${slug}/`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }

    return response.json();
  },

  // Get featured blog posts
  getFeaturedPosts: async (): Promise<BlogPost[]> => {
    const response = await fetch(`${API_BASE_URL}/blog/posts/featured/`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch featured posts');
    }

    return response.json();
  },

  // Search blog posts with advanced filters
  searchBlogPosts: async (params: {
    q?: string;
    category?: string;
    page?: number;
    page_size?: number;
  }): Promise<PaginatedResponse<BlogPost>> => {
    const queryParams = new URLSearchParams();
    
    if (params.q) queryParams.append('q', params.q);
    if (params.category) queryParams.append('category', params.category);
    if (params.page) queryParams.append('page', params.page.toString());
    if (params.page_size) queryParams.append('page_size', params.page_size.toString());

    const response = await fetch(`${API_BASE_URL}/blog/posts/search/?${queryParams.toString()}`);
    
    if (!response.ok) {
      throw new Error('Failed to search blog posts');
    }

    return response.json();
  },

  // Get posts by category
  getPostsByCategory: async (categorySlug: string, page?: number): Promise<PaginatedResponse<BlogPost>> => {
    const queryParams = new URLSearchParams();
    queryParams.append('category', categorySlug);
    if (page) queryParams.append('page', page.toString());

    const response = await fetch(`${API_BASE_URL}/blog/posts/by_category/?${queryParams.toString()}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts by category');
    }

    return response.json();
  },

  // Get posts by tag
  getPostsByTag: async (tagSlug: string, page?: number): Promise<PaginatedResponse<BlogPost>> => {
    const queryParams = new URLSearchParams();
    queryParams.append('tag', tagSlug);
    if (page) queryParams.append('page', page.toString());

    const response = await fetch(`${API_BASE_URL}/blog/posts/by_tag/?${queryParams.toString()}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts by tag');
    }

    return response.json();
  },

  // Get all categories
  getCategories: async (): Promise<Category[]> => {
    const response = await fetch(`${API_BASE_URL}/blog/categories/`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    return response.json();
  },

  // Get a single category
  getCategory: async (slug: string): Promise<Category> => {
    const response = await fetch(`${API_BASE_URL}/blog/categories/${slug}/`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch category');
    }

    return response.json();
  },

  // Get all tags
  getTags: async (): Promise<Tag[]> => {
    const response = await fetch(`${API_BASE_URL}/blog/tags/`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch tags');
    }

    return response.json();
  },

  // Get a single tag
  getTag: async (slug: string): Promise<Tag> => {
    const response = await fetch(`${API_BASE_URL}/blog/tags/${slug}/`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch tag');
    }

    return response.json();
  },

  getBlogPost: async (slug: string) => {
    const response = await fetch(`/api/blog/posts/${slug}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }

    return response.json();
  },

  // Your existing searchBlogPosts method should remain
  searchBlogPosts: async (params: any) => {
    const queryParams = new URLSearchParams();
    
    if (params.page_size) {
      queryParams.append('page_size', params.page_size.toString());
    }
    if (params.category) {
      queryParams.append('category', params.category);
    }
    if (params.tag) {
      queryParams.append('tag', params.tag);
    }
    if (params.search) {
      queryParams.append('search', params.search);
    }

    const response = await fetch(`/api/blog/posts/?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    return response.json();
  },

};