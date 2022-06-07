import React from 'react'

interface props {
    name: string
    route: string

}
const Button = (props:props) => {
  return (
    <div className=' bg-rose text-white font-bold pt-2 pb-2  w-1/3 text-2xl flex justify-center '>{props.name}</div>
  )
}

export default Button