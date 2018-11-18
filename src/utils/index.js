import _ from 'lodash';
import slugify from 'slugify';

export const hashtagify = text => {
  return text
    ? slugify(text)
        .split('-')
        .map(word => _.capitalize(word))
        .join('')
    : null;
};
