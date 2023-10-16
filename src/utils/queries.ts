import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPost, getPosts, getUsers } from "./api";
import { queryClient } from "./queryClient";

export const usePosts = () => {
   const query = useQuery({
    queryKey: ['posts'], 
    queryFn: getPosts,
  });
  return query;
}

export const usePost = (id: number) => useQuery({
  queryKey: ['posts', id],
  queryFn: () =>  getPost(id)
});

export const useUsers = () => {
  const query = useQuery({
   queryKey: ['users'], 
   queryFn: getUsers,
 });
 return query;
}

export const useUsersPrefetch = () => {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery({
    queryKey: ['users'], 
    queryFn: getUsers
  });
}

export const InvalidatePosts = () => {
  queryClient.invalidateQueries({
    queryKey: ['posts']
  });
}