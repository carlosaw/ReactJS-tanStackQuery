"use client";

import { Post } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Page = () => {
  
  const query = useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return result.data;
    }
  });


  return (   
    <div className="container mx-auto">
      <h1 className="text-white text-3xl">Opa, tudo bem?</h1>

      {query.isLoading && "Carregando..."}

      {query.data &&
        <ul>
          {query.data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      }      
    </div>     
  );
}

export default Page;