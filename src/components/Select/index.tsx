import * as Styled from './styles';

export type SelectProps = {
  options: string[];
};

export const Select = ({ options }: SelectProps) => {
  return (
    <Styled.Select aria-label="Select">
      {options.map((option, index) => (
        <Styled.Option aria-label="options" key={index}>
          {option}
        </Styled.Option>
      ))}
    </Styled.Select>
  );
};
