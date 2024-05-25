import styled from '@emotion/styled';

import { Button } from './Button';

const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

function ButtonWrapper(props) {
  return <CustomButton {...props} />;
}

export default {
  title: 'Design System/Button',
  component: Button,
};

export const AllButtons = {
  name: 'all buttons',
  render: () => (
    <>
      <Button appearance='primary' size='large' color={'brown'}>
        Primary
      </Button>
      <Button appearance='secondary' size='large' color={'brown'}>
        Secondary
      </Button>
      <Button appearance='text' size='large' color={'brown'}>
        Text
      </Button>
      <br />
      <br />
      <Button appearance='primary'>Primary</Button>
      <Button appearance='secondary'>Secondary</Button>
      <Button appearance='text'>Text</Button>
      <br />
      <br />
      <Button appearance='primary' size='small'>
        Primary
      </Button>
      <Button appearance='secondary' size='small'>
        Secondary
      </Button>
      <Button appearance='text' size='small'>
        Text
      </Button>
    </>
  ),
};
