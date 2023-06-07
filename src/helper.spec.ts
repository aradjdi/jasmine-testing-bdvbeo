import * as helper from './helper';
import { yourMainCode } from './main';

describe('main', () => {
  it('should mock an imported function', () => {
    const spy = spyOn(helper, 'hello').and.returnValue(
      'should not be "world" anymore'
    );
    expect(yourMainCode()).toBe('should not be "world" anymore');
    expect(spy).toHaveBeenCalled();
  });

  it('should mock an imported function', () => {
    const spy = spyOn(helper, 'hello').and.callFake(
      () => 'should not be "another world" anymore'
    );
    expect(yourMainCode()).toBe('should not be "another world" anymore');
    expect(spy).toHaveBeenCalled();
  });
});
