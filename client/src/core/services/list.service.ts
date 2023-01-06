import { adaptListDtoToList } from '../adapters';
import { ListDto } from '../dto';
import { List } from '../interfaces';
import { publicAxios } from './publicAxios.service';

export const getAllLists: () => Promise<List[]> = async () => {
  const url = `${process.env.REACT_APP_API_URL}/lists/details`;

  const response = await publicAxios.get(url);
  const data = response.data as ListDto[];
  const lists = [] as List[];

  data.forEach((listDto) => {
    const list = adaptListDtoToList(listDto);
    lists.push(list);
  });

  return lists;
};
