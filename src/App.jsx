import { useQuery, useMutation } from '@tanstack/react-query'

const POSTS = [
  {id: 1, title: "Post 1"},
  {id: 2, title: "Post 2"},
]

function App(){
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  })

  if(postsQuery.isLoading) {
    return <h1>Loading....</h1>
  }

  return <h1>Tanstack Query </h1>

}

function wait(duration){
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default App