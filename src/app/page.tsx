"use client";

import { usePosts } from "@/utils/queries";

const Page = () => {
  
  const posts = usePosts() ;

  return (   
    <div className="container mx-auto">
      <h1 className="text-white text-3xl">Opa, tudo bem?</h1>

      {posts.isLoading && "Carregando..."}

      {posts.data &&
        <ul>
          {posts.data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      }      
    </div>     
  );
}

export default Page;