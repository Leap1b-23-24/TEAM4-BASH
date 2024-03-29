import mongoose, { Schema, model } from "mongoose";

export const addressSchema = new Schema({
  deliveryAdd: {
    email: {
      type: String,
      require: false,
    },
    firstName: {
      type: String,
      require: false,
    },
    lastName: {
      type: String,
      require: false,
    },
    address: {
      type: String,
      require: false,
    },
    city: {
      type: String,
      require: false,
    },
    info: {
      type: String,
      require: false,
    },
  },
  toCart: [
    {
      sel: {
        merchId: mongoose.Schema.Types.ObjectId,
        _id: mongoose.Schema.Types.ObjectId,
        star: {
          type: Number,
          require: false,
        },
        starCount: {
          type: Number,
          require: true,
          default: 0,
        },
        productName: {
          type: String,
          require: true,
        },
        additionInfo: {
          type: String,
          require: true,
        },
        barCode: {
          type: String,
          require: true,
        },
        productImage: {
          type: Array,
          require: true,
        },
        mainPrice: {
          type: Number,
          require: true,
        },
        quantity: {
          type: Number,
          require: true,
        },
        mainCategory: {
          type: String,
          require: true,
        },
        secondCategory: {
          type: String,
          require: true,
        },
        color: {
          type: Array,
          require: true,
        },
        size: {
          type: Array,
          require: true,
        },
        tag: {
          type: Array,
          require: true,
        },
        productReactionCount: {
          type: Number,
          require: false,
        },
        productSoldQnty: {
          type: Number,
          require: false,
        },
        salePercent: {
          type: Number,
          require: false,
        },
        createdAt: Date,
        updatedAt: Date,
      },
      count: {
        type: Number,
        require: true,
      },
    },
  ],
  userId: mongoose.Schema.Types.ObjectId,
  sumPaid: {
    type: Number,
    require: true,
  },
  createdAt: Date,
  updatedAt: Date,
});

export const AddressModel = model("address", addressSchema);
