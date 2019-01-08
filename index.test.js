const MemoryDatabase = require('./index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
  });

  it('create an object in database', () => {
    const emoji = { name: 'Happs' };
    const createdEmoji = db.create(emoji);

    expect(createdEmoji.name).toEqual('Happs');
  });

  it('can find an object by id', () => {
    const emoji = { name: 'Happs' };
    const createdEmoji = db.create(emoji);

    const foundEmoji = db.findById(createdEmoji._id);
    expect(foundEmoji).toEqual(createdEmoji);
  });

  it('throw error when id not found', () => {
    try {
      const foundEmoji = db.findById(2);
      expect(foundEmoji).toThrowError();
    } catch(err) {
      expect(err).toEqual('No object with id 2 found');
    }
  });
  
  it('can return a list of all objects', () => {
    const happy1 = db.create({ name: 'Happs1' });
    const happy2 = db.create({ name: 'Happs2' });

    expect(db.find()).toEqual([happy1, happy2]);
  });

  it('updates object', () => {
    const happy = db.create({ name: 'Happs1' });
    const sad = { _id: happy._id, name: 'Saddy2' };
    
    expect(db.update(happy._id, { name: 'Saddy2' })).toEqual(sad);
  });

  it('update throws error', () => {
    try {
      expect(db.update(5, { name: 'Saddy2' })).toThrowError();
    } catch(err) {
      expect(err).toEqual('No object with id 5 found');
    }
  });

  it('deletes object', () => {
    const happy = db.create({ name: 'Happs' });
    
    expect(db.delete(happy._id)).toEqual({ deleted: 1 });
  });

  it('delete throws error', () => {
    try {
      expect(db.update(9)).toThrowError();
    } catch(err) {
      expect(err).toEqual('No object with id 9 found');
    }
  });

  it('drop deletes all keys', () => {
    db.create({ name: 'Happs' });
    expect(db.drop()).toEqual({});
  });
});
