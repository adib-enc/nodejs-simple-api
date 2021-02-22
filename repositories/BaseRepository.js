/**
 * 
 * mongoose based repo
 * 
 */
class BaseRepository{

    constructor(model = null){
        this.model = model
    }

    create(data){
        return this.model.create(data)
    }

    delete(id){
        return this.model.findByIdAndRemove(id)
    }
    
    single(id){
        return this.model.findById(id)
    }

    all(){
        return this.model.find().lean()
    }

    update(id, data){
        let opt = {
            new: true // It will return updated data
        }
        return this.model.findByIdAndUpdate(id, { $set: data }, opt)
    }
}

module.exports = BaseRepository