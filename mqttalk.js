#!/usr/bin/env node
'use strict'

/*
 * Copyright (c) 2018-2018 mqttalk.js contributors.
 * Copyright (c) 2018-2018 Christian Broberg.
 *
 * See LICENSE for more information
 */

 // Import modules

var jsonPut = require('./lib/jsonput')
var jsonGet = require('./lib/jsonget')

// Expose mqttalk modules
module.exports.jsonPut = jsonPut
module.exports.jsonGet = jsonGet

