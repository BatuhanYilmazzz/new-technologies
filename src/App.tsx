import { Center, PasswordInput, Space, Flex, Box } from '@mantine/core';
import { Input } from '@mantine/core';
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from '@mantine/form';
import { Button, Group, TextInput, NumberInput } from '@mantine/core';
import { useBearStore, useOtherBearStore } from './store';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

function App() {
  const bears = useBearStore((state) => state.bears, shallow);
  const todos = useBearStore((state) => state.todos, shallow);
  const posts = useOtherBearStore((state) => state, shallow);

  console.log(posts);

  useEffect(()=> {
    posts.getPosts();
  },[])

  const form = useForm({
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      job: isNotEmpty('Enter your current job'),
      email: isEmail('Invalid email'),
      favoriteColor: matches(
        /^#([0-9a-f]{3}){1,2}$/,
        'Enter a valid hex color'
      ),
      age: isInRange(
        { min: 18, max: 99 },
        'You must be 18-99 years old to register'
      ),
    },
  });

  console.log("render")

  return (
    <Center maw={400} h={'100vh'} mx='auto'>
      <Box component='form' onSubmit={form.onSubmit(() => {})} w={'100%'}>
        <TextInput
          label='Name'
          placeholder='Name'
          withAsterisk
          {...form.getInputProps('name')}
          max={500}
          w={'100%'}
        />
        <TextInput
          label='Your job'
          placeholder='Your job'
          withAsterisk
          mt='md'
          {...form.getInputProps('job')}
        />
        <TextInput
          label='Your email'
          placeholder='Your email'
          withAsterisk
          mt='md'
          {...form.getInputProps('email')}
        />
        <TextInput
          label='Your favorite color'
          placeholder='Your favorite color'
          withAsterisk
          mt='md'
          {...form.getInputProps('favoriteColor')}
        />
        <NumberInput
          label='Your age'
          placeholder='Your age'
          withAsterisk
          mt='md'
          {...form.getInputProps('age')}
        />

        <Group position='right' mt='md'>
          <Button type='submit'>Submit</Button>
        </Group>
        {bears}
      </Box>
    </Center>
  );
}

export default App;
