import React from 'react';
import { useDataValue } from '../../../DataProvider';
import { Identifier } from '../../Identifier.enum';
import { Text } from '../../../Text';

import { BaseBlock } from '../BaseBlock';

interface Metadata {
}

export class Title extends BaseBlock<Metadata, string | number> {
  identifier = Identifier.Title;

  Component: React.FC<Metadata> = () => {
    const value = useDataValue(this.accessor);

    if (value === undefined) {
      return null;
    }

    return (
      <Text>
        {value}
      </Text>
    );
  };
}
