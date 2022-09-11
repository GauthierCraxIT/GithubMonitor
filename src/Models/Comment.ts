
interface CommentBase {
  id: number
  body: string
}

export interface Comment extends CommentBase {
  viewed: boolean
}

export interface CommentResponse extends CommentBase {

}