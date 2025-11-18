import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  AlertCircle,
  Heart,
  FileText,
  MessageSquare,
  Loader2
} from "lucide-react";
import { api } from "@/services/api";
import { toast } from "sonner";

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    dueDate: "",
    weeksPregnant: "",
    previousPregnancies: "",
    medicalConditions: "",
    currentMedications: "",
    additionalNotes: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
  });

  const serviceTypes = [
    { key: "antenatal", label: "Antenatal Care & Follow-Up" },
    { key: "consultations", label: "Consultations" },
    { key: "partner_health", label: "Partner Health Support" },
    { key: "postpartum", label: "Postpartum Care & Follow-Up" },
    { key: "preconception", label: "Preconception Care" },
    { key: "labor_prep", label: "Preparation for Labor & Delivery" },
    { key: "teenage", label: "Teenage Empowerment & Reproductive Education" },
  ];

  const timeSlots = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  function convertTo24Hour(time12h: string) {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (modifier === 'PM' && hours < 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        preferredTime: formData.preferredTime
          ? convertTo24Hour(formData.preferredTime)
          : null
      };

      const response = await api.submitBooking(payload);
      
      toast.success(
        response.message || 'Booking submitted successfully! We will contact you within 24 hours.',
        { duration: 6000 }
      );

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        serviceType: "",
        preferredDate: "",
        preferredTime: "",
        dueDate: "",
        weeksPregnant: "",
        previousPregnancies: "",
        medicalConditions: "",
        currentMedications: "",
        additionalNotes: "",
        emergencyContactName: "",
        emergencyContactPhone: "",
      });

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-light-sage/30 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-light-sage to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">Book Appointment</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Schedule Your Consultation
            </h1>
            <p className="text-lg text-foreground mb-8">
              Take the first step towards personalized maternal care. Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
            </p>
            
            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold">24hr Response</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold">Flexible Scheduling</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Heart className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold">Personalized Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <Card className="mb-8 shadow-lg border-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <User className="h-6 w-6 text-primary" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Please provide your basic contact details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-base font-semibold mb-2 flex items-center gap-2">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Jane"
                        required
                        disabled={isSubmitting}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-base font-semibold mb-2 flex items-center gap-2">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Kimani"
                        required
                        disabled={isSubmitting}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-base font-semibold mb-2 flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        required
                        disabled={isSubmitting}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-semibold mb-2 flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254700000000"
                        required
                        disabled={isSubmitting}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-base font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Home Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street address, city"
                      required
                      disabled={isSubmitting}
                      className="h-12"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Appointment Details */}
              <Card className="mb-8 shadow-lg border-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Calendar className="h-6 w-6 text-primary" />
                    Appointment Details
                  </CardTitle>
                  <CardDescription>Choose your preferred service, date, and time</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="serviceType" className="text-base font-semibold mb-2 flex items-center gap-2">
                      Service Type <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a service...</option>
                      {serviceTypes.map((service) => (
                        <option key={service.key} value={service.key}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="preferredDate" className="text-base font-semibold mb-2 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Preferred Date <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="h-12"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime" className="text-base font-semibold mb-2 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Preferred Time <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">Select time...</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Information */}
              <Card className="mb-8 shadow-lg border-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <FileText className="h-6 w-6 text-primary" />
                    Medical Information
                  </CardTitle>
                  <CardDescription>Help us understand your health needs better (Optional but recommended)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="dueDate" className="text-base font-semibold mb-2">
                        Expected Due Date (if applicable)
                      </Label>
                      <Input
                        id="dueDate"
                        name="dueDate"
                        type="date"
                        value={formData.dueDate}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="weeksPregnant" className="text-base font-semibold mb-2">
                        Weeks Pregnant (if applicable)
                      </Label>
                      <Input
                        id="weeksPregnant"
                        name="weeksPregnant"
                        type="number"
                        value={formData.weeksPregnant}
                        onChange={handleChange}
                        placeholder="e.g., 12"
                        disabled={isSubmitting}
                        className="h-12"
                        min="0"
                        max="42"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="previousPregnancies" className="text-base font-semibold mb-2">
                      Previous Pregnancies
                    </Label>
                    <Input
                      id="previousPregnancies"
                      name="previousPregnancies"
                      value={formData.previousPregnancies}
                      onChange={handleChange}
                      placeholder="e.g., First pregnancy, or 2 previous births"
                      disabled={isSubmitting}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="medicalConditions" className="text-base font-semibold mb-2">
                      Existing Medical Conditions
                    </Label>
                    <Textarea
                      id="medicalConditions"
                      name="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={handleChange}
                      placeholder="Please list any medical conditions we should be aware of..."
                      rows={3}
                      disabled={isSubmitting}
                      className="resize-none"
                    />
                  </div>

                  <div>
                    <Label htmlFor="currentMedications" className="text-base font-semibold mb-2">
                      Current Medications
                    </Label>
                    <Textarea
                      id="currentMedications"
                      name="currentMedications"
                      value={formData.currentMedications}
                      onChange={handleChange}
                      placeholder="List any medications you're currently taking..."
                      rows={3}
                      disabled={isSubmitting}
                      className="resize-none"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="mb-8 shadow-lg border-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <AlertCircle className="h-6 w-6 text-primary" />
                    Emergency Contact
                  </CardTitle>
                  <CardDescription>Who should we contact in case of emergency?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="emergencyContactName" className="text-base font-semibold mb-2">
                        Emergency Contact Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="emergencyContactName"
                        name="emergencyContactName"
                        value={formData.emergencyContactName}
                        onChange={handleChange}
                        placeholder="Full name"
                        required
                        disabled={isSubmitting}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyContactPhone" className="text-base font-semibold mb-2">
                        Emergency Contact Phone <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="emergencyContactPhone"
                        name="emergencyContactPhone"
                        type="tel"
                        value={formData.emergencyContactPhone}
                        onChange={handleChange}
                        placeholder="+254700000000"
                        required
                        disabled={isSubmitting}
                        className="h-12"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Notes */}
              <Card className="mb-8 shadow-lg border-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Additional Notes
                  </CardTitle>
                  <CardDescription>Is there anything else you'd like us to know?</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Share any questions, concerns, or special requirements..."
                    rows={5}
                    disabled={isSubmitting}
                    className="resize-none"
                  />
                </CardContent>
              </Card>

              {/* Important Information Box */}
              <Card className="mb-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-2 text-sm text-foreground">
                      <p className="font-semibold">Before you submit:</p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>We'll confirm your appointment within 24 hours</li>
                        <li>You'll receive a confirmation email with appointment details</li>
                        <li>Please arrive 10 minutes early for your first visit</li>
                        <li>Bring your insurance card and ID if applicable</li>
                        <li>If you need to cancel or reschedule, please give us 24 hours notice</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-white px-12 h-14 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Calendar className="mr-2 h-5 w-5" />
                      Submit Booking Request
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="h-14 px-12 text-lg"
                  disabled={isSubmitting}
                  onClick={() => window.history.back()}
                >
                  Cancel
                </Button>
              </div>

              <p className="text-center text-sm text-foreground mt-6">
                By submitting this form, you agree to our terms of service and privacy policy.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 bg-gradient-to-br from-light-sage to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Need Help Booking?
            </h2>
            <p className="text-foreground mb-6">
              If you have any questions or prefer to book over the phone, our team is here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline">
                <a href="tel:0797735027" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Us: +254797735027
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:info@holisticfamilymidwife.com" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;