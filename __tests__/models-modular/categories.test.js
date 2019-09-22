
const Categories = require('../../models-modular/products/products.js');
const supergoose = require('../supergoose.js');


describe('Categories Modular (Modular)', () => {
  let model;

  beforeEach(() => {
    model = new Categories();
  });

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    let obj = { name: 'Test Category', description: 'person' };
    return model.create(obj)
      .then(createdRecord => model.get(createdRecord.id))
      .then(foundRecord => {
        expect(foundRecord.name).toEqual(obj.name);
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category', description: 'person' };
    return model.create(obj)
      .then(createdRecord => {
        return model.get(createdRecord._id)
          .then(foundRecord => {
            Object.keys(obj).forEach(key => {
              expect(foundRecord.name).toEqual(obj.name);
            });
          });
      });
  });

  it('can delete() a category', () => {

    let obj = { name: 'Test Category', description: 'person' };
    return model.create(obj)
      .then(createdObj => {
        return model.delete(createdObj._id)
          .then(deltedRecord => {
            console.log(deltedRecord._id)
            expect(deltedRecord.name).toEqual(obj.name);

          });

      });

  });

  it('can update() a category', () => {
    let obj = { name: 'Test Category', description: 'person' };
    return model.create(obj)
      .then(createdRecord => {
        let updatedRecord = { createdRecord, name: 'Update Test', new: true };
        let updatedId = createdRecord._id;
        model.update(updatedId, updatedRecord);

        expect(updatedId).toEqual(createdRecord._id);
        expect(updatedRecord.name).toEqual('Update Test');
      });
  });

  it('can get() all categories when no id is passed', () => {
    let obj = { name: 'Test Category', description: 'person' };
    return model.create(obj)
      .then(createdRecord => {
        return model.get(createdRecord) //I just passed in the record without an id
          .then(foundRecord => {
            Object.keys(obj).forEach(key => {
              expect(foundRecord.name).toEqual(obj.name);
            });
          });
      });
  });

});