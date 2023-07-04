import { renderTheme } from '@/utils/render-theme';
import { Select } from '.';
import { mockSelect } from './mock';
import { screen } from '@testing-library/react';

describe('<Select />', () => {
  it('should render the select with all the options', () => {
    renderTheme(<Select options={mockSelect} />);

    const select = screen.getByLabelText('Select');
    const options = screen.getAllByLabelText('options');

    expect(select).toBeInTheDocument();
    expect(options.length).toBe(2);
  });
});
