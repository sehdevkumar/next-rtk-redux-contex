

export default async function Home() {
   "no-cache"
   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
   const data = await res.json();
   console.log(data);
  
  
  return (
    <div>
      
      Hello world
    </div>
  );
}
