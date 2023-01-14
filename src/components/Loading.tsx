import React from 'react'
import { ErrorType } from '../types/Items.types';

interface LoadingProps {
  notFound: boolean;
  serverError: boolean;
  loading: boolean;
}

const Loading : React.FC<LoadingProps> = ({notFound, serverError, loading}) => {

  if(notFound){
    return <div>Not found</div>
  }
  if(serverError){
    return <div>Server error</div>
  }
  if(loading){
    return <div>Loading</div>
  }
    
}

export default Loading
