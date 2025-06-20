import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  purposeOfVisit: { type: String, required: true },
  dateOfArrival: { type: Date, required: true },
  dateOfDeparture: { type: Date, required: true },
  mealsIncluded: { type: Boolean, default: false },
  bookingType: { type: String, required: true },
  specialRequests: { type: String }
});

export default mongoose.model('Guest', guestSchema);
