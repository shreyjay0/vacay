import { Mongoose } from "mongoose";

const PackSchema = new mongoose.Schema({
    packName: {
        type: String,
        required: [true, "Enter the name"],
        maxLength: [50, 'Maximum allowed room name length is 50']
    },
    locations: {
        type: Array,
        required: [true, "Enter at least one location"]
    },
    price: {
        type: Number,
        required: [true, "Enter the price."]
    },
    pickupAvailability: {
        type: Boolean
    },
    maxCap: {
        type: Number,
        required: [true, "Enter the maximum number of head allowed"],
        default: 1
    },
    details: {
        type: String,
        required: [true, "About the place."]
    },
    facilities: [{
        ac: {
            type: Boolean,
            required: true
        },
        wifi: [{
            availability: {
                type: Boolean,
                required: true
            },
            speed: {
                type: Number,
            }
        }],
        roomService: {
            type: Boolean,
            required: true
        },
        tv: {
            type: Boolean,
            required: true
        },
        pool: {
            type: Boolean
        },
        cleaning: {
            type: Boolean,
            required: true
        }
    }],
    ratings: {
        type: Number,
        default: 0 
        },
    ratingQuantity: {
        type: Number,
        default: 0
        },
    rules: [
        {
            openTime: {
                type: Date, 
             },
            closeTime: {
               type: Date, 
            },
            smokingProhibition: {
                type: Boolean
            },
            drinkingProhibition: {
                type: Boolean
            },
            petsAllowance:{
                type: Boolean
            },
            additionalInfo: {
                type: String
            }
        }
    ],
    cancellationAllowance: {
        type: Boolean,
        required: true
    }
})

export default mongoose.models.Pack || mongoose.model('Pack', PackSchema)