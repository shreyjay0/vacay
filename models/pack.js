import mongoose  from "mongoose";

const PackSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },
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
        },
        kitchen: {
            type: Boolean,
            required: true
        },
        parking: {
            type: Boolean,
            required: true
        },
        ownRestaurant: {
            type : Boolean
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
    picstures: [
        {
            name: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
        }
    ],
    userReviews: [
        {
            userId: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name:{
                type: String,
                required: true
            },
            review: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            }            
        }
    ], 
    cancellationAllowance: {
        type: Boolean,
        required: true
    },
    postDate: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.Pack || mongoose.model('Pack', PackSchema)