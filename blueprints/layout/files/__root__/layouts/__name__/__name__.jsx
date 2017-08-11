// @flow
import React, { Element } from 'react';
import styles from './<%= pascalEntityName %>.scss';

type Props = {
  children: Element<any>,
};

const <%= pascalEntityName %> = ({ children }: Props) => {
  return (
    <div className={styles.<%= pascalEntityName %>}>
      {children}
    </div>
  );
};

export default <%= pascalEntityName %>;
