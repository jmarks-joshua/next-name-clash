/** Add your relevant code here for the issue to reproduce */
export default function Home() {

  const info = {
    name: 'John',
  }

  const action = async () => {
    'use server'
    console.log(info.name)
    const {name} = info
    console.log(name)
  }

  return null
}
