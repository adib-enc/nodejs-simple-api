const BaseRepository = require('./BaseRepository')
const dataModel = require('../model/data.model');

class DataRepository extends BaseRepository{
    constructor(){
        super();
        this.model = dataModel
    }
}

module.exports = DataRepository