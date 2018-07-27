import { Component, State, Prop } from '@stencil/core';
import { client, GetTodosQuery } from '../../graphql/apollo-client';
import { getTodos, getTodos_todoes } from '../../graphql/generated-types';

@Component({
  tag: 'app-todos',
  // styleUrl: 'app-todos.css',
})
export class AppTodos {
  @Prop({ context: 'isServer' }) private isServer: boolean;
  @State() todos: getTodos_todoes[] = [];

  componentWillLoad() {
    if (this.isServer) {
      return Promise.resolve();
    }
    
    return client.query<getTodos>({
      query: GetTodosQuery,
    })
    .then(response => {
      this.todos = response.data.todoes;
      console.log(this.todos);
    });
  }

  render() {
    return (
      <div class='app-todos'>
        <p>app-todos</p>
        <ul>
          {this.todos.map(todo => (
            <li>
              <p>{todo.text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
