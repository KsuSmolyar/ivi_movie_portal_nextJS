import renderer from 'react-test-renderer';
import { RatingMovie } from './RatingMovie';

describe('проверка RatingMovie', () => {
  test('отрисовка RatingMovie ', () => {
    const component = renderer.create(<RatingMovie grade={10} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
