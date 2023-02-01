import React, { HTMLProps, Ref } from 'react'

const Input = (props: HTMLProps<HTMLInputElement>,ref:Ref<HTMLInputElement>) => {
  return (
    <input {...props}  ref={ref}/>
  )
}

export default React.forwardRef(Input);