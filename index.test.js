const MemoryDatabase = require('./index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
  });

  it('create an object in database', () => {
    const emoji = { name: 'Happs' };
    const cretaedEmoji = db.create(emoji);
    expect(cretaedEmoji.name).toEqual('Happs');
  });
});
