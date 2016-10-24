var avro = require('avsc');
var type = avro.parse({
    name: 'Pet',
    type: 'record',
    fields: [{
        name: 'kind',
        type: {
            name: 'Kind',
            type: 'enum',
            symbols: ['CAT', 'DOG']
        }
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'optionalValue',
        type: ['string', 'null'],
        default: 'null'
    }]
});
var val = {
    kind: 'CAT',
    name: 'Albert',
    optionalValue: 'i am optional value'
};
var buf = type.toBuffer(val); // Encoded buffer.

// var decrpted = type.fromBuffer(buf);
console.log("Serialization with optionalValue");
console.log("Raw Value :" + JSON.stringify(val));
console.log("Buffer Value :" + buf.toString());
console.log("Deserialized Value from buffer value :" + type.fromBuffer(buf));

val = {
    kind: 'CAT',
    name: 'Albert',
    a:'test'
};
buf = type.toBuffer(val); // Encoded buffer.

// var decrpted = type.fromBuffer(buf);
console.log("Serialization without optionalValue");
console.log("Raw Value :" + JSON.stringify(val));
console.log("Buffer Value :" + buf.toString());
console.log("Deserialized Value from buffer value :" + type.fromBuffer(buf));
