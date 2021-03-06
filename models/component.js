var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: { //name of the node
        type: String,
        required: true
    },
    type: { //type of the node
        type: String,
        required: true
    },
    description: { //type of the node
        type: String
    },
    metadata: {
        type: mongoose.Schema.Types.Mixed,
        default: {}
    },
    inPorts: { //list of input ports
        type: mongoose.Schema.Types.Mixed
    },
    outPorts: { //list of output ports
        type: mongoose.Schema.Types.Mixed
    }
});

module.exports = mongoose.model('component', schema);