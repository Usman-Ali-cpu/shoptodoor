import React from 'react';
import renderer from 'react-test-renderer';

import EclipseDropper from '../Components/Molecules/EclipseDropper';
import EclipseDropperWithLogo from '../Components/Molecules/EclipseDropperWithLogo';

describe('EclipseDropper', () => {
  it('should render', () => {
    const tree = renderer.create(<EclipseDropper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('EclipseDropperWithLogo', () => {
  it('should render', () => {
    const tree = renderer.create(<EclipseDropperWithLogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

