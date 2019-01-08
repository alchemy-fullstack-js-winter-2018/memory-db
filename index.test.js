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
});
