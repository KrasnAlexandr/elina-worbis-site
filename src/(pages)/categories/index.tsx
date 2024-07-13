import Link from 'next/link';
import { Title } from '@/shared/ui/Title';
import { INSTRUCTION_URL } from '@/shared/constants';

interface CategoryItem {
  id: number;
  name: string;
  parentId: null | string;
}

interface FetchCategoriesResponse {
  result: {
    categories: {
      items: Array<CategoryItem>;
    };
  };
}

export const fetchCategories = async (): Promise<FetchCategoriesResponse> => {
  const response = await fetch(INSTRUCTION_URL, {
    method: 'POST',
    next: {
      revalidate: 60, // sec => 3600 === 1 hour
    },
    body: JSON.stringify({
      method: 'category.all',
      params: { pagination: { offset: 0, limit: 1000 } },
      jsonrpc: '2.0',
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }

  return await response.json();
};

export const CategoriesPage = async () => {
  const categories = await fetchCategories();

  const parentCategories = categories.result.categories.items.filter((category) => category.parentId === null);

  return (
    <>
      <Title dictionary="categories" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {parentCategories.map((item: CategoryItem) => (
          <Link href={`category/${item.id}`} key={item.id}>
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};
