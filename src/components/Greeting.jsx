import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingsSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { greetings } = useSelector((state) => state.greetings);
  const { isFetched } = useSelector((state) => state.greetings);

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchGreetings());
    }
  }, [dispatch, isFetched]);

  return <>{greetings ? <h1>{greetings.message}</h1> : <h1>Loading...</h1>}</>;
}

export default Greeting;
