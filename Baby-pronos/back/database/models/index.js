const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    campaigns: [{ 
        title: { type: String },
        diaporama: {type: String },
        reward: { type: String},
        rewardPicture: { type: String},
    }],
    prognosis:[{
        name: { type: String,  },
        sex: { type: String,  },
        weight: { type: Number,  },
        height: { type: Number,  },
        date: { type: String,  },
    }],
  });

  module.exports = mongoose.model('User', userSchema);