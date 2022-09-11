import { Comment, CommentResponse } from '../Models/Comment';

export const MapComments = (comments: CommentResponse[]): Comment[] => {
  return comments.map(comment => (
    {
      id: comment.id,
      body: comment.body,
      viewed: false,
    }
  ));
}