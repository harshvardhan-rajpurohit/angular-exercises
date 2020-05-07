const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const laabr = require('laabr');

mongoose.connect('mongodb+srv://test:test@cluster0-gdn18.mongodb.net/test',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true });

// create a schema
var schema = new mongoose.Schema({
    firstName: String,
    lastName: String,});

var dataT = mongoose.model('tabledatas',schema);

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin:["*"],
                headers: ["Accept","Content-Type","Access-Control-Allow-Origin"],
                additionalHeaders:["X-Requested-With"]
            }
        }
    });

    await server.route({
        method: 'GET',
        path: '/',
        handler: async(request, h) => {
            var data;
            await dataT.find({}, function(err, users) {
                if (err) throw err;
                data = users
              });
              return data;
        }
    })

    await server.route({
        method: 'GET',
        path: '/{id}',
        handler: async(request, h) => {
            var data;
            await dataT.find({_id:request.params.id}, function(err, users) {
                if (err) throw err;
                data = users
              });
              return data;
        }
    })


    await server.route({
        method: 'POST',
        path: '/addData',
        handler: async (request, h) => {
            let data = {firstName:request.payload.firstName,lastName:request.payload.lastName}
            var newUser = new dataT(data)
            var result = await newUser.save()
            return h.response(result);
        }
    })


    
    await server.route({
        method: 'DELETE',
        path: '/',
        handler: async(request, h) => {
            var dataParsed = {"firstName":request.query.firstName, "lastName":request.query.lastName}
            console.log(dataParsed)
            var result = await dataT.findOneAndDelete(dataParsed);
            return h.response(result);
        }
    })

    await server.route({
        method: 'POST',
        path: '/update',
        handler: async (request, h) => {
            console.log(request.payload)
            var result = await dataT.findByIdAndUpdate(request.payload._id,request.payload);
            return h.response(result);
        }
    })

    await server.route({
        method: 'PUT',
        path: '/',
        handler: async (request, h) => {
            console.log(request.payload)
            var result = await dataT.findByIdAndUpdate(request.payload._id,request.payload);
            console.log(result)
            return h.response(result);
        }
    })

    await server.register({
        plugin: laabr
    })
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
