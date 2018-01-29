export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index,
  };
}

export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment,
  };
}

export function removeComment(postId, inex) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId,
  };
}
