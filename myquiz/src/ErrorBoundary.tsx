import React, { PropsWithChildren } from 'react';

type State = {
    hasError: boolean;
};

class ErrorBoundary extends React.Component<PropsWithChildren, State> {
    constructor(props: any) {
      super(props);
      this.state = {
         hasError: false
         };
    }
  
    static getDerivedStateFromError() {
      return { 
        hasError: true
       };
    }
  
    componentDidCatch(error: any, errorInfo: any) {
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something Went Wrong</h1>;
      }
  
      return this.props.children; 
    }
  }
  
  export default ErrorBoundary;