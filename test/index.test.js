const MemoryDatabase = ('../lib/index');

describe('memory database' () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase()
  });
    //run before each test (it)
    //*clear database
    //*setup required for each test
    it('creates an object in the database', () => {
      const cat = { name: 'fluffy' };
      const createdCat = db.create(cat);
      expect(createdCat.name).toEqual('fluffy')
    });

    it('can find an object by id', () => {
      const cat = {name: 'fluffy' };
      const createdCat = db.create(cat)
    });
  });
  // beforeAll(() => {
  //   //once before the first test runs
  //   //*starting our database
  //   //*getting credentials
  // });
  // afterEach(() => {
  //   //run after each test (it)
  //   //*clean up between tests
  //   //*closing db connections
  // });
  // afterAll(() => {
  //   //run after the last test runs
  //   //*deleting files that were created during testing
  //   //*shutdown db
  // });
