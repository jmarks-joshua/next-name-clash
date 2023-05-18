/** Add your relevant code here for the issue to reproduce */
export default function Home() {

  const info = {
    name: 'John',
    test: 'test'
  }

  const action = async () => {
    'use server'
    console.log(info.name)
    console.log(info.test)
  }

  return null
}
