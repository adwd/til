/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import ChangeTodoStatusMutation from '../mutations/ChangeTodoStatusMutation';
import RemoveTodoMutation from '../mutations/RemoveTodoMutation';
import RenameTodoMutation from '../mutations/RenameTodoMutation';
import TodoTextInput from './TodoTextInput';

import React from 'react';
import {
  createFragmentContainer,
  graphql,
  RelayProp,
} from 'react-relay';
import classnames from 'classnames';
import { Todo_todo } from '../__generated__/Todo_todo.graphql';
import { Todo_viewer } from '../__generated__/Todo_viewer.graphql';

type Props = {
  todo: Todo_todo;
  viewer: Todo_viewer;
  relay: RelayProp;
}

class Todo extends React.Component<Props> {
  state = {
    isEditing: false,
  };
  _handleCompleteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const complete = e.target.checked;
    ChangeTodoStatusMutation.commit(
      this.props.relay.environment,
      complete,
      this.props.todo,
      this.props.viewer,
    );
  };
  _handleDestroyClick = () => {
    this._removeTodo();
  };
  _handleLabelDoubleClick = () => {
    this._setEditMode(true);
  };
  _handleTextInputCancel = () => {
    this._setEditMode(false);
  };
  _handleTextInputDelete = () => {
    this._setEditMode(false);
    this._removeTodo();
  };
  _handleTextInputSave = (text: any) => {
    this._setEditMode(false);
    RenameTodoMutation.commit(
      this.props.relay.environment,
      text,
      this.props.todo,
    );
  };
  _removeTodo() {
    RemoveTodoMutation.commit(
      this.props.relay.environment,
      this.props.todo,
      this.props.viewer,
    );
  }
  _setEditMode = (shouldEdit: any) => {
    this.setState({isEditing: shouldEdit});
  };
  renderTextInput() {
    return (
      <TodoTextInput
        className="edit"
        commitOnBlur={true}
        initialValue={this.props.todo.text!}
        onCancel={this._handleTextInputCancel}
        onDelete={this._handleTextInputDelete}
        onSave={this._handleTextInputSave}
      />
    );
  }
  render() {
    return (
      <li
        className={classnames({
          completed: this.props.todo.complete,
          editing: this.state.isEditing,
        })}>
        <div className="view">
          <input
            checked={this.props.todo.complete!}
            className="toggle"
            onChange={this._handleCompleteChange}
            type="checkbox"
          />
          <label onDoubleClick={this._handleLabelDoubleClick}>
            {this.props.todo.text}
          </label>
          <button
            className="destroy"
            onClick={this._handleDestroyClick}
          />
        </div>
        {this.state.isEditing && this.renderTextInput()}
      </li>
    );
  }
}

export default createFragmentContainer(Todo, {
  todo: graphql`
    fragment Todo_todo on Todo {
      complete,
      id,
      text,
    }
  `,
  viewer: graphql`
    fragment Todo_viewer on User {
      id,
      totalCount,
      completedCount,
    }
  `,
});
