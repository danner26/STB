'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ListingSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  firstName: String,
  lastName: String,
  contactEmail: String,
  contactPhone: String,
  fieldState: String,
  fieldCity: String,
  ageGroup: String,
  level: String,
  entryFee: Number,
  fieldAddress: String,
  sanctioningBody: String,
  maxTeams: Number,
  fees: String,
  gamesGuar: Number,
  umpires: Number,
  timeLimit: Boolean,
  gameType: String,
  startDate: Date,
  description: String
});

mongoose.model('Listing', ListingSchema);
