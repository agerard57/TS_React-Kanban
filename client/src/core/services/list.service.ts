import axios from 'axios';

import { adaptListDtoToList } from '../adapters';
import { ListDto } from '../dto';
import { List } from '../interfaces';

export const getAll: () => Promise<List[]> = async () => {
  const url = 'http://localhost:3001/lists/details';

  const response = await axios.get(url);
  const data = response.data as ListDto[];
  const lists = [] as List[];

  data.forEach((listDto) => {
    const list = adaptListDtoToList(listDto);
    lists.push(list);
  });

  return lists;
};
