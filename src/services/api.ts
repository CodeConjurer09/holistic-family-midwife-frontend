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
};