// @flow
import React from 'react';
import styles from './<%= pascalEntityName %>.scss';

type Props = {};

const <%= pascalEntityName %> = ({}: Props) => (
  <div className={styles.<%= pascalEntityName %>}>
    <%= pascalEntityName %>
  </div>
);

export default <%= pascalEntityName %>;
