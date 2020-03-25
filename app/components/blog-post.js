import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { object } from 'prop-types';

export default class BlogPostComponent extends Component {
  @arg(object.isRequired)
  blog;
}
